import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { EditblogService } from '../editblog.service';
import { IBlog } from '../IBlogs';

@Component({
  selector: 'app-blogsdetails',
  templateUrl: './blogsdetails.component.html',
  styleUrls: ['./blogsdetails.component.css']
})
export class BlogsdetailsComponent implements OnInit {

  constructor(private blogService: BlogserviceService,  private editBlogService: EditblogService) {}

  blogs: IBlog[];
  
  ngOnInit(): void {   
    this.blogs = this.blogService.GetBlogsList();
  }

  DeleteBlog(data : IBlog) {
    this.blogService.deleteBlogs(data);
  }

  EditBlog(blog : IBlog) {
    this.editBlogService.saveEditBlogDesc(blog);
  }


}
