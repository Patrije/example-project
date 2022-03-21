import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Comment{
  id: number,
  body: string,
  postId: number
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {}

   getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('http://localhost:3000/comments');
  }
}
