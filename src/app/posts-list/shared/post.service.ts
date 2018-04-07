import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Post } from './post';

@Injectable()
export class PostService {

  private basePath: string = '/posts';
  posts: AngularFireList<any>;
  selectedPost: Post = new Post();
  constructor(private db: AngularFireDatabase) { }

  getData() {
    this.posts = this.db.list(this.basePath);
    return this.posts;
  }

  insertPost(post: Post) {
    this.posts.push({
      title: post.title,
      description: post.description
    });
  }

  updatePost(post: Post) {
    this.posts.update(post.$key, {
      title: post.title,
      description: post.description
    });
  }

  deletePost($key: string) {
    this.posts.remove($key);
  }
}
