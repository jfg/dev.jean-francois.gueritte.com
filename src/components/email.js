import React from 'react';
import PropTypes from 'prop-types';
import { link } from '@config';
import { Side } from '@components';
import styled from 'styled-components';
import { theme } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.side_line};
  }
`;
const StyledEmailLink = styled.a`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;
  color: ${colors.side_mail};
  &:hover,
  &:focus {
    transform: translateY(-3px);
    color: ${colors.side_mail_active};
  }
`;

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <StyledEmailLink href={`${link}`}>Click if you are CURIOUS !</StyledEmailLink>
    </StyledLinkWrapper>
  </Side>
);
Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
