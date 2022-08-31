import React, { Component } from "react";
import Navbar from "./navbar";
import styled from "styled-components";
import { spacing } from "../../styles/_vars";

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar
          activeCategory={this.props.activeCategory}
          changeCategory={this.props.changeCategory}
          categories={this.props.categories}
        />
        <MainContent>{this.props.children}</MainContent>
      </div>
    );
  }
}

export default Layout;

const MainContent = styled.main`
  padding: 0 ${spacing.lg};
`;
