import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";

const routes: Routes = [
  {path:'books',component:BookListComponent},
  {path:'',redirectTo:'books',pathMatch:'full'},
  {path:'create-book',component:CreateBookComponent},
  {path:'edit-book/:id',component:EditBookComponent},
  {path:'delete-book/:id',component:DeleteBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
