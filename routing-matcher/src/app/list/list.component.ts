import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  category_path?: string;

  list = new Array(15);

  constructor(
    private route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        params => {
          this.category_path = params['category_path'];
        });
  }


}
