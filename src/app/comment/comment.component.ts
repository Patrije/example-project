import { Component, OnInit } from '@angular/core';
import { CommentService, Comment } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  listaKomentow: Comment[] = [];

  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
      this.commentService.getComments().subscribe(response => this.listaKomentow = response)
  }

}
