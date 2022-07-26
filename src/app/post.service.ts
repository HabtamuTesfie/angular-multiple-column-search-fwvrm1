import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from './post-model';
@Injectable()
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Array<PostModel>> {
    return this.httpClient.get<Array<PostModel>>('https://jsonplaceholder.typicode.com/posts');
  }

}