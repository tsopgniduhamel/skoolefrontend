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

@NgModule({
  declarations: [AppComponent],
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
