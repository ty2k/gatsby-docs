import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

import Logo from "../images/BCID_H_rgb.svg";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #036;
  border-bottom: 2px solid #fcba19;
  color: white;

  padding: 0 30px;
  position: sticky;
  top: 0;
  z-index: 1;

  a {
    min-height: 65px;
  }

  svg.logo {
    width: 175px;
  }

  span {
    font-size: 2em;
    font-weight: 400;
    line-height: 1em;
    padding: 10px 0;
    word-break: break-word;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledLink
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <Logo className="logo" />
      <span>{siteTitle}</span>
    </StyledLink>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
