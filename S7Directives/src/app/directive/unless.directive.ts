import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // creating the setter for a property automatically creates the property itself.
  @Input() set appUnless(condition:boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      // clear the embedded view from the dom
      this.viewContainerRef.clear()
    }
  }
  constructor(private templateRef:TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }


} // class UnlessDirective
