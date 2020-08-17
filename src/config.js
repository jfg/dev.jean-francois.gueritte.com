module.exports = {
  siteTitle: 'Jean-François GUÉRITTE | System & DevOps Engineer',
  siteDescription:
    'Jean-François GUÉRITTE  is a System & DevOps Engineer based in Toulouse, France.',
  siteKeywords:
    'Jean-François GUÉRITTE , Jean-François, Gueritte, Guéritte, jfgueritte, DevOps Engineer, System Engineer',
  siteUrl: 'https://gueritte.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-36453091-1',
  googleVerification: 'WXmym-09JD04R4L3ymvdPJcI3GCwJR3t-i99hrhCxIQ',
  name: 'Jean-François GUÉRITTE ',
  location: 'Toulouse, FR',
  email: 'contact@gueritte.com',
  github: 'https://github.com/jf-gueritte',
  twitterHandle: '@jf_gueritte',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jf-gueritte',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jean-francois-gueritte/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/jf-gueritte',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jf_gueritte/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jf_gueritte',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
