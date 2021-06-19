import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mediaplayer';
  searchFormControl = new FormControl('', { updateOn: 'submit' });
  reactiveForm = new FormGroup({
    searchText: new FormControl('', [Validators.required]),
  });
  constructor( private router: Router) {

  }
  onSubmit(): void {
    this.router.navigate(["/search"],{queryParams: {q: this.reactiveForm.get('searchText')!.value}});
    // console.log(this.reactiveForm.get('searchText')!.value);
  }
  ngOnInit(): void {
    // this.reactiveForm.valueChanges.subscribe(selectedValue => {
    //   console.log(selectedValue)
    // })
  }
}
