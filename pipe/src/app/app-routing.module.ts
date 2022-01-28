import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPipePipe } from './my-pipe.pipe';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
    "MyPipePipe"
  ]
})
export class AppRoutingModule { }
