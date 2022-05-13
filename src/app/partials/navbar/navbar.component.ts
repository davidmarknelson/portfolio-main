import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'dn-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @ViewChild('navbar') navbar!: ElementRef;
  @HostListener('window:scroll', ['$event']) windowScroll(event: Event) {
    const window = event.composedPath()[1] as Window;
    this.toggleNavbar(window);
  }
  prevScrollpos!: number;

  constructor(private readonly renderer: Renderer2) {}

  toggleNavbar(window: Window): void {
    if (!this.prevScrollpos && this.prevScrollpos !== 0) {
      this.prevScrollpos = window.scrollY;
    }
    if (window.scrollY < 50) {
      this.renderer.setStyle(this.navbar.nativeElement, 'top', '0');
    } else {
      let currentScrollPos = window.scrollY;
      if (this.prevScrollpos > currentScrollPos) {
        this.renderer.setStyle(this.navbar.nativeElement, 'top', '0');
      } else {
        this.renderer.setStyle(this.navbar.nativeElement, 'top', '-5rem');
      }
      this.prevScrollpos = currentScrollPos;
    }
  }
}
