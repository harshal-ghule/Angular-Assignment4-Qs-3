import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {

  public books = [

    {"Name" : "C" , "Price" : 500 , "Author" : " abc " , "Pages" : 1500 },
    {"Name" : "C++" , "Price" : 700 , "Author" : " efg " , "Pages" : 1000 },
    {"Name" : "Java" , "Price" : 900 , "Author" : " hij " , "Pages" : 2000 },
    {"Name" : "PHP" , "Price" : 200 , "Author" : " xyz " , "Pages" : 500 },
  ];

  constructor() { }

 public getBooksDetails()
 {
    return this.books;
 }

}
