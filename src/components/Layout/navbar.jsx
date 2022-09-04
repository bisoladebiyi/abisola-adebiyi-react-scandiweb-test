import React, { Component } from "react";
import logo from "../../assets/images/logo transparent.png";
import cart from "../../assets/images/Empty Cart.png";
import { Link } from "react-router-dom";
import {
  Cart,
  CategoryList,
  CategoryListItem,
  CurrencyCartWrapper,
  CurrencyDropdown,
  DropdownArrow,
  LogoWrapper,
  MenuBar,
  NavWrapper,
} from "../../utils/styledComponents";
import { changeCurrency } from "../../redux/feature/cartSlice";
import { connect } from "react-redux";
import CartOverlay from "../CartOverlay";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      iscurrencyDroprdownOpen: false,
      isMenuOpen: false,
      isCartOverlayOpen: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  toggleDropdown() {
    if (!this.state.iscurrencyDroprdownOpen) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
    this.setState({
      ...this.state,
      iscurrencyDroprdownOpen: !this.state.iscurrencyDroprdownOpen,
    });
  }

  toggleOverlay() {
    if (!this.state.isCartOverlayOpen) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
    this.setState({
      ...this.state,
      isCartOverlayOpen: !this.state.isCartOverlayOpen,
    });
  }
  //function for click out logic
  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target) && !this.state.iscurrencyDroprdownOpen)
      this.toggleOverlay();
    if (!this.node.contains(e.target) && !this.state.isCartOverlayOpen)
      this.toggleDropdown();
  };

  toggleMenu() {
    this.setState({
      ...this.state,
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  render() {
    const {
      categories,
      currencies,
      active,
      currency,
      changeCurrency,
      cartCount,
    } = this.props;

    return (
      <NavWrapper>
        {/* nav links and hambuger menu  */}
        <MenuBar onClick={this.toggleMenu} isMenuOpen={this.state.isMenuOpen}>
          <div></div>
          <div></div>
        </MenuBar>
        <CategoryList isMenuOpen={this.state.isMenuOpen}>
          {categories?.map((cat, i) => (
            <Link to={`/${cat === "all" ? "" : cat}`} key={i}>
              <CategoryListItem
                onClick={this.toggleMenu}
                active={active === cat ? true : false}
              >
                {cat}
              </CategoryListItem>
            </Link>
          ))}
        </CategoryList>
        {/* logo  */}
        <Link to="/">
          <LogoWrapper>
            <img src={logo} alt="logo" />
          </LogoWrapper>
        </Link>
        {/* currency and cart  */}
        <CurrencyCartWrapper
          ref={(node) => {
            this.node = node;
          }}
        >
          <div className="content">
            {this.state.iscurrencyDroprdownOpen && (
              <CurrencyDropdown>
                <ul>
                  {currencies.map(({ label, symbol }) => (
                    <li key={symbol} onClick={() => changeCurrency(symbol)}>
                      {symbol} {label}
                    </li>
                  ))}
                </ul>
              </CurrencyDropdown>
            )}
            <p onClick={this.toggleDropdown}>
              {currency}
              <DropdownArrow
                isOpen={this.state.iscurrencyDroprdownOpen}
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 3.5L4 0.5L7 3.5"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </DropdownArrow>
            </p>
            <Cart count={cartCount} onClick={this.toggleOverlay}>
              <img src={cart} alt="" />
            </Cart>
          </div>
          {/* cart overlay  */}
          {this.state.isCartOverlayOpen && (
            <CartOverlay count={cartCount} toggle={this.toggleOverlay} />
          )}
        </CurrencyCartWrapper>
      </NavWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    cartCount: state.cartCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrency: (symbol) => dispatch(changeCurrency(symbol)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
