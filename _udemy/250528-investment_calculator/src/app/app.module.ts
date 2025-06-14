import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // UserInputComponent,
    InvestmentResultsComponent
  ],
  imports: [
    BrowserModule, // root일때 무조건 사용 (*ngIf, *ngFor)
    // FormsModule,
    UserInputModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }