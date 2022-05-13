import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
  faExpand,
} from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../../services/modal/modal.service';
import { IProjectImage } from '../../types';

@Component({
  selector: 'dn-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  @Input() images!: IProjectImage[];
  @Input() title!: string;
  @ViewChildren('img') private readonly imageElements!: QueryList<ElementRef>;
  currentIndex: number = 0;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faExpand = faExpand;

  constructor(private readonly modal: ModalService) {}

  open() {
    this.modal.open(this.images);
  }

  scroll(direction: 'left' | 'right'): void {
    let scrollIndex: number;

    if (direction === 'left' && this.currentIndex === 0) {
      scrollIndex = this.images.length - 1;
    } else if (
      direction === 'right' &&
      this.currentIndex === this.images.length - 1
    ) {
      scrollIndex = 0;
    } else if (direction === 'left') {
      scrollIndex = this.currentIndex - 1;
    } else {
      scrollIndex = this.currentIndex + 1;
    }

    this.scrollToIndex(scrollIndex);
  }

  scrollToIndex(index: number): void {
    this.currentIndex = index;

    this.imageElements.get(this.currentIndex)?.nativeElement.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
      inline: 'start',
    });
  }
}
