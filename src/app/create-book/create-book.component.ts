import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookServiceService} from "../service/book-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  formCreate=new FormGroup({
    tittle: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });

  constructor(
    private bookService: BookServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  backToList(){
    this.router.navigate(['/books']);
  }

  createBook(){
    this.bookService.createBook(this.formCreate.value).subscribe(data=>{
      this.backToList();
    })
  }
}
