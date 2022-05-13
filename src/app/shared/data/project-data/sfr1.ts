import { IProjectInfo } from '../../types';

export const Sfr1Data: IProjectInfo = {
  title: 'Share Family Recipes',
  subtitle: 'A site to upload, save, and like recipes and recipe pictures.',
  features: [
    {
      title: 'Api',
      info: 'Built from the ground up using PostgreSQL, Nodemailer, and Cloudinary to provide basic CRUD functionality. It also contains email verification and password reset capabilities.',
    },
    {
      title: 'Design',
      info: 'Before creating the front end, a mockup of each page was created in Figma. A single picture was used as inspiration for the color scheme.',
    },
    {
      title: 'Tests',
      info: 'There are 131 passing tests for the back end using Mocha and Chai. There are also 412 front end unit tests with Jasmine and 103 end-to-end tests in Cypress.',
    },
    {
      title: 'Documentation',
      info: 'To improve future maintainability, documentation is live on Github Pages and there are useful comments throughout the code.',
    },
  ],
  actions: [
    {
      href: 'https://gifted-borg-c6bee0.netlify.app/',
      text: 'Site',
      ariaLabel: 'Share Family Recipes Site',
    },
    {
      href: 'https://github.com/davidmarknelson/share-family-recipes',
      text: 'Code',
      ariaLabel: 'Share Family Recipes Code',
    },
    {
      href: 'https://davidmarknelson.github.io/share-family-recipes-api-docs/#share-family-recipes-api',
      text: 'Docs',
      ariaLabel: 'Share Family Recipes Docs',
    },
  ],
};
