import React, { Component } from "react";
import styled from "styled-components";
import {
  ColorBtn,
  ProductColors,
  ProductSizes,
  SizeBtn,
} from "./ProductDescription";
import img from "../assets/images/sweatshirt.jpg";
import { colors } from "../styles/_vars";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      selectedSize: this.sizes[0],
      selectedColor: this.colors[0],
      qty: 1,
    };
  }

  sizes = ["xs", "s", "m", "l"];
  colors = ["#D3D2D5", "#2B2B2B", "#0F6450"];
  selectSize(newSize) {
    this.setState({ ...this.state, selectedSize: newSize });
  }
  selectColor(color) {
    this.setState({ ...this.state, selectedColor: color });
  }
  handleQuantity(action) {
    if (action === "increase") {
      this.setState({ ...this.state, qty: this.state.qty + 1 });
    } else if (action === "decrease" && this.state.qty > 1) {
      this.setState({ ...this.state, qty: this.state.qty - 1 });
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <CartHeading>Cart</CartHeading>
        <CartItemsWrapper>
          <CartItem>
            <ItemInfo>
              <h2 className="brand">Apollo</h2>
              <h2 className="name">Running Short</h2>
              <p className="price">$50.00</p>
              <ItemSizes>
                <h4>SIZE:</h4>
                <div>
                  {this.sizes.map((size, i) => (
                    <SizeBtn
                      onClick={() => this.selectSize(size)}
                      selected={this.state.selectedSize === size ? true : false}
                      key={i}
                    >
                      {size}
                    </SizeBtn>
                  ))}
                </div>
              </ItemSizes>
              <ItemColors colorsNo={this.colors.length}>
                <h4>COLOR:</h4>
                <div>
                  {this.colors.map((color, i) => (
                    <ColorBtn
                      onClick={() => this.selectColor(color)}
                      color={color}
                      selected={
                        this.state.selectedColor === color ? true : false
                      }
                      key={i}
                    ></ColorBtn>
                  ))}
                </div>
              </ItemColors>
            </ItemInfo>
            <ItemImgWrapper>
              <QtyWrapper>
                <QtyBtn onClick={() => this.handleQuantity("increase")}>
                  +
                </QtyBtn>
                <p>{this.state.qty}</p>
                <QtyBtn onClick={() => this.handleQuantity("decrease")}>
                  -
                </QtyBtn>
              </QtyWrapper>
              <figure>
                <img src={img} alt="" />
              </figure>
            </ItemImgWrapper>
          </CartItem>
        </CartItemsWrapper>
        <CartSummary>
          <p>
            Tax 21%:<span>$42.00</span>
          </p>
          <p>
            Quantity: <span>3</span>
          </p>
          <p>
            Total: <span>$200.00</span>
          </p>
          <OrderBtn>order</OrderBtn>
        </CartSummary>
      </div>
    );
  }
}

export default Cart;

const CartHeading = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  text-transform: uppercase;
`;
const CartItemsWrapper = styled.div`
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

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid #e5e5e5;
`;

const ItemInfo = styled.div`
  width: 243px;
`;

const ItemSizes = styled(ProductSizes)`
  margin: 0;
`;
const ItemColors = styled(ProductColors)`
  margin: 10px 0 0;
`;

const ItemImgWrapper = styled.div`
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

const QtyWrapper = styled.div`
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

const QtyBtn = styled(SizeBtn)`
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

const CartSummary = styled.div`
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

const OrderBtn = styled.button`
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