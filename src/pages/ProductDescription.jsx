import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { GET_PRODUCT_DETAILS } from "../utils/queries";
import { withRouter } from "../utils/helpers";
import parse from "html-react-parser";
import {
  AddToCart,
  ColorBtn,
  LargeImg,
  ProductColors,
  ProductContent,
  ProductImagesWrapper,
  ProductPriceWrapper,
  ProductSizes,
  ProductWrapper,
  SizeBtn,
  SmallImg,
} from "../utils/styledComponents";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/feature/cartSlice";

class ProductDescription extends Component {
  constructor() {
    super();
    this.state = {
      selectedAttr: {},
      mainImg: "",
    };
  }

  componentDidMount() {
    if (this.props.data.product) {
      let product = this.props.cart?.find(
        (x) => x.id === this.props.data.product?.id
      );
      this.setState({
        ...this.state,
        mainImg: this.props.data.product?.gallery[0],
        selectedAttr: product?.selected
          ? product?.selected
          : this.state.selectedAttr,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data.product !== this.props.data.product) {
      let product = this.props.cart?.find(
        (x) => x.id === this.props.data.product?.id
      );
      this.setState({
        ...this.state,
        mainImg: this.props.data.product?.gallery[0],
        selectedAttr: product?.selected
          ? product?.selected
          : this.state.selectedAttr,
      });
    }
  }

  updateAttr(selectedAttr) {
    this.setState({
      ...this.state,
      selectedAttr: { ...this.state.selectedAttr, ...selectedAttr },
    });
  }

  selectImg(img) {
    this.setState({ ...this.state, mainImg: img });
  }

  handleCartItem(id, data, isInCart) {
    if (isInCart) {
      this.props.removeFromCart(id);
    } else {
      this.props.addToCart(data);
    }
  }

  render() {
    const { data, currency, cartItemIds } = this.props;
    const { mainImg, selectedAttr } = this.state;
    const { product } = data;
    let price = product?.prices.find((x) => x.currency.symbol === currency);

    return (
      <>
        {product && (
          <ProductWrapper>
            <ProductImagesWrapper>
              <div>
                {product.gallery.map((img) => (
                  <SmallImg
                    key={img}
                    onClick={() => this.selectImg(img)}
                    selected={img === mainImg}
                  >
                    <img src={img} alt="" />
                  </SmallImg>
                ))}
              </div>
              <LargeImg>
                <img src={mainImg} alt="" />
              </LargeImg>
            </ProductImagesWrapper>
            <ProductContent>
              <h2 className="brand">{product.brand}</h2>
              <h2 className="name">{product.name}</h2>
              {product.attributes.map((attr) => {
                return attr.id !== "Color" ? (
                  <ProductSizes key={attr.id}>
                    <h4>{attr.id}:</h4>
                    <div>
                      {attr.items.map((item, i) => (
                        <SizeBtn
                          onClick={() =>
                            this.updateAttr({
                              [attr.id]: item.id,
                            })
                          }
                          selected={
                            selectedAttr[attr.id]
                              ? selectedAttr[attr.id] === item.id
                              : i === 0
                          }
                          key={item.id}
                        >
                          {item.value}
                        </SizeBtn>
                      ))}
                    </div>
                  </ProductSizes>
                ) : (
                  <ProductColors colorsNo={attr.items.length} key={attr.id}>
                    <h4>{attr.id}:</h4>
                    <div>
                      {attr.items.map((item, i) => (
                        <ColorBtn
                          onClick={() =>
                            this.updateAttr({
                              [attr.id]: item.id,
                            })
                          }
                          color={item.value}
                          selected={
                            selectedAttr[attr.id]
                              ? selectedAttr[attr.id] === item.id
                              : i === 0
                          }
                          key={item.id}
                        ></ColorBtn>
                      ))}
                    </div>
                  </ProductColors>
                );
              })}
              <ProductPriceWrapper>
                <h4>PRICE:</h4>
                <p>
                  {currency}
                  {price.amount}
                </p>
              </ProductPriceWrapper>
              <AddToCart
                onClick={() =>
                  this.handleCartItem(
                    product.id,
                    {
                      ...product,
                      qty: 1,
                      selected: this.state.selectedAttr,
                    },
                    cartItemIds.includes(product.id)
                  )
                }
                inCart={cartItemIds.includes(product.id)}
              >
                {cartItemIds.includes(product.id)
                  ? "remove from cart"
                  : "add to cart"}
              </AddToCart>
              <div className="desc">{parse(product.description)}</div>
            </ProductContent>
          </ProductWrapper>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    cart: state.cart,
    cartItemIds: state.cartItemIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withRouter(
    graphql(GET_PRODUCT_DETAILS, {
      options: (props) => ({
        variables: {
          product_id: props.router.params.id,
        },
      }),
    })(ProductDescription)
  )
);
