import { IProjectInfo } from '../../types';

export const Portfolio1Data: IProjectInfo = {
  title: 'Portfolio Website Version 1',
  subtitle:
    'This portfolio was made with Bulma to show off projects while practicing testing with Jasmine, and Cypress.',
  features: [
    {
      title: 'Testing',
      info: 'This site has passing unit and E2E tests using Jasmine and Cypress.',
    },
    {
      title: 'Back End',
      info: 'Nodemailer, Express, and Sendgrid are used for the back end to send the message from the contact form.',
    },
    {
      title: 'Color',
      info: 'The colors throughout the page pass WCAG contrast tests.',
    },
  ],
  actions: [
    {
      href: 'https://davidnelsoncodes.herokuapp.com/',
      text: 'Site',
      ariaLabel: 'Portfolio Version 1 Site',
    },
    {
      href: 'https://github.com/davidmarknelson/david-portfolio',
      text: 'Code',
      ariaLabel: 'Portfolio Version 1 Code',
    },
  ],
};
