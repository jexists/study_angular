import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-model',
  templateUrl: './demo-form-model.component.html',
  styleUrls: ['./demo-form-model.component.scss']
})
export class DemoFormModelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any):void {
    console.log('submit value', form);
    
  }
}
