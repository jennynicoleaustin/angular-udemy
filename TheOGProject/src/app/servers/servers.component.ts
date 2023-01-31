import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    .online {
      color: white
    }`]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreation = 'no server was creates';
  serverName = '';
  serverCreated = false;
  serverStatus = '';
  servers = ['TestServer1', 'TestServer2']

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreation = 'server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
    //   explicit casting with ( ) to tell TS what type to expect
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }

  getServerStatus() {
    return this.serverStatus;
  }
}

