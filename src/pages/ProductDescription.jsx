import React, { Component } from "react";
import img from "../assets/images/sweatshirt.jpg";
import styled from "styled-components";
import { colors, spacing } from "../styles/_vars";

class ProductDescription extends Component {
  constructor() {
    super();
    this.state = {
      selectedSize: this.sizes[0],
      selectedColor: this.colors[0],
    };
  }

  sizes = ["xs", "s", "m", "l"];
  colors = ["#D3D2D5", "#2B2B2B", "#0F6450"]
  selectSize(newSize) {
      this.setState({...this.state, selectedSize: newSize})
  }
  selectColor(color) {
    this.setState({...this.state, selectedColor: color})
}

  render() {
    return (
      <ProductWrapper>
        <ProductImagesWrapper>
          <div>
            <SmallImg>
              <img src={img} alt="" />
            </SmallImg>
            <SmallImg>
              <img src={img} alt="" />
            </SmallImg>
            <SmallImg>
              <img src={img} alt="" />
            </SmallImg>
          </div>
          <LargeImg>
            <img src={img} alt="" />
          </LargeImg>
        </ProductImagesWrapper>
        <ProductContent>
          <h2 className="brand">Apollo</h2>
          <h2 className="name">Running Short</h2>
          <ProductSizes>
            <h4>SIZE:</h4>
            <div>
              {this.sizes.map((size, i) => (
                <SizeBtn onClick={() => this.selectSize(size)} selected={this.state.selectedSize === size ? true : false} key={i}>{size}</SizeBtn>
              ))}
            </div>
          </ProductSizes>
          <ProductColors colorsNo={this.colors.length}>
            <h4>COLOR:</h4>
            <div>
              {this.colors.map((color, i) => (
                <ColorBtn onClick={() => this.selectColor(color)} color={color} selected={this.state.selectedColor === color ? true : false} key={i}></ColorBtn>
              ))}
            </div>
          </ProductColors>
          <ProductPriceWrapper>
            <h4>PRICE:</h4>
            <p>$50.00</p>
          </ProductPriceWrapper>
          <AddToCart>add to cart</AddToCart>
          <p className="desc">
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </ProductContent>
      </ProductWrapper>
    );
  }
}

export default ProductDescription;

const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductImagesWrapper = styled.div`
  width: 60%;
  display: flex;
`;

const SmallImg = styled.figure`
  width: 75px;
  margin-bottom: 35px;
  img {
    width: 100%;
  }
`;

const LargeImg = styled.figure`
  width: 82%;
  margin-left: 30px;
  img {
    width: 100%;
  }
`;

const ProductContent = styled.div`
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

const ProductSizes = styled.div`
  margin-top: 30px;
  h4 {
    font-family: Roboto Condensed;
  }
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin-top: 8px;
  }
`;

const SizeBtn = styled.button`
  all: unset;
  font-family: Source Sans Pro;
  border: 1px solid ${colors.dark};
  color: ${props => props.selected ? "#fff" : colors.dark};
  background: ${props => props.selected ? colors.dark : "transparent"};
  padding: 10px 0;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

const ProductColors = styled.div`
  margin-top: 20px;
  h4 {
    font-family: Roboto Condensed;
  }
  div {
    display: grid;
    grid-template-columns: repeat(${props => props.colorsNo}, 32px);
    grid-gap: 10px;
    margin-top: 8px;
  }
`;

const ColorBtn = styled.button`
  all: unset;
  background: ${props => props.color};
  border: 1px solid ${props => props.selected ? colors.primary : "transparent"};
  height: 32px;
  cursor: pointer;
`;

const ProductPriceWrapper = styled.div`
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

const AddToCart = styled.button`
  all: unset;
  background: ${colors.primary};
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 40px;
`;
