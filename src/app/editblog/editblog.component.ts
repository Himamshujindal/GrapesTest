import { Component, Input, OnInit } from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { EditblogService } from '../editblog.service';
import { IBlog } from '../IBlogs';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {

  blog:IBlog;
  editedInfo;
  constructor(private editBlogService: EditblogService, private blogService: BlogserviceService, private router: Router) { }

  ngOnInit(): void {
    this.blog = this.editBlogService.getEditBlog();
    this.editedInfo = this.blog.blogDescription;
  }

  onsubmit(){
    this.blogService.editBlog(this.blog, this.editedInfo);
    this.router.navigate(['../blogDetails']);
  }

}
