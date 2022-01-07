import { Component, OnInit } from '@angular/core';
import {Book} from "../model/Book";
import {BookServiceService} from "../service/book-service.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  // @ts-ignore
  book: Book={};

  constructor(
    private bookService: BookServiceService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params: Params)=>{
      let id = params['id'];
      this.bookService.findBookById(id).subscribe(data=>{
        this.book=data;
      })
    })
  }

  backToList(){
    this.router.navigate(['/books']);
  }

  editBook(){
    this.bookService.editBook(this.book).subscribe(data=>{
      this.backToList();
    })
  }
}
