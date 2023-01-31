import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  }
)
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreation = 'no server was creates';
  serverName = ''

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreation = 'server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  //   explicit casting with ( ) to tell TS what type to expect
  }
}
