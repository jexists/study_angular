import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCaptureModule } from 'ngx-capture';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCaptureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
