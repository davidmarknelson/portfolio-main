import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

type TButton = 'primary' | 'secondary' | 'icon' | '';

@Directive({
  selector: 'button[dnButton], a[dnButton]',
})
export class DnButtonDirective implements OnChanges {
  @Input() dnButton: TButton = 'primary';
  @Input() icon: boolean = false;
  @HostBinding('class.dn-button') baseClass: boolean = true;
  @HostBinding('class.dn-button--secondary') isSecondary: boolean = false;
  @HostBinding('class.dn-button--icon') isIcon: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    switch (changes['dnButton']?.currentValue as TButton) {
      case 'secondary':
        this.isSecondary = true;
        break;
      default:
        this.isSecondary = false;
    }

    if (changes['icon']?.currentValue as boolean) {
      this.isIcon = changes['icon']?.currentValue as boolean;
    }
  }
}
