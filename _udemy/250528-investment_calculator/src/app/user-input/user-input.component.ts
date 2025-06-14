import { Component, EventEmitter, OnInit, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmetntInput } from '../core/model/investment-input.model';
import { InvestmentService } from '../core/service/investment.service';

@Component({
  selector: 'app-user-input',
  // standalone: true,
  // imports: [
  //   FormsModule
  // ],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {


  // @Output() calculate = new EventEmitter<InvestmetntInput>();
  // calculate = output<InvestmetntInput>();

  // enteredInitialInvestment = '10000';
  // enteredAnnualInvestment = '100';
  // enteredExpectedReturn = '5';
  // enteredDuration = '10';

  enteredInitialInvestment = signal('10000');
  enteredAnnualInvestment = signal('100');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(
    private investmentService: InvestmentService
  ) { }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    })

    // console.log(this.enteredInitialInvestment)
    // console.log(this.enteredAnnualInvestment)
    // console.log(this.enteredExpectedReturn)
    // console.log(this.enteredDuration)
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment,
    //   duration: +this.enteredDuration,
    //   expectedReturn: +this.enteredExpectedReturn,
    //   annualInvestment: +this.enteredAnnualInvestment,
    // })

    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment(),
    //   duration: +this.enteredDuration(),
    //   expectedReturn: +this.enteredExpectedReturn(),
    //   annualInvestment: +this.enteredAnnualInvestment(),
    // })

    this.enteredInitialInvestment.set('0')
    this.enteredAnnualInvestment.set('0')
    this.enteredExpectedReturn.set('5')
    this.enteredDuration.set('10')
  }
}
