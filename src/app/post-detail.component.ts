import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { PostService } from './post.service';
import { Post } from './post';


@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
    @Input() post: Post;
    
    

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private location: Location,
      ) {}

    ngOnInit(): void {      
        this.route.paramMap
        .switchMap((params: ParamMap) => this.postService.getPost(params.get('title')))
        .subscribe(post => this.post = post);
        
        /*this.postService.getPosts()
        .then(post => this.post);*/
    }

   save():void{
    var date = new Date();
    var query = "";
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var minute = minutes < 10 ? '0'+ minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    this.post.date = "'"  + date.getMonth() + "/" 
    + date.getDate() + "/"+  date.getFullYear() + ", "+strTime+"'";
    
    this.location.back();
  
   }

    
}