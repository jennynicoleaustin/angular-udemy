import {Directive, ElementRef, OnInit} from "@angular/core";

// add to the element like any other html attribute when the selector is inside []
@Directive({
  selector: '[appHighlight]'
})

export class BasicHighlightDirective implements OnInit{
//   inject the element the directive sits on into this element
  constructor(private elementRef: ElementRef) {

  }
  // accessing elements like this is not best practice!

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green'
  }
} // class BasicHighlightDirective
