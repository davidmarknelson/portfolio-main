import { IProjectImage } from '../../types';

export const ProjectImageSfr2: IProjectImage[] = [
  {
    src: '/assets/images/projects/sfrv2/sfrv2-p1.png',
    alt: 'Share family recipes v2 folder structure',
    caption:
      'The architecture is designed for reusability, separation of concerns and small bundles',
  },
  {
    src: '/assets/images/projects/sfrv2/sfrv2-p2.png',
    alt: 'Share family recipes v2 code duplication',
    caption:
      'To decrease the amount of magic strings, constants shared between the BE and FE are automatically generated',
  },
  {
    src: '/assets/images/projects/sfrv2/sfrv2-p3.png',
    alt: 'Share family recipes v2 interfaces and service generation',
    caption: 'GQL services and interfaces are automatically generated',
  },
  {
    src: '/assets/images/projects/sfrv2/sfrv2-p4.png',
    alt: 'Share family recipes v2 upload multiple images',
    caption: 'Image uploads have an improved interface compared to v1',
  },
];
