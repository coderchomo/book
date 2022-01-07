import { Component, OnInit } from '@angular/core';
import {Book} from "../model/Book";
import {BookServiceService} from "../service/book-service.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[]=[];

  constructor( private bookService:BookServiceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.bookService.findAllBook().subscribe(data=>{
      this.books=data;
    })
  }

}
