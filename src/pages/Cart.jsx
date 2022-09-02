import React, { Component } from "react";
import { connect } from "react-redux";
import SingleCartItem from "../components/SingleCartItem";
import { handleItemQuantity } from "../redux/feature/cartSlice";
import {
  CartHeading,
  CartItemsWrapper,
  CartSummary,
  OrderBtn,
} from "../utils/styledComponents";

class Cart extends Component {
  render() {
    const { cart, currency, qtyTotal, handleItemQuantity } = this.props;
    let total = 0;
    cart.map(({ qty, prices }) => {
      let price = prices.find((x) => x.currency.symbol === currency);
      return (total = total + price.amount * qty);
    });
    return (
      <div>
        <CartHeading>Cart</CartHeading>
        <CartItemsWrapper>
          {cart?.map(
            ({ id, name, brand, prices, qty, gallery, attributes }) => {
              let price = prices.find((x) => x.currency.symbol === currency);
              return (
                <SingleCartItem
                  key={id}
                  price={price}
                  id={id}
                  currency={currency}
                  handleItemQuantity={handleItemQuantity}
                  name={name}
                  brand={brand}
                  qty={qty}
                  gallery={gallery}
                  attributes={attributes}
                  cart={cart}
                />
              );
            }
          )}
        </CartItemsWrapper>
        <CartSummary>
          <p>
            Tax 21%:
            <span>
              {currency}
              {total * 0.21}
            </span>
          </p>
          <p>
            Quantity: <span>{qtyTotal}</span>
          </p>
          <p>
            Total:{" "}
            <span>
              {currency}
              {total}
            </span>
          </p>
          <OrderBtn>order</OrderBtn>
        </CartSummary>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    currency: state.currency,
    qtyTotal: state.qtyTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleItemQuantity: (data) => dispatch(handleItemQuantity(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
