import { animate, style, transition, trigger } from '@angular/animations';
import { OverlayRef } from '@angular/cdk/overlay';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { IMAGE_MODAL_DATA } from '../../services/modal/modal-token';
import { ImageModalConfig } from '../../services/modal/modal.service';

@Component({
  selector: 'dn-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      transition(':increment, :decrement', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ImageModalComponent implements AfterViewInit {
  faClose = faClose;
  index: number = 0;
  @ViewChild('img') img!: ElementRef;
  @ViewChild('magnifier') magnifier!: ElementRef;
  private readonly zoom: number = 2;

  constructor(
    @Inject(IMAGE_MODAL_DATA) public readonly data: ImageModalConfig,
    private readonly overlayRef: OverlayRef,
    private readonly renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.renderer.listen(this.img.nativeElement, 'mouseover', () => {
      this.renderer.setStyle(this.magnifier.nativeElement, 'display', 'block');
    });
    this.renderer.listen(this.img.nativeElement, 'mouseout', () => {
      this.renderer.setStyle(this.magnifier.nativeElement, 'display', 'none');
    });
    this.renderer.listen(
      this.img.nativeElement,
      'mousemove',
      ($event: MouseEvent) => {
        $event.preventDefault();

        let pos = this.getCursorPos($event);
        const x = pos.x;
        const y = pos.y;
        let w = this.magnifier.nativeElement.offsetWidth;
        let h = this.magnifier.nativeElement.offsetHeight;

        // ======
        // Image
        // ======
        const imageHeight = this.img.nativeElement.height;
        const imageWidth = this.img.nativeElement.width;
        this.renderer.setStyle(
          this.magnifier.nativeElement,
          'background-size',
          `${imageWidth * this.zoom}px ${imageHeight * this.zoom}px`
        );
        // ======
        // Magnifier
        // ======
        // Left
        let left = x - w;
        this.renderer.setStyle(
          this.magnifier.nativeElement,
          'left',
          `${left < 0 ? 0 : left}px`
        );
        // Top
        let top = y - h;
        this.renderer.setStyle(
          this.magnifier.nativeElement,
          'top',
          `${top < 0 ? 0 : top}px`
        );
        // Background Position X
        let backgroundX = x * this.zoom - w / 2;
        if (backgroundX < 0) {
          backgroundX = 0;
        } else if (backgroundX > imageWidth * this.zoom - w) {
          backgroundX = imageWidth * this.zoom - w;
        }
        // Background Position Y
        let backgroundY = y * this.zoom - h / 2;
        if (backgroundY < 0) {
          backgroundY = 0;
        } else if (backgroundY > imageHeight * this.zoom - h) {
          backgroundY = imageHeight * this.zoom - h;
        }
        this.renderer.setStyle(
          this.magnifier.nativeElement,
          'background-position',
          `-${backgroundX}px -${backgroundY}px`
        );
      }
    );
  }

  close(): void {
    this.overlayRef.dispose();
  }

  navigate(direction: 'left' | 'right'): void {
    if (direction === 'left' && this.index === 0) {
      this.index = this.data.length - 1;
    } else if (direction === 'right' && this.index === this.data.length - 1) {
      this.index = 0;
    } else if (direction === 'left') {
      this.index -= 1;
    } else {
      this.index += 1;
    }
  }

  private getCursorPos(event: MouseEvent): { x: number; y: number } {
    let rect = this.img.nativeElement.getBoundingClientRect();
    return {
      x: event.pageX - rect.left - window.scrollX,
      y: event.pageY - rect.top - window.scrollY,
    };
  }
}
