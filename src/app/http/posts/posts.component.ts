import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  submitted = false;
  loadedPosts = [];
  isFetching = false;
  
  constructor(private http : HttpClient) { }

  ngOnInit() {
	this.fetchPosts();
  }
  
  onCreatePost(postData){
	this.http.post(
	'https://udemy-angular-10.firebaseio.com/posts.json',
	 postData
	).subscribe(responseData => {
        console.log(responseData);
    });
  }
  
  submitPosts(form){
	if(form.valid){
		this.submitted = true;
		this.onCreatePost(form.value);
	}
  }
  
  onFetchPosts() {
    this.fetchPosts();
  }
  
  fetchPosts(){
    this.isFetching = true;
	this.http.get('https://udemy-angular-10.firebaseio.com/posts.json')
	.pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
    )
	.subscribe(posts => {
        console.log(posts);
		this.isFetching = false;
		this.loadedPosts = posts;
    });
  }

}
