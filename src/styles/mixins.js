import { css } from 'styled-components';
import theme from './theme';
import media from './media';
const { colors, fontSizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.link_focus};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.inlinelink};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.blue};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.red} !important;
        transition: ${theme.transition};
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.inlinelink_after};
      transition: ${theme.transition};
      opacity: 0.5;
    }
  `,

  link_white: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      color: ${colors.white};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.inlinelink_active2} !important;
        transition: ${theme.transition};
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.inlinelink_after};
      transition: ${theme.transition};
      opacity: 0.5;
    }
  `,

  link_blue: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      color: ${colors.blue};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.inlinelink_active2} !important;
        transition: ${theme.transition};
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.inlinelink_after};
      transition: ${theme.transition};
      opacity: 0.5;
    }
  `,

  smallButton: css`
    color: ${colors.smallButton};
    background-color: transparent;
    border: 1px solid ${colors.smallButton_border};
    border-radius: ${theme.borderRadius};
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.smish};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.smallButton_active};
      background-color: ${colors.smallButton_background_active};
      border: 1px solid ${colors.smallButton_border_active};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${colors.bigButton};
    background-color: transparent;
    border: 1px solid ${colors.bigButton_border};
    border-radius: ${theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.bigButton_black_active};
      background-color: ${colors.bigButton_active_background};
      border: 1px solid ${colors.bigButton_border_active};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${colors.boxshadow};
    transition: ${theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.boxshadow_focus};
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${fontSizes.lg};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${colors.fancylist_li_before};
      }
    }
  `,
};

export default mixins;
