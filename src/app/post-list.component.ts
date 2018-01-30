import { Component, Output, EventEmitter } from '@angular/core';
import { PostService } from './post.service'
import { AppComponent } from './app.component'
import { Post } from './post'
import { Comment } from './comment'

@Component({
   selector: 'post-list',
   templateUrl: './post-list.component.html'
})

export class PostListComponent  {

   posts: Product[];
   comments: Comment[];

   @Output() commentsFound = new EventEmitter();

   constructor(private postService: PostService) {}

   ngOnInit(): void {
     this.postService.getAllPosts().subscribe(data => this.posts = data)
   }

   printComments(comments: Comment[]): void {
     console.log(comments);
   }

   getComments(index: number): void {
     this.postService.getCommentsForPost(index).subscribe(data => this.comments = data)
     this.printComments(this.comments);
   }




}
