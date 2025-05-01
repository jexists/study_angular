import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: '<p>한줄 태그</p>',
  // template: `
  //   <ul>
  //     <li></li>
  //   </ul>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }
}

