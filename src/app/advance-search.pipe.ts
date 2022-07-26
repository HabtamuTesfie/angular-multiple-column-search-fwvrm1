import { Pipe, PipeTransform } from '@angular/core';
import { PostModel, SearchModel} from './post-model';

@Pipe({
  name: 'advanceSearch',
  pure: false
})
export class AdvanceSearchPipe implements PipeTransform {

  transform(posts: PostModel[], search: SearchModel): any {
     console.log(search, 'd');
    // no post return
    if(!posts || posts.length === 0) return posts;
    console.table(posts);

    // search is blank, return post
    if(!search || !search.userId && !search.title && !search.body) return posts;
debugger;
  console.log(search);
    return posts.filter((post) => {
      return (!search.userId || post.userId === Number(search.userId) ) &&
          (!search.title || post.title.startsWith(search.title))  &&
          (!search.body || post.body.includes(search.body));
    })
    
  }

}