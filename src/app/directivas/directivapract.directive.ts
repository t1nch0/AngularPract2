import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectivapract]'
})
export class DirectivapractDirective {

  constructor(private element: ElementRef) { }
  @HostListener('mouseenter')
  publiconMouseEnter() {
    this.element.nativeElement.style.backgroundColor = "red";
  }
  @HostListener('mouseleave')
  publiconMouseleave() {
    this.element.nativeElement.style.backgroundColor = "green";
  }

}
