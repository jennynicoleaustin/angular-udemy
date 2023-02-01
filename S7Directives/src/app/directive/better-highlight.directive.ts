import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // You will need an element ref as well as the renderer
  constructor(private elementRef: ElementRef, private renderer:Renderer2) { }

  // you need to access the nativeElement not just the outer element

  // Renderer.setStyle takes in the element ref and the style and value for the style
  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
  }

  // Reactive Directive - reacting to events
  @HostListener('mouseenter') mouseOver(eventData:Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
  }
  @HostListener('mouseleave') mouseLeave(eventData:Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

}
