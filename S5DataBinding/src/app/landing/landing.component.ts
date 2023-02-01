import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  // EventEmitter, allows you to create your own events, must give it a type between the <> and () at the end to call its constructor.
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  newServerContent = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
  this.serverCreated.emit({
    serverName: nameInput.value,
    serverContent:this.newServerContent
  });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
   this.bluePrintCreated.emit({
     serverName: nameInput.value,
     serverContent: this.newServerContent
   });
  }
} // Landing Component
