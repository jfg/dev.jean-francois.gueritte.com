module.exports = {
  siteTitle: 'Jean-François GUÉRITTE - gueritte.com',
  siteDescription: 'GUÉRITTE Jean-François is an System & DevOps Engineer based in Toulouse, France.',
  siteKeywords: 'Jean-François GUÉRITTE, Jean-François, jean-francois, GUÉRITTE, GUERITTE, jfgueritte, jf-gueritte, system engineer, ingenieur, devops, devops engineer',
  siteUrl: 'https://gueritte.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-36453091-1',
  googleVerification: 'WXmym-09JD04R4L3ymvdPJcI3GCwJR3t-i99hrhCxIQ',
  name: 'Jean-François GUÉRITTE',
  location: 'Toulouse, FR',
  email: 'contact@gueritte.com',
  link: 'https://stars.chromeexperiments.com/',
  github: 'https://github.com/jfg',
  twitterHandle: '',
  linkedin: 'https://www.linkedin.com/in/jean-francois-gueritte/',
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jean-francois-gueritte/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/jfg',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    white: '#FF0000',
    green: '#FF0000',
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
