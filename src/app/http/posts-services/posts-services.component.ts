import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-posts-services',
  templateUrl: './posts-services.component.html',
  styleUrls: ['./posts-services.component.css']
})
export class PostsServicesComponent implements OnInit, OnDestroy {
 
  @ViewChild('postsForm', {static:false}) postsFrm : NgForm;
  loadedPosts : Post[] = []; 	
  isFetching = false;
  error = null;
  private errorSub: Subscription;
  
  constructor( private postsService : PostsService) { }

  ngOnInit() {
	this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
	  console.log(this.error)
    });
	this.onFetchPosts();
  }
  
  submitPosts(postsData : Post ){
    console.log(this.postsFrm)
	console.log(postsData)
	if(this.postsFrm.valid){
		this.postsService.onCreatePost(postsData);
	}
  }
  
  onFetchPosts(){
    this.isFetching = true;
	this.postsService.fetchPosts().subscribe(
	posts => {	    
		this.isFetching = false;
		this.loadedPosts = posts;
	},
	  error => {
		this.error = error.message;
		console.log( " error ==============  " , error);
	  }
	)
  }
  
  onClearPosts(){
	this.postsService.deletePosts().subscribe(() => {
	 this.loadedPosts = [];
	})
  }
  
  ngOnDestroy(){
	this.errorSub.unsubscribe();
  }
}
