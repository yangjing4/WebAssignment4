import { Injectable } from '@angular/core';
import { Post } from './post';
import { POST } from './mock-posts';
//import { Headers, Http } from '@angular/http';

@Injectable()
export class PostService {
    getPosts(): Promise<Post[]> {
        return Promise.resolve(POST);
    }

    //constructor(private http: Http) { }

    getPost(title: string): Promise<Post> {
        return this.getPosts()
                   .then(posts => posts.find(post => post.title === title));       
    }

    /*
    create(title: string, author: string, date: string, post: string): Promise<Post[]> {
        POST.push();
        return Promise.resolve(POST);
        
    }
    */
}