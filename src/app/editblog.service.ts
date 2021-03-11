import { Injectable } from '@angular/core';
import { IBlog } from './IBlogs';

@Injectable({
  providedIn: 'root'
})
export class EditblogService {

  editBlogInfo: IBlog;
  constructor() { }

  saveEditBlogDesc(blog){
    this.editBlogInfo = blog;
  }

  getEditBlog(){
    return this.editBlogInfo;
  }
}
