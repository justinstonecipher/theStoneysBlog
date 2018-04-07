import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../providers/auth.service';

import { PostService } from './shared/post.service';
import { Post } from './shared/post';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  providers: [PostService, AuthService]
})
export class PostsListComponent implements OnInit {

  constructor(private postService: PostService, private authService: AuthService) { }

  ngOnInit() {
  }
}
