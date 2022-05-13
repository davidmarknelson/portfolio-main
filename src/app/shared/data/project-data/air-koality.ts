import { IProjectInfo } from '../../types';

export const AirKoalatyData: IProjectInfo = {
  title: 'Air KOALAty Report',
  subtitle:
    'A place to find the air quality and weather of cities made with Angular 7, Express, MongoDB, and Auth0.',
  features: [
    {
      title: 'Authorization',
      info: 'Auth0 is used for authorization to let users save their favorite cities to their list.',
    },
    {
      title: 'Angular Material',
      info: 'The card, button, theme, and navbar components are Angular Material.',
    },
    {
      title: 'Api',
      info: 'The api is from Air Visual and it provides the weather and air quality index for different cities.',
    },
    {
      title: 'Back End',
      info: "The back end uses Express, Mongoose, and MongoDB to send requests to the API and to update the user's list.",
    },
  ],
  actions: [
    {
      href: 'https://airkoalatyreport.herokuapp.com/',
      text: 'Site',
      ariaLabel: 'Air KOALAty Report Site',
    },
    {
      href: 'https://github.com/davidmarknelson/air-koalaty-report',
      text: 'Code',
      ariaLabel: 'Air KOALAty Report Code',
    },
  ],
};
