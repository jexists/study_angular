import { InvestmentService } from './../core/service/investment.service';
import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css']
})
export class InvestmentResultsComponent {
  // results = input<type>() // 시그널
  // @Input() result: type; // core

  // @Input() results?; // 선택적인 속성
  // @Input() results!;

  // @Input() results?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[];
  // results = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]>();

  private investmentService = inject(InvestmentService)

  // get results() {
  //   return this.investmentService.resultsData;
  // }

  results = computed(() => this.investmentService.resultsData())
  // results = this.investmentService.resultsData.asReadonly()
}

