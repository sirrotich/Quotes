import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {}
 @HostListener('mouseenter') mouseEnter() {
  this.highlight('green');
}

@HostListener('mouseleave') mouseLeave() {
  this.highlight(null);
}

private highlight(color: string) {
  this.elem.nativeElement.style.backgroundColor = color;
}

}
