import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [	
    "HighlightDirective",
      UnlessDirective
   ]
})
export class AppRoutingModule { }
