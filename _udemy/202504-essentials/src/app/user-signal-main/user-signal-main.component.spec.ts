/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserSignalMainComponent } from './user-signal-main.component';

describe('UserSignalMainComponent', () => {
  let component: UserSignalMainComponent;
  let fixture: ComponentFixture<UserSignalMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSignalMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
