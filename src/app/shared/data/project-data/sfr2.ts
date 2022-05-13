import { IProjectInfo } from '../../types';

export const Sfr2Data: IProjectInfo = {
  title: 'Share Family Recipes V2',
  subtitle: 'An updated version of my Share Family Recipes site.',
  features: [
    {
      title: 'Architecture',
      info: 'Focused on structuring the files in a way to allow for scalability.',
    },
    {
      title: 'Automation',
      info: 'Used tools to generate TypeScript interfaces and GQL services to cut down on manual coding.',
    },
    {
      title: 'Images',
      info: 'Added the ability to upload multiple images. Unit and E2E tests also check the functionality of the image components.',
    },
  ],
  actions: [
    {
      href: 'https://share-family-recipes.netlify.app',
      text: 'Site',
      ariaLabel: 'Share Family Recipes V2 Site',
    },
    {
      href: 'https://github.com/davidmarknelson/sfr-v2',
      text: 'Code',
      ariaLabel: 'Share Family Recipes V2 Code',
    },
  ],
};
