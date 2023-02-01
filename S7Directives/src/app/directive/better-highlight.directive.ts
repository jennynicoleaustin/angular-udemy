import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // on the element where this directive is used, access the style.background property
  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';

  // You will need an element ref as well as the renderer
  constructor(private elementRef: ElementRef, private renderer:Renderer2) { }

  // you need to access the nativeElement not just the outer element

  // Renderer.setStyle takes in the element ref and the style and value for the style
  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
  }

  // Reactive Directive - reacting to events
  @HostListener('mouseenter') mouseOver(eventData:Event) {
    // Without use of HostBinding
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
  //   HostBinding example
    this.backgroundColor = 'orange'
  }
  @HostListener('mouseleave') mouseLeave(eventData:Event) {
    // Without use of HostBinding
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  //   HostBinding example
    this.backgroundColor = 'transparent';
  }



}
