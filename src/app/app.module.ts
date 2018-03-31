import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail.component';
import { PostComponent } from './post.component';

import { PostService } from './post.service';

import { RouterModule }   from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    PostComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { 
        path: '', 
        redirectTo: '/posts', 
        pathMatch: 'full' 
      },
      {
        path: 'posts',
        component: PostComponent
      },
      {
        path: 'detail/:title',
        component: PostDetailComponent
      }
    ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
