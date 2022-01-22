import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  category_path?: string;
  talk_no?: number | undefined;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.category_path = params['category_path'];
      // this.talk_no = +this.route.snapshot.paramMap.get('no');
      this.talk_no = Number(this.router.url.split('/').pop());

    });

  }

}
