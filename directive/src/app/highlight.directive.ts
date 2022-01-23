import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string | undefined;

  constructor(
    private el: ElementRef 
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    console.log(this.el.nativeElement) // 실제 DOM
    this.el.nativeElement.style.backgoundColor = color;
  }


}
