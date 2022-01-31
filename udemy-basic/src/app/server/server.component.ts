import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
 serverID = 10;
 serverStatus = 'offline';
  constructor() { }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
