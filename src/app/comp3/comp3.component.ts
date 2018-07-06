import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../books-data.service';


@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  
  public book = [];
  constructor(private _booksservice: BooksDataService)
   { }

  ngOnInit() 
  {
    this.book = this._booksservice.getBooksDetails();
  }

}
