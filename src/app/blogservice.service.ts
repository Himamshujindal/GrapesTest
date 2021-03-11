import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {

  constructor() { }
  blogs = [
    { 
      blogTitle:"blog 1",
      blogDescription:"This blog is written by Vanika" 
    },
    { 
      blogTitle:"blog 2",
      blogDescription:"This blog is written by Preeti" 
    },
    { 
      blogTitle:"blog 3",
      blogDescription:"This blog is written by Himanshu" 
    },
    { 
      blogTitle:"blog 4",
      blogDescription:"This blog is written by Jindal" 
    },
  ];

  GetBlogsList(){
    return this.blogs;
  }

  deleteBlogs(data){
    this.blogs.splice(this.blogs.findIndex(a => a.blogTitle === data.blogTitle && a.blogDescription === data.blogDescription), 1)
  }

  AddNewBlog(data){
    if(!this.checkBlogExist(data)){
      this.blogs.push(data); 
      alert("New Blog Added:- " + data.blogTitle + " " + data.blogDescription);
    }
  }

  checkBlogExist(data){
    for (var i = 0; i < this.blogs.length; i++) {
      if (this.blogs[i].blogDescription === data.blogDescription && this.blogs[i].blogTitle === data.blogTitle) {
        alert("Dublicate Data:- " + data.blogTitle + " " + data.blogDescription);
        return true;
      }
    }
    return false;
  }

  editBlog(data, editedInfo){
    for (var i = 0; i < this.blogs.length; i++) {
      if (this.blogs[i].blogDescription === data.blogDescription && this.blogs[i].blogTitle === data.blogTitle) {
        this.blogs[i].blogDescription = editedInfo;
      }
    }
  }
}
