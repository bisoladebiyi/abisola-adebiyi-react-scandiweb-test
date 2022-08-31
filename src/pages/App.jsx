import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Cart from "./Cart";
import Error from "./Error";
import ProductDescription from "./ProductDescription";
import ProductList from "./ProductList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  displayCategories() {
    let data = this.props.data;
    if (data.loading) {
      return;
    } else {
      let cats = data.categories.map((cat) => cat.name);
      this.setState({ categories: cats });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data.loading) this.displayCategories();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout
          changeCategory={this.changeCategory}
          categories={this.state.categories}
        >
          <div className="App">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <ProductList />
                }
              />
              {this.state.categories
                .filter((c) => c !== "all")
                .map((cat, i) => (
                  <Route
                    key={i}
                    exact
                    path={`/${cat}`}
                    element={
                      <ProductList />
                    }
                  />
                ))}
              <Route
                exact
                path="/products/:id"
                element={<ProductDescription />}
              />
              <Route exact path="/cart" element={<Cart />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </Layout>
      </BrowserRouter>
    );
  }
}

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export default graphql(GET_CATEGORIES)(App);
