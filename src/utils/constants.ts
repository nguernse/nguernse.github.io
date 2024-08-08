import { Bio } from "../@types";

export const BIO: Bio = {
  name: 'Nick Guernsey',
  about: "Software engineer with experience developing, maintaining, and supporting SaaS applications.",
  profile: "/assets/profile.jpeg",
  jobStatus: 'available',
  jobTitle: 'Software Engineer',
  yearsExperience: 3,
  jobLocations: [
    'Tennessee',
    'North Carolina',
    'Colorado',
    'Washington',
    'California',
    'Utah',
    'Oklahoma',
  ],
  socials: {
    linkedin: {
      label: "Let's connect",
      url: "https://linkedin.com/in/nguernse",
      image: "/assets/linkedin.png"
    },
    github: {
      label: "GitHub",
      url: "https://github.com/nguernse",
      image: "/assets/github.svg"
    },
  },
  skills: [
    "TypeScript",
    "JavaScript",
    "CSS",
    "Git",
    "SCSS",
    "TailwindCSS",
    "React",
    "Vue",
    "HTML",
    "SQL",
    "Vitest"
  ],
  projects: [
    {
      logo: "/assets/pnp_logo.svg",
      slug: 'project-national-parks',
      url: "https://projectnationalparks.com",
      title: 'Project National Parks',
      blurb: 'Explore the natural beauty of the National Parks',
      details: [
        'This project was built to showcase the incredible park system available to everyone. This website serves as a resource for people to learn, discover, and plan their visits to the National Parks.',
        'With this project I wanted to practice a few concepts, namely test-driven development and continuously deployment. All unit tests were written with Vitest and React Testing Library. End-to-end tests were done using Cypress. This project was continuously deployed with Vercel and GitHub.'
      ],
      technologies: [
        "React", "NextJS", "Leaflet", "TailwindCSS", "Vitest", "Cypress", "React Testing Library", "GitHub", "Vercel", "CSS", "HTML", "JavaScript"
      ],
      images: [
        {
          alt: "Project National Parks landing page",
          mobile: {
            webp: "/assets/pnp_landing_420w.webp",
            jpeg: "/assets/pnp_landing_420w.jpg",
          },
          tablet: {
            webp: "/assets/pnp_landing_768w.webp",
            jpeg: "/assets/pnp_landing_768w.jpg",
          }
        },
        {
          alt: "Project National Parks map to explore all parks",
          mobile: {
            webp: "/assets/pnp_explore_420w.webp",
            jpeg: "/assets/pnp_explore_420w.jpg",
          },
          tablet: {
            webp: "/assets/pnp_explore_768w.webp",
            jpeg: "/assets/pnp_explore_768w.jpg",
          }
        },
        {
          alt: "Project National Parks explore map popup card of park",
          mobile: {
            webp: "/assets/pnp_popout_420w.webp",
            jpeg: "/assets/pnp_popout_420w.jpg",
          },
          tablet: {
            webp: "/assets/pnp_popout_768w.webp",
            jpeg: "/assets/pnp_popout_768w.jpg",
          }
        },
        {
          alt: "Project National Parks page of a national park",
          mobile: {
            webp: "/assets/pnp_park_420w.webp",
            jpeg: "/assets/pnp_park_420w.jpg",
          },
          tablet: {
            webp: "/assets/pnp_park_768w.webp",
            jpeg: "/assets/pnp_park_768w.jpg",
          }
        },
      ]
    },
    {
      logo: "/assets/ps_logo.svg",
      slug: 'power-searches',
      url: "https://powersearches.org",
      title: 'Power Search',
      blurb: 'Find the information you want with curated search shortcuts',
      details: [
        "This project was an exercise in studying the UI for Kagi's search engine. I liked the idea that you can specify where you want to search for content on the Internet.",
        'For this project, I wanted to create a local-first approach to let users save search shortcuts for their needs. If you discover a website, repository, or API that searches a subset of content you can save the URL and pass in parameters to search for targeted content.',
      ],
      technologies: [
        "TypeScript", "React", "NextJS", "Vercel", "TailwindCSS", "RadixUI", "CSS", "HTML", "JavaScript"
      ],
      images: [
        {
          alt: "Power Search landing page",
          mobile: {
            webp: "/assets/ps_landing_420w.webp",
            jpeg: "/assets/ps_landing_420w.jpg",
          },
          tablet: {
            webp: "/assets/ps_landing_768w.webp",
            jpeg: "/assets/ps_landing_768w.jpg",
          }
        },
        {
          alt: "Power Search search dropdown menu",
          mobile: {
            webp: "/assets/ps_search_menu_420w.webp",
            jpeg: "/assets/ps_search_menu_420w.jpg",
          },
          tablet: {
            webp: "/assets/ps_search_menu_768w.webp",
            jpeg: "/assets/ps_search_menu_768w.jpg",
          }
        },
        {
          alt: "Power Search settings page",
          mobile: {
            webp: "/assets/ps_settings_420w.webp",
            jpeg: "/assets/ps_settings_420w.jpg",
          },
          tablet: {
            webp: "/assets/ps_settings_768w.webp",
            jpeg: "/assets/ps_settings_768w.jpg",
          }
        },
      ]
    },
    {
      logo: "/assets/ddu_logo.svg",
      slug: 'down-down-up',
      url: "https://nguernse.github.io/downdownup/",
      title: 'Down Down Up',
      blurb: 'A game to test your keyboard skills',
      details: [
        'I had been developing in Vue 2 for a couple years and recently Vue 3 was released. What better way to learn the new composition API than developing a small web game!',
        "Down Down Up is a game to test how quickly a user can type out the correct combination of keyboard arrows. I also added a secret game mode to test the user's ability to consecutively hit combos. Every incorrect entry reduces your existing time, adding an element of urgency for accuracy."
      ],
      technologies: [
        "TypeScript", "Vue", "CSS", "HTML", "JavaScript"
      ],
      images: [
        {
          alt: "Down Down Up landing page",
          mobile: {
            webp: "/assets/ddu_landing_420w.webp",
            jpeg: "/assets/ddu_landing_420w.jpg",
          },
          tablet: {
            webp: "/assets/ddu_landing_768w.webp",
            jpeg: "/assets/ddu_landing_768w.jpg",
          }
        },
        {
          alt: "Down Down Up default keys",
          mobile: {
            webp: "/assets/ddu_keys_420w.webp",
            jpeg: "/assets/ddu_keys_420w.jpg",
          },
          tablet: {
            webp: "/assets/ddu_keys_768w.webp",
            jpeg: "/assets/ddu_keys_768w.jpg",
          }
        },
        {
          alt: "Down Down Up keys in active mode",
          mobile: {
            webp: "/assets/ddu_keys_active_420w.webp",
            jpeg: "/assets/ddu_keys_active_420w.jpg",
          },
          tablet: {
            webp: "/assets/ddu_keys_active_768w.webp",
            jpeg: "/assets/ddu_keys_active_768w.jpg",
          }
        },
        {
          alt: "Down Down Up Scorecard",
          mobile: {
            webp: "/assets/ddu_scorecard_420w.webp",
            jpeg: "/assets/ddu_scorecard_420w.jpg",
          },
          tablet: {
            webp: "/assets/ddu_scorecard_768w.webp",
            jpeg: "/assets/ddu_scorecard_768w.jpg",
          }
        },
        {
          alt: "Down Down Up in secret mode",
          mobile: {
            webp: "/assets/ddu_secret_mode_420w.webp",
            jpeg: "/assets/ddu_secret_mode_420w.jpg",
          },
          tablet: {
            webp: "/assets/ddu_secret_mode_768w.webp",
            jpeg: "/assets/ddu_secret_mode_768w.jpg",
          }
        },
      ]
    },
  ],
}