import { Component, OnInit } from '@angular/core';
import { CommentService, Comment } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  listaKomentow: Comment[] = [];
  userComment = '';
  commentId = 1000;

  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
      this.commentService.getComments().subscribe(response => this.listaKomentow = response);
  }

  addComment(){
    this.commentId++;
    this.commentService.addComment({id: this.commentId, body: this.userComment, postId: 7})
    .subscribe(resp => this.commentService.getComments()
    .subscribe(response => this.listaKomentow = response));
  }
}
