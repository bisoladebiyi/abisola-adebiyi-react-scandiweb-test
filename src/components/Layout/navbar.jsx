import React, { Component } from "react";
import styled from "styled-components";
import { colors, spacing } from "../../styles/_vars";
import logo from "../../assets/images/logo transparent.png";
import cart from "../../assets/images/Empty Cart.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      iscurrencyDroprdownOpen: false,
      active: window.location.pathname === "/" ? "all" : window.location.pathname.replace("/", "")
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({
      iscurrencyDroprdownOpen: !this.state.iscurrencyDroprdownOpen,
    });
  }

  render() {
    
    return (
      <NavWrapper>
        <CategoryList>
          {this.props.categories.map((cat, i) => (
            <Link to={`/${cat === "all" ? "" : cat}`} key={i}>
              <CategoryListItem
                active={this.state.active === cat ? true : false}
              >
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
                  <li>$ USD</li>
                  <li>€ EUR</li>
                  <li>¥ JPY</li>
                </ul>
              </CurrencyDropdown>
            )}
            <p onClick={this.toggleDropdown}>
              $
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
            <Cart src={cart} />
          </div>
        </CurrencyCartWrapper>
      </NavWrapper>
    );
  }
}

export default Navbar;

const NavWrapper = styled.nav`
  width: 100%;
  position: fixed;
  padding: 30px ${spacing.lg} 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: start;
  justify-content: space-between;
  background: #fff;
  z-index: 50;

  p {
    cursor: pointer;
  }
`;

const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
`;
const CategoryListItem = styled.li`
  padding: 0px 15px 30px;
  position: relative;
  color: ${(props) => (props.active ? colors.primary : colors.dark)};
  font-weight: ${(props) => (props.active ? "500" : "400")};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${colors.primary};
    height: 2px;
    width: 100%;
    border-radius: 5px;
    opacity: ${(props) => (props.active ? "1" : "0")};
    transition: opacity 0.2s ease-in-out;
  }
`;

const CurrencyCartWrapper = styled.div`
  display: flex;
  justify-content: end;
  font-size: 17px;
  font-weight: 500;

  .content {
    display: inline-flex;
    align-items: start;
    position: relative;
  }
`;

const LogoWrapper = styled.div`
  margin-top: -5px;
  display: flex;
  justify-content: center;

  img {
    width: 40px;
  }
`;
const Cart = styled.img`
  margin-left: 25px;
  width: 20px;
  cursor: pointer;
`;

const DropdownArrow = styled.svg`
  transform: ${(props) => (props.isOpen ? "rotate(0deg)" : "rotate(180deg)")};
  margin-left: 8px;
  transition: transform 0.1s ease-in-out;
`;

const CurrencyDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.24));
  background: #fff;
  padding: 20px 0;
  width: 150%;
  margin-top: 10px;
  ul {
    list-style: none;
    li {
      padding: 10px 25px;
      cursor: pointer;
      &:hover {
        background: #eeeeee;
      }
    }
  }
`;
