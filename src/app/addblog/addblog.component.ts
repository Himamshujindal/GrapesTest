import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { IBlog } from '../IBlogs';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  constructor(private blogService: BlogserviceService, private router: Router) { }

  blogTitle :string = "";
  blogDetails :string = "";

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    var blogInfo : IBlog = {
      blogTitle : this.blogTitle,
      blogDescription : this.blogDetails
    }
    this.blogService.AddNewBlog(blogInfo);
    this.router.navigate(['../blogDetails']);

 }

}
