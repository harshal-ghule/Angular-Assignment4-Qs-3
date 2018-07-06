import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../books-data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  public book = [];

  constructor(private _booksservice: BooksDataService) // instance of service
  { }

  ngOnInit()  //Call the service method once
  {
    this.book = this._booksservice.getBooksDetails();
  }

}
