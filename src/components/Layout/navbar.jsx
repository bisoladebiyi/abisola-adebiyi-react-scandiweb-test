import React, { Component } from "react";
import styled from "styled-components";
import { colors, spacing } from "../../styles/_vars";
import logo from "../../assets/images/logo transparent.png";
import cart from "../../assets/images/Empty Cart.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { activeCategory, changeCategory } = this.props;
    return (
      <NavWrapper>
        <CategoryList>
            <Link to="/?category=women">
            <CategoryListItem
            active={activeCategory === "women" ? true : false}
            onClick={() => changeCategory("women")}
          >
            women
          </CategoryListItem>
            </Link>
         
         <Link to="/?category=men">
         <CategoryListItem
            active={activeCategory === "men" ? true : false}
            onClick={() => changeCategory("men")}
          >
            men
          </CategoryListItem>
         </Link> 
         <Link to="/?category=kids">
         <CategoryListItem
            active={activeCategory === "kids" ? true : false}
            onClick={() => changeCategory("kids")}
          >
            kids
          </CategoryListItem>
         </Link>
          
        </CategoryList>
        <Link to="/"><LogoWrapper>
          <img src={logo} alt="logo" />
        </LogoWrapper></Link>
        <CurrencyCartWrapper>
          <p>$</p>
          <Cart src={cart} />
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
  color: ${props => (props.active ? colors.primary : colors.dark)};
  font-weight: ${props => (props.active ? "500" : "400")};
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
    opacity: ${props => (props.active ? "1" : "0")};
    transition: opacity 0.2s ease-in-out;
  }
`;

const CurrencyCartWrapper = styled.div`
  display: flex;
  justify-content: end;
  font-size: 17px;
  font-weight: 500;
  align-items: start;
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
