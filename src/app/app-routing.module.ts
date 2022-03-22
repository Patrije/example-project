import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { ExampleComponent } from './example/example.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:'example', component: ExampleComponent},
  {path:'comment', component: CommentComponent},
  {path:'todos', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
