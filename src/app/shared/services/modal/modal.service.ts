import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { ImageModalComponent } from '../../components/image-modal/image-modal.component';
import { IProjectImage } from '../../types';
import { IMAGE_MODAL_DATA } from './modal-token';

export type ImageModalConfig = IProjectImage[];

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
    private readonly overlay: Overlay,
    private readonly injector: Injector
  ) {}

  open(data: ImageModalConfig): void {
    const overlayRef = this.overlay.create(
      new OverlayConfig({
        hasBackdrop: true,
        backdropClass: 'modal-backdrop',
        scrollStrategy: this.overlay.scrollStrategies.block(),
        positionStrategy: this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
        panelClass: 'dn-modal',
      })
    );

    overlayRef.keydownEvents().subscribe((keydownEvent) => {
      if (keydownEvent.key === 'Escape') {
        overlayRef.dispose();
      }
    });

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: OverlayRef, useValue: overlayRef },
        { provide: IMAGE_MODAL_DATA, useValue: data },
      ],
    });

    overlayRef.attach(new ComponentPortal(ImageModalComponent, null, injector));
  }
}
