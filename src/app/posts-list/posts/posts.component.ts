import { Component, OnInit } from '@angular/core';

import { PostService } from '../shared/post.service';
import { Post } from '../shared/post';
import { FirebaseDatabase } from '@firebase/database-types';
import { AngularFireDatabase } from 'angularfire2/database';
import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private basePath: '/posts';
  posts: Post[];
  constructor(private postService: PostService, private db: AngularFireDatabase, private toastr: ToastrService) { }

  ngOnInit() {
    let results = this.postService.getData();
    results.snapshotChanges().subscribe(p => {
      this.posts = [];
      p.forEach(element => {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        this.posts.push(y as Post);
      })
    });
  }

  deletePost(post: Post) {
    this.postService.deletePost(post.$key);
    this.toastr.success('Deleted Successfully', 'Post Deleted')
  }

  editPost(post: Post) {
    this.postService.selectedPost = post;
    console.log(this.postService.selectedPost);
  }
}
