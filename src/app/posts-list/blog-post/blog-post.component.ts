import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../shared/post.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor(private postService: PostService, private toastr: ToastrService) { }

  ngOnInit() {
    this.postService.getData();
    this.resetForm();
  }

  onSubmit(postForm: NgForm) {
    if (this.postService.selectedPost.$key === null) {
      this.postService.insertPost(postForm.value);
      this.resetForm(postForm);
      this.toastr.success('Submitted Successfully', 'Post Created');
    } else {
      this.postService.updatePost(this.postService.selectedPost);
      this.resetForm(postForm);
      this.toastr.success('Updated Successfully', 'Post Updated')
    }
  }

  resetForm(postForm?: NgForm) {
    if(postForm !== null && postForm !== undefined) {
      postForm.reset(postForm);
    }
    this.postService.selectedPost = {
      $key: null,
      title: '',
      description: '',
      dateCreated: null,
    }
  }

}
