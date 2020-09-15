import { hex2rgba } from '@utils';

const BLACK = '#000000';
const WHITE = '#FFFFFF';
const BLUE = '#2f70fb';
const GREY = '#eeecec';
const GREEN = '#00ba03';
const RED = '#ff4141';

const theme = {
  colors: {
    green: GREEN,
    white: WHITE,

    //nav.js
    nav_container_background: WHITE,
    nav_container_shadow: hex2rgba(BLUE, 0.25),
    nav_link: BLACK,
    nav_link_number: BLACK,
    nav_logo_a: RED, // ?
    nav_logo_a_focus: hex2rgba(BLUE, 0.25),
    nav_hamburger_bar_middle: BLACK,
    nav_hamburger_bar_top_bottom: BLACK,

    //menu.js
    menu_sidebar_background: WHITE,
    menu_sidebar_boxshadow: BLACK,
    menu_navlinks: BLACK,
    menu_navlinks_number: BLACK,

    //head.js
    tilecolor: RED, // ?
    themecolor: RED, // ?

    //heading.js
    heading_number: BLACK,
    heading_line: BLACK,

    //hero.js
    hero_overline: BLACK,
    hero_subtitle: BLACK,

    //layout.js
    layout_skiptocontent_active: RED, // ?
    layout_skiptocontent_active_background: RED, // ?

    //loader.js
    loader_background: WHITE,

    //side.js
    side_logo: BLACK,

    //social.js
    side_logo_line: BLACK,

    //about.js
    about_skill: BLACK,
    about_skill_before: BLACK,
    about_avatar_background: hex2rgba(BLUE, 0.5),
    about_avatar_before: hex2rgba(BLUE, 0.25),
    about_avatar_square: BLACK,

    //contact.js
    contact_heading: BLACK,

    //featured.js
    featured_label: BLACK,
    featured_title: BLACK,
    featured_description_background: hex2rgba(BLUE, 0.8),
    featured_text: BLACK,
    featured_tags_text: BLACK,
    featured_tags_icon: BLACK,
    featured_img_background: WHITE,
    featured_img_background_before: hex2rgba(GREY, 0.1),

    //jobs.js
    jobs_tabbutton_line_notselected: BLACK,
    jobs_tabbutton_text: BLACK,
    jobs_tabbutton_text_notselected: BLACK,
    jobs_tabbutton_focus: hex2rgba(BLUE, 0.25),
    jobs_tabbutton_line_selected: BLUE,
    jobs_title: BLACK,
    jobs_company: BLACK,
    jobs_details: BLACK,

    //project.js
    project_container_background: RED,
    project_folder: BLACK,
    project_links: BLACK,
    project_text: BLACK,
    project_button: BLACK,

    //index.js
    tags: RED, // ?
    date: RED, // ?
    postinner_background: RED, // ?
    postname: RED, // ?
    postdescription: RED, // ?

    //button.js
    button: RED,
    button_border: RED,
    button_active: hex2rgba(GREY, 0.5),

    //GlobalStyle.js
    globalstyle_body_background: WHITE,
    hero_text: BLACK,
    globalstyle_selection_background: GREEN,
    h6: BLUE,
    menu_button_focus: BLACK,
    p_code: RED, // ?

    // Bonne nuit
    ul_li_before: BLACK,
    blockquote_border: BLACK,
    hr_background: BLACK,
    logo: BLACK,
    breadcrumb: BLACK,

    //inlinelink.js
    inlinelink_active: BLACK,
    inlinelink_after: BLACK,

    //mixins.js
    link_focus: BLACK,
    inlinelink: BLACK,
    inlinelink_active2: BLACK,
    smallbutton: BLACK,
    smallbutton_border: BLACK,
    smallbutton_active_background: BLACK,
    bigbutton: BLACK,
    bigbutton_border: BLACK,
    bigbutton_active_background: BLACK,
    boxshadow: BLACK,
    boxshadow_focus: BLACK,
    fancylist_li_before: BLACK,

    //prismstyles.js
    linehightlighting_borderleft: BLACK,
    languagebadge_background: BLACK,
    languagebadge: BLACK,

    //tags.js
    tagscontainer_ul: BLACK,
    tagscontainer_ul_a: BLACK,
    tagscontainer_ul_a_count: BLACK,

    //tag.js
    tagscontainer_subtitle: BLACK,

    //post.js
    postcontent_p: BLACK,

    //email.js
    featured_tags_icon_background: BLACK,

    //footer.js
    social: BLACK,
    gitthublink: BLACK,

    //archive.js
    table_tbodytr_focus: BLACK,
    td_title: BLACK,

    //404.js
    title: BLACK,
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 2000,
};

export default theme;
