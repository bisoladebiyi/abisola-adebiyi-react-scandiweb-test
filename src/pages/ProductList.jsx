import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { addToCart } from "../redux/feature/cartSlice";
import { CategoryTitle, ProductGrid } from "../utils/styledComponents";

class ProductList extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.categoryName !== this.props.categoryName) {
      let catName = this.props.categoryName;
      this.props.handleActiveCategory(catName);
    }
  }
  render() {
    const { categoryName, products, currency, addToCart, cartItemIds } =
      this.props;

    return (
      <div>
        <CategoryTitle>{categoryName}</CategoryTitle>
        <ProductGrid>
          {currency &&
            products?.map((product) => {
              return (
                <Link to={`/${categoryName}/${product.id}`} key={product.id}>
                  <ProductCard
                    product={product}
                    cartItemIds={cartItemIds}
                    addToCart={addToCart}
                    currency={currency}
                  />
                </Link>
              );
            })}
        </ProductGrid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    cartItemIds: state.cartItemIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
