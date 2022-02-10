import { HttpClient } from '@angular/common/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Login', () => {
  let loginService: LoginService
  let http: HttpClient;
  let httpController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });

    loginService = TestBed.inject(LoginService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  })

  it('service created', () => {
    expect(loginService).toBeDefined();
  });

  it('login api',()=>{
    const testData = true;
    const inputData = {
      username: 'admin',
      password: 'admin',
    }

    loginService.login(inputData).then((data) => expect(data).toEqual(testData));

    const req = httpController.expectOne('login');
    expect(req.request.method).toEqual('POST');

    req.flush(testData);
  })
});
