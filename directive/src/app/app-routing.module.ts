import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightDirective } from './highlight.directive';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
    "HighlightDirective"
  ]
})
export class AppRoutingModule { }
