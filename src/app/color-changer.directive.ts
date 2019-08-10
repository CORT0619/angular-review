import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[colorChanger]'
})
export class ColorChangerDirective implements OnChanges {

  @Input() textColor: string;

  constructor(
    private elementRef: ElementRef
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.elementRef.nativeElement.style.color = this.textColor;
  }

}
