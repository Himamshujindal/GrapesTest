import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  IsValid : boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickSubmit(data){
    debugger;
    if(data.blogUsername = "blogger@grapecity.com" && data.blogPassword == "1qaz!QAZ"){      
      this.router.navigate(['../blogDetails']);
      this.IsValid = false;
    }
    else {
      this.IsValid = true;
    }
  }
}
