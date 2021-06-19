import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {SearchService} from '../services/search.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery = '';
  searchResults:any =[];
  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'];

      this.searchService.getsearchResults(this.searchQuery)
        .subscribe(response => {
        console.log(response);
          this.searchResults = response.items
      })
    });
  }
  filterItemsOfType(type: any){
    return this.searchResults.filter((x: any) => x.type == type);
  }
}
