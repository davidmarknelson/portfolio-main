import { InjectionToken } from '@angular/core';
import { IProjectImage } from '../../types';

export const IMAGE_MODAL_DATA = new InjectionToken<IProjectImage[]>(
  'IMAGE_MODAL_DATA'
);
