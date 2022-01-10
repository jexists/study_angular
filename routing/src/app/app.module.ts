import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [			
    AppComponent,
      ListComponent,
      ViewComponent,
      MainComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
