import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
// Good practice to be sure to implement the hooks class
export class ServerElementComponent implements OnInit, OnChanges {

  @Input() element: { type: string, name: string, content: string };

  constructor() {
    console.log('constructor called')
  }
  // only hook that receives an argument
  ngOnChanges(changes:SimpleChanges) {
    console.log('ng on changes ')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ng on init')
  }

}
