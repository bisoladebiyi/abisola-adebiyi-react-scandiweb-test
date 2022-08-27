import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Error from "./Error";
import ProductDescription from "./ProductDescription";
import ProductList from "./ProductList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeCategory: "women",
    };
    this.changeCategory = this.changeCategory.bind(this);
  }
  changeCategory = (newCat) => {
    this.setState({ activeCategory: newCat });
  };

  render() {
    return (
      <BrowserRouter>
        <Layout
          activeCategory={this.state.activeCategory}
          changeCategory={this.changeCategory}
        >
          <div className="App">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <ProductList activeCategory={this.state.activeCategory} />
                }
              />
              <Route exact path="/products/:id" element={<ProductDescription />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
