import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RoutesRoutingModule } from './routes/routes-routing.module';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsComponent } from './posts-list/posts/posts.component';
import { BlogPostComponent } from './posts-list/blog-post/blog-post.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    PostsListComponent,
    PostsComponent,
    BlogPostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ToastrModule.forRoot(),
    RoutesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
