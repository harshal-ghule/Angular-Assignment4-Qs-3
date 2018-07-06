import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../books-data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  public book = [];
  constructor(private _booksservice: BooksDataService)
   { }

  ngOnInit() 
  {
    this.book = this._booksservice.getBooksDetails();
  }

}
