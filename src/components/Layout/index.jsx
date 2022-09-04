import React, { Component } from "react";
import Navbar from "./navbar";
import { AppWrapper, MainContent } from "../../utils/styledComponents";

class Layout extends Component {
  render() {
    const { categories, currencies, children, active } = this.props;
    return (
      <AppWrapper>
        <Navbar categories={categories} currencies={currencies} active={active} />
        <MainContent>{children}</MainContent>
      </AppWrapper>
    );
  }
}


export default Layout;
