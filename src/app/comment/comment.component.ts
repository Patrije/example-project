import { Component, OnInit } from '@angular/core';
import { CommentService, Comment } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  private _listaKomentow: Comment[] = [];
  private _userComment = '';
  private _commentId = 1000;

  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
      this.commentService.getComments().subscribe(response => this._listaKomentow = response);
  }

  addComment(){
    this._commentId++;
    this.commentService.addComment({id: this._commentId, body: this._userComment, postId: 7})
    .subscribe(resp => this.commentService.getComments()
    .subscribe(response => this._listaKomentow = response));
  }

  public get listaKomentow(){
    return this._listaKomentow;
  }

  public get userComment(){
    return this._userComment;
  }

  public set userComment(userComment: string){
     this._userComment = userComment;
  }

  public get commentId(){
    return this._listaKomentow;
  }

}
