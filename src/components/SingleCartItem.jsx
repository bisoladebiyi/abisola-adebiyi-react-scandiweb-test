import React, { Component } from "react";
import {
  CartItem,
  ColorBtn,
  ItemColors,
  ItemImgWrapper,
  ItemInfo,
  ItemSizes,
  QtyBtn,
  QtyWrapper,
  SizeBtn,
} from "../utils/styledComponents";

class SingleCartItem extends Component {
  constructor() {
    super();
    this.state = {
      selectedAttr: {},
    };
  }

  componentDidMount() {
    let product = this.props.cart?.find((x) => x.id === this.props.id);
    this.setState({
      selectedAttr: product?.selected
        ? product?.selected
        : this.state.selectedAttr,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.attributes !== this.props.attributes) {
      let product = this.props.cart?.find((x) => x.id === this.props.id);
      this.setState({
        selectedAttr: product?.selected
          ? product?.selected
          : this.state.selectedAttr,
      });
    }
  }
  render() {
    const {
      id,
      brand,
      name,
      currency,
      price,
      qty,
      gallery,
      handleItemQuantity,
      attributes,
    } = this.props;
    const { selectedAttr } = this.state;
    return (
      <CartItem>
        <ItemInfo>
          <h2 className="brand">{brand}</h2>
          <h2 className="name">{name}</h2>
          <p className="price">
            {currency}
            {price.amount * qty}
          </p>
          {attributes.map((attr, i) => {
            return attr.id !== "Color" ? (
              <ItemSizes
                style={{ marginTop: i > 0 ? "20px" : "0" }}
                key={attr.id}
              >
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
              </ItemSizes>
            ) : (
              <ItemColors
                style={{ marginTop: i > 0 ? "20px" : "0" }}
                colorsNo={attr.items.length}
                key={attr.id}
              >
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
              </ItemColors>
            );
          })}
        </ItemInfo>
        <ItemImgWrapper>
          <QtyWrapper>
            <QtyBtn onClick={() => handleItemQuantity({ id, add: true })}>
              +
            </QtyBtn>
            <p>{qty}</p>
            <QtyBtn onClick={() => handleItemQuantity({ id, subtract: true })}>
              -
            </QtyBtn>
          </QtyWrapper>
          <figure>
            <img src={gallery[0]} alt="" />
          </figure>
        </ItemImgWrapper>
      </CartItem>
    );
  }
}

export default SingleCartItem;
