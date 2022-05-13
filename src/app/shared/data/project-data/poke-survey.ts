import { IProjectInfo } from '../../types';

export const PokeSurveyData: IProjectInfo = {
  title: 'Poké-Survey',
  subtitle:
    'A website to vote for your favorite Pokémon made with Express, MongoDB, and Mongoose.',
  features: [
    {
      title: 'Voting',
      info: 'Mongoose stores the votes in the MongoDB database.',
    },
    {
      title: 'Updating Votes',
      info: "The back end creates a string unique to each user's browser to show the user's previous votes and to let them update their votes.",
    },
    {
      title: 'View',
      info: 'The template to render the view is EJS and it loops through the Pokémon data to show the images and voting results.',
    },
    {
      title: 'Styling',
      info: 'Bootstrap is used to style the website and display the results with small bar charts.',
    },
  ],
  actions: [
    {
      href: 'https://poke-survey.herokuapp.com/',
      text: 'Site',
      ariaLabel: 'Poké-Survey Site',
    },
    {
      href: 'https://github.com/davidmarknelson/poke-survey',
      text: 'Code',
      ariaLabel: 'Poké-Survey Code',
    },
  ],
};
