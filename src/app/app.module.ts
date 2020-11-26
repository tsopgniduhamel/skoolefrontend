import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { SecurityContext } from '@angular/core';

import { AppComponent } from './app.component';

import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LevelComponent } from './level/level.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LevelComponent,
    CourseComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    HttpClientModule,
    // MarkdownModule.forRoot(),
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),
    // using specific options with ValueProvider and passing HttpClient
    MarkdownModule.forRoot({
      loader: HttpClient, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
    MarkdownModule.forChild(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
