import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { HttpClientModule }    from '@angular/common/http';
import { CreatedAtPipe } from './pipes/created-at.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedCardComponent,
    CreatedAtPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
