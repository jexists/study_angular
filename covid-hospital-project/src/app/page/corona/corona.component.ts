import { ApiService } from './../../core/service/api.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CoronaService } from 'src/app/core/service/corona.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss']
})
export class CoronaComponent implements OnInit {

  constructor(
    private coronaService: CoronaService
  ) { }

  ngOnInit() {

    this.coronaService.getHospList(1, 10).pipe(first()).subscribe((res) => {
      console.log(res);

    }, (err) => {
      console.error(err);

    })
  }


}
