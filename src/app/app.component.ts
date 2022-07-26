import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { PostModel, SearchModel} from './post-model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  posts: Array<PostModel>;
  model:SearchModel =  new SearchModel();
  isTableDisplayed = (this.model.userId || this.model.title || this.model.body);
  constructor(private postService: PostService) {}
  
  ngOnInit() {
    this.postService.getPosts().subscribe((data: any) => {
      this.posts = data;
    })
    
  }
  
}

