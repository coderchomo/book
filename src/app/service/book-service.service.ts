import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/Book";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  API_SERVER_URL=environment.API_LOCAL;

  constructor( private http:HttpClient ) { }

  public findAllBook(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.API_SERVER_URL}/books`);
  }

  public createBook(book : Book): Observable<Book> {
    return this.http.post<Book>(`${this.API_SERVER_URL}/books`,book);
  }

  public editBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.API_SERVER_URL}/books/`,book);
  }

  public findBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.API_SERVER_URL}/books/`+id);
  }

  public deleteBookById(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.API_SERVER_URL}/books/`+id)
  }
}
