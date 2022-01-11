import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { ViewComponent } from './view/view.component';

export function NumericUrlMatcher(url: UrlSegment[]) {
  return isNaN(+url[0].path) ? null : ({ consumed: url });
}

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'talk',
    data: { header: true },
    children: [
      {
        path: '',
        children: [
          {
            path: '', 
            pathMatch: 'full',
            component: ListComponent,
          },
        ],
      },
      {
        component: ViewComponent,
        matcher: NumericUrlMatcher,
      },
      {
        path: ':brd_path',
        children: [
          {
            path: '', 
            pathMatch: 'full',
            component: ListComponent,
          },
        ],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
