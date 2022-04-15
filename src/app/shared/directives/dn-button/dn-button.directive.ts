import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: 'button[dnButton], a[dnButton]',
})
export class DnButtonDirective implements OnChanges {
  @Input() dnButton: 'primary' | 'secondary' | '' = 'primary';
  @Input() shadow?: '' | null = null;
  @HostBinding('class.dn-button') baseClass: boolean = true;
  @HostBinding('class.dn-button--secondary') isSecondary: boolean = false;
  @HostBinding('class.dn-button--shadow') hasShadow: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dnButton']?.currentValue === 'secondary') {
      this.isSecondary = true;
    } else {
      this.isSecondary = false;
    }
    if (changes['shadow']?.currentValue === '') {
      this.hasShadow = true;
    } else {
      this.hasShadow = false;
    }
  }
}
