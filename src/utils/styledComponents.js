import styled from "styled-components";
import { colors, spacing } from "../styles/_vars";


// for navbar 
export const NavWrapper = styled.nav`
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

export const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
`;
export const CategoryListItem = styled.li`
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

export const CurrencyCartWrapper = styled.div`
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

export const LogoWrapper = styled.div`
  margin-top: -5px;
  display: flex;
  justify-content: center;

  img {
    width: 40px;
  }
`;
export const Cart = styled.figure`
  margin-left: 25px;
  
  cursor: pointer;
  position: relative;
  img{
    width: 20px;
  }

  &::before {
      position: absolute;
      top: -11px;
      right: -10px;
      content: "${props => props.count}";
      background: #000;
      color: #fff;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-size: 14px
      
  }
`;

export const DropdownArrow = styled.svg`
  transform: ${(props) => (props.isOpen ? "rotate(0deg)" : "rotate(180deg)")};
  margin-left: 8px;
  transition: transform 0.1s ease-in-out;
`;

export const CurrencyDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.24));
  background: #fff;
  padding: 20px 0;
  width: 170%;
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

// for product list page 
export const CategoryTitle = styled.h1`
  font-size: 40px;
  text-transform: capitalize;
  font-weight: 400;
`;
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 100px;
  margin-top: ${spacing.lg};
  padding-bottom: ${spacing.lg};

  a {
    all: unset;
  }
`;
export const Product = styled.div`
  padding: 15px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  button {
    opacity: 0;
  }
  figure {
    position: relative;
    width: 100%;
    height: 330px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: start;
    }
  }
  .name {
    margin: 20px 0 5px 0;
    font-size: 15px;
    font-weight: 200;
  }
  .price {
    font-size: 15px;
    font-weight: 500;
  }

  &:hover {
    background: #fff;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

    button {
      opacity: 1;
    }
  }
`;

export const AddToCartBtn = styled.button`
  all: unset;
  width: 45px;
  height: 45px;
  background: ${props => props.disabled ? colors.primary_deep : colors.primary};
  border-radius: 50%;
  position: absolute;
  right: 20px;
  bottom: -20px;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
  display: grid;
  place-items: center;
  transition: opacity 0.1s ease-in-out;
`;


// for product description page 
export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductImagesWrapper = styled.div`
  width: 60%;
  display: flex;
`;

export const SmallImg = styled.figure`
  width: 75px;
  margin-bottom: 35px;
  border: 1px solid
    ${(props) => (props.selected ? colors.primary : "transparent")};
  cursor: pointer;

  img {
    width: 100%;
  }
`;

export const LargeImg = styled.figure`
  width: 82%;
  margin-left: 30px;
  img {
    width: 100%;
  }
`;

export const ProductContent = styled.div`
  width: 33%;
  padding-right: ${spacing.lg};

  .brand,
  .name {
    font-size: 27px;
  }
  .brand {
    font-weight: 600;
    margin-bottom: 7px;
  }
  .name {
    font-weight: 400;
  }
  .desc {
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
  }
`;

export const ProductSizes = styled.div`
  margin-top: 30px;
  h4 {
    font-family: Roboto Condensed;
    text-transform: uppercase;
  }
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin-top: 8px;
  }
`;

export const SizeBtn = styled.button`
  all: unset;
  font-family: Source Sans Pro;
  border: 1px solid ${colors.dark};
  color: ${(props) => (props.selected ? "#fff" : colors.dark)};
  background: ${(props) => (props.selected ? colors.dark : "transparent")};
  padding: 10px 0;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

export const ProductColors = styled.div`
  margin-top: 20px;
  h4 {
    font-family: Roboto Condensed;
    text-transform: uppercase;
  }
  div {
    display: grid;
    grid-template-columns: repeat(${(props) => props.colorsNo}, 32px);
    grid-gap: 10px;
    margin-top: 8px;
  }
`;

export const ColorBtn = styled.button`
  all: unset;
  background: ${(props) => props.color};
  border: 1px solid
    ${(props) => (props.selected ? colors.primary : "transparent")};
  height: 32px;
  cursor: pointer;
`;

export const ProductPriceWrapper = styled.div`
  margin: 34px 0 20px;
  h4 {
    font-family: Roboto Condensed;
  }
  p {
    font-weight: 700;
    font-size: 21px;
    margin-top: 12px;
  }
`;

export const AddToCart = styled.button`
  all: unset;
  background: ${props => props.inCart ? colors.primary_deep : colors.primary};
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 40px;
  cursor: pointer;
`;


// for cart page 
export const CartHeading = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  text-transform: uppercase;
`;
export const CartItemsWrapper = styled.div`
  border-top: 1px solid #e5e5e5;
  margin-top: 50px;

  .brand,
  .name {
    font-size: 27px;
  }
  .brand {
    font-weight: 600;
    margin-bottom: 7px;
  }
  .name {
    font-weight: 400;
  }
  .price {
    font-weight: 700;
    font-size: 22px;
    margin: 15px 0;
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid #e5e5e5;
`;

export const ItemInfo = styled.div`
  width: 243px;
`;

export const ItemSizes = styled(ProductSizes)`
  margin: 0;
`;
export const ItemColors = styled(ProductColors)`
  margin: 10px 0 0;
`;

export const ItemImgWrapper = styled.div`
  display: flex;
  figure {
    width: 180px;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const QtyWrapper = styled.div`
  margin-right: 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 22px;
  }
`;

export const QtyBtn = styled(SizeBtn)`
  width: 40px;
  font-size: 45px;
  font-weight: 100;
  font-family: Raleway;
  height: 20px;
  line-height: 0px;
  display: grid;
  place-items: center;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${colors.dark};
    color: #fff;
  }
`;

export const CartSummary = styled.div`
width: 240px;
margin: 30px 0 150px;
font-size: 21px;
p{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    span {
        font-weight: 700;
        width: 145px;
    }
}
p:last-child {
    font-weight: 500;
}
`;

export const OrderBtn = styled.button`
all: unset;
width: 100%;
background: ${colors.primary};
color: #fff;
text-transform: uppercase;
display: grid;
place-items: center;
font-weight: 600;
font-size: 12px;
padding: 10px 0;
margin-top: 20px;
cursor: pointer;
`