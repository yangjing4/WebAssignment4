import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})


export class PostComponent implements OnInit {
  posts: Post[];
  selectedPost: Post;
  post1 = new Post;
  
  constructor(
    private router: Router,
    private postService: PostService) { }


  getPosts(): void {
    //this.posts = this.postService.getPosts();
    this.postService.getPosts().then(posts => this.posts = posts);
  }


  ngOnInit(): void {
    this.getPosts();
    posts => this.posts = posts;
  }

  onSelect(post: Post): void {
     this.selectedPost = post;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPost.title]);
  }

  myFunction() : void{
    var date = new Date();
    var query = "";
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var minute = minutes < 10 ? '0'+ minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    this.post1.date = "'"  + date.getMonth() + "/" 
    + date.getDate() + "/"+  date.getFullYear() + ", "+strTime+"'";
    
    this.posts.push(this.post1);
  }

  delete(post: Post): void {
    this.posts = this.posts.filter(h => h !== post);
    
  }
  
  changeVisibility() : void
  {
    document.getElementById("input1").style.visibility="hidden";
    document.getElementById("input2").style.visibility="hidden";
    document.getElementById("input3").style.visibility="hidden";
    document.getElementById("submit").style.visibility="hidden";
    document.getElementById("addnew").style.visibility="visible";
  }

  changeVisibile() : void
  {
    document.getElementById("input1").style.visibility="visible";
    document.getElementById("input2").style.visibility="visible";
    document.getElementById("input3").style.visibility="visible";
    document.getElementById("submit").style.visibility="visible";
    document.getElementById("addnew").style.visibility="hidden";
  }
}

