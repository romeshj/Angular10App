import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { Post } from '../http/post.model';

@Injectable()
export class PostsService {
  error = new Subject<string>();
  url = 'https://udemy-angular10-posts.firebaseio.com/posts.json';
  
  constructor(private http : HttpClient) { }
  
  onCreatePost(data){
    const postData: Post = { title: data.title, content: data.content };
	this.http.post(this.url, postData).subscribe(
		responseData => {
			console.log(responseData);
		},
		error => {
          this.error.next(error.message);
        }
	);	
  }
  
  fetchPosts(){
	return this.http.get(this.url)
	.pipe(
        map(responseData => {
          const postsArray : Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
		catchError(errorRes => {
			return throwError(errorRes);
		}	
    ))
  }
  
  deletePosts() {
    return this.http.delete(this.url);
  }
}
