import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
    color:white
  }`]
  }
)
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreation = 'no server was creates';
  serverName = '';
  serverCreated = false;
  serverStatus = '';

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
