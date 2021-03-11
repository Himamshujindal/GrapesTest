import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddblogComponent } from './addblog/addblog.component';
import { BlogsdetailsComponent } from './blogsdetails/blogsdetails.component';
import { BlogserviceService } from './blogservice.service';
import { FormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RouterModule} from '@angular/router';
import { EditblogComponent } from './editblog/editblog.component';
import { EditblogService } from './editblog.service';

@NgModule({
   declarations: [
      AppComponent,
      AddblogComponent,
      BlogsdetailsComponent,
      LoginpageComponent,
      EditblogComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
         { 
            path: '', 
            redirectTo: '/login', 
            pathMatch: 'full' 
         },
         {
            path: 'login',
            component: LoginpageComponent
         },
         {
            path: 'addblog',
            component: AddblogComponent
         },
         {
            path: 'blogDetails',
            component: BlogsdetailsComponent
         },
         {
            path: 'editblog',
            component: EditblogComponent
         },
      ])
   ],
   providers: [BlogserviceService, EditblogService],
   bootstrap: [AppComponent]
})

export class AppModule { }