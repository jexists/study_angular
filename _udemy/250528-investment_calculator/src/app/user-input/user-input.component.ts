import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule

  ],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
  }>();

  enteredInitialInvestment = '0'
  enteredAnnualInvestment = '0'
  enteredExpectedReturn = '5'
  enteredDuration = '10'

  onSubmit() {
    console.log(this.enteredInitialInvestment)
    console.log(this.enteredAnnualInvestment)
    console.log(this.enteredExpectedReturn)
    console.log(this.enteredDuration)
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    })
  }
}
