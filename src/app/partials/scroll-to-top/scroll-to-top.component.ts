import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dn-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollToTopComponent {
  @ViewChild('scrollToTopBtn') scrollToTopBtn!: ElementRef;
  @HostListener('window:scroll', ['$event']) windowScroll(event: Event) {
    const window = event.composedPath()[1] as Window;
    this.toggleScrollToTopBtn(window);
  }
  faChevronUp = faChevronUp;

  constructor(private readonly renderer: Renderer2) {}

  toggleScrollToTopBtn(window: Window): void {
    if (window.scrollY > 300) {
      this.renderer.setStyle(
        this.scrollToTopBtn.nativeElement,
        'display',
        'block'
      );
    } else {
      this.renderer.setStyle(
        this.scrollToTopBtn.nativeElement,
        'display',
        'none'
      );
    }
  }
}
