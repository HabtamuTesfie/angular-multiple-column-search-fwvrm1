import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { AdvanceSearchPipe } from './advance-search.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, AdvanceSearchPipe ],
  bootstrap:    [ AppComponent ],
  providers: [PostService]
})
export class AppModule { }
