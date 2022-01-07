import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../service/book-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../model/Book";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  // @ts-ignore
  book: Book ;

  constructor(
    private bookService: BookServiceService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(bookId=>{
      // @ts-ignore
      const id = +bookId.get('id');
      this.bookService.findBookById(id).subscribe(book=>{
        this.book=book;
      })
    })
  }

  backToList(){
    this.router.navigate(['/books']);
  }

  deleteBookById(){
    this.bookService.deleteBookById(this.book.id).subscribe(data=>{
      this.backToList()
    });
  }

}
