import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TEAMLISTS } from '../assets/data.js';
import { debounceTime, distinctUntilChanged, map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-angular';
  teamlists = TEAMLISTS;
  team: string;
  searchField: FormControl;
  filterOption;

  constructor(

  ) {

  }

  ngOnInit() {
    console.log(this.teamlists);
    this.onSearchInit();
  }

  onSearchInit(): void {

    if (this.searchField) {
      this.searchField.setValue('');
      return;
    }
    this.searchField = new FormControl();
    this.searchField.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((e: KeyboardEvent) => this.searchField.value),
      filter(term => {
        console.log(term);  
        if (term === undefined) { return false; }
        this.teamlists.filter((teamgroup) => {
          teamgroup.teams.forEach((team) => {
            if (
              team.en.toLowerCase().indexOf(term.toLowerCase()) >= 0 ||
              team.ko.toLowerCase().indexOf(term.toLowerCase()) >= 0
            ) {
              console.log(team);
              this.filterOption = team;
              return team;
            }
          });
        });
        return true;
      }),
      // switchMap(term => this.dbService.search(this.page))
    ).subscribe(
      res => {
      },
      error => {
      }
    );
    // this.searchField.valueChanges.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   map((e: KeyboardEvent) => this.searchField.value),
    //   filter(term => {
    //     if (term === undefined) {
    //       return false;
    //     }

    //     if (/[\d -]+/g.test(term)) {
    //       term = term.replace(/-/gi, '');
    //     }

    //     return true;
    //   }),
    //   // switchMap(term => this.dbService.search(this.page))
    // ).subscribe(
    //   res => {
    //   },
    //   error => {
    //   }
    // );
  }

  test(input) {
    

    this.teamlists.filter((teamgroup) => {
      teamgroup.teams.forEach((team, i) => {
        if (
          team.en.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
          team.ko.toLowerCase().indexOf(input.toLowerCase()) >= 0
        ) {
          console.log(team);
          return team;
        }
      });
    });
  }
}

