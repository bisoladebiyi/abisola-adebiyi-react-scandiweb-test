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
  NavWrapper,
} from "../../utils/styledComponents";
import { changeCurrency } from "../../redux/feature/cartSlice";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      iscurrencyDroprdownOpen: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({
      iscurrencyDroprdownOpen: !this.state.iscurrencyDroprdownOpen,
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
        <CategoryList>
          {categories?.map((cat, i) => (
            <Link to={`/${cat === "all" ? "" : cat}`} key={i}>
              <CategoryListItem active={active === cat ? true : false}>
                {cat}
              </CategoryListItem>
            </Link>
          ))}
        </CategoryList>
        <Link to="/">
          <LogoWrapper>
            <img src={logo} alt="logo" />
          </LogoWrapper>
        </Link>
        <CurrencyCartWrapper>
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
            <Link to="/cart">
            <Cart count={cartCount}>
              <img src={cart} alt="" />
            </Cart></Link>
          </div>
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
