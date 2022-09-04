import { graphql } from "@apollo/client/react/hoc";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import LoadingState from "../components/LoadingState";
import { GET_CATEGORIES } from "../utils/queries";
import Cart from "./Cart";
import Error from "./Error";
import ProductDescription from "./ProductDescription";
import ProductList from "./ProductList";

class App extends Component {
  constructor() {
    super();
    this.state = { activeCategory: "" };
    this.handleActiveCategory = this.handleActiveCategory.bind(this);
  }

  // set active category
  componentDidUpdate(prevProps) {
    if (prevProps.data.loading) {
      this.setState({ activeCategory: this.props.data?.categories[0].name });
    }
  }

  // handle active category
  handleActiveCategory(category) {
    this.setState({ activeCategory: category });
  }

  render() {
    const { data } = this.props;
    const categories = data.categories?.map((cat) => cat.name); //get list of categories
    const currencies =
      data.categories &&
      data.categories[0].products[0].prices.map((price) => ({
        symbol: price.currency.symbol,
        label: price.currency.label,
      })); // get list of currencies

    return (
      <BrowserRouter>
        {data.loading ? (
          <LoadingState />
        ) : (
          <Layout
            categories={categories}
            currencies={currencies}
            active={this.state.activeCategory}
          >
            <div className="main">
              <Routes>
                {this.props.data?.categories?.map((cat, i) => (
                  <Route
                    key={i}
                    exact
                    path={cat.name === "all" ? "/" : `/${cat.name}`}
                    element={
                      <ProductList
                        categoryName={cat.name}
                        products={cat.products}
                        handleActiveCategory={this.handleActiveCategory}
                      />
                    }
                  />
                ))}
                {categories?.map((cat) => (
                  <Route
                    exact
                    key={cat}
                    path={`/${cat}/:id`}
                    element={<ProductDescription />}
                  />
                ))}

                <Route exact path="/cart" element={<Cart />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </Layout>
        )}
      </BrowserRouter>
    );
  }
}

export default graphql(GET_CATEGORIES)(App);
