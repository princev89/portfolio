import { Github } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';

import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';

import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';

import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';

import LogoGit from '/public/images/logos/icon-git.svg';


import EdulystLogo from '/public/images/logos/logo-edulyst.svg';
import ProjectChemistryLab from '/public/images/project-chemisty-simulation.png';
import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shahsagarm',
  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',
  TWITTER: 'https://twitter.com/shahsagarm',
  COMPANY_URL: 'https://edulystventures.com/',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  // {
  //   label: 'Testimonials',
  //   href: '#testimonials',
  // },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/princev89',
  },
  // {
  //   icon: Twitter,
  //   url: 'https://twitter.com/shahsagarm',
  // },
  // {
  //   icon: Figma,
  //   url: 'https://www.figma.com/@shahsagarm',
  // },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  // {
  //   label: 'Typescript',
  //   logo: LogoTypescript,
  //   url: 'https://www.typescriptlang.org/',
  // },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  // {
  //   label: 'Nest.js',
  //   logo: LogoNest,
  //   url: 'https://nestjs.com/',
  // },
  // {
  //   label: 'Socket.io',
  //   logo: LogoSocket,
  //   darkModeLogo: LogoSocketLight,
  //   url: 'https://socket.io/',
  // },
  // {
  //   label: 'PostgreSQL',
  //   logo: LogoPostgreSQL,
  //   url: 'https://www.postgresql.org/',
  // },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  // {
  //   label: 'Sass/Scss',
  //   logo: LogoSass,
  //   url: 'https://sass-lang.com/',
  // },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  // {
  //   label: 'Cypress',
  //   logo: LogoCypress,
  //   darkModeLogo: LogoCypressLight,
  //   url: 'https://www.cypress.io/',
  // },
  // {
  //   label: 'Storybook',
  //   logo: LogoStorybook,
  //   url: 'https://storybook.js.org/',
  // },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];
export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: EdulystLogo,
    logoAlt: 'Edulyst Ventures logo',
    position: 'Flutter App Developer',
    startDate: new Date(2022, 3),
    currentlyWorkHere: true,
    summary: [
      'Developed an E-learning app using Flutter, resulting in a 30% boost in user engagement.',
      'Implemented complex state management, integrated APIs, and optimized app performance.',
      'Established push notifications via Firebase, enhancing user engagement.',
      'Designed an intuitive UI using Figma Prototypes, improving navigation and user experience.',
      'Collaborated with the team to reduce feature development time by 30%.',
    ],
  },
  {
    logo: EdulystLogo,
    logoAlt: 'Edulyst Ventures logo',
    position: 'Flutter App Intern',
    startDate: new Date(2021, 9),
    endDate: new Date(2021, 11),
    summary: [
      'Contributed to the development of an E-learning app in Flutter, prototyped using Figma.',
      'Implemented complex state management using Provider and BLOC architecture for various app features.',
      'Gained experience in utilizing Firebase for push notifications, enhancing user engagement.',
      'Utilized Git for version control to ensure efficient collaboration and timely feature delivery.',
      'Contributed to optimizing the app\'s performance by identifying and addressing bottlenecks.',
      'Improved app stability and user experience by resolving bugs and implementing new features.',
    ],
  },
];
export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Chemistry Virtual Lab',
    description:
      'An interactive virtual chemistry lab simulation website developed using HTML, CSS, and JavaScript. The project was selected as the winning entry in the IIT Kanpur Hackathon.',
    url: 'http://ebootathon.com/labs/beta/chemistry/EngineeringChemistryLab/exp2/index.html',
    previewImage: ProjectChemistryLab,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
  },
  // Add more projects as needed
];


// export const TESTIMONIALS: TestimonialDetails[] = [
//   {
//     personName: 'Krisztian Gyuris',
//     personAvatar: AvatarKrisztian,
//     title: 'Founder - inboxgenie.io',
//     testimonial:
//       'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
//   },
//   {
//     personName: 'Eugen Esanu',
//     personAvatar: AvatarEugen,
//     title: 'Founder - shosho.design',
//     testimonial:
//       'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
//   },
//   {
//     personName: 'Joe Matkin',
//     personAvatar: AvatarDummy,
//     title: 'Freelancer',
//     testimonial:
//       'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
//   },
// ];
