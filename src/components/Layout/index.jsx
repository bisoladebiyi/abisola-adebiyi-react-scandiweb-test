import React, { Component } from "react";
import Navbar from "./navbar";
import styled from "styled-components";
import { spacing } from "../../styles/_vars";

class Layout extends Component {
  render() {
    const { categories, currencies, children, active } = this.props;
    return (
      <div>
        <Navbar categories={categories} currencies={currencies} active={active} />
        <MainContent>{children}</MainContent>
      </div>
    );
  }
}


export default Layout;

const MainContent = styled.main`
  padding: 0 ${spacing.lg};
`;
