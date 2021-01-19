import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoswipeComponent } from './photoswipe/photoswipe.component';

@NgModule({
  declarations: [	
    AppComponent,
    PhotoswipeComponent
   ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
