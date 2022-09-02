import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        category
        brand
        attributes {
            id
            name
            items {
              id
              value
              displayValue
            }
        }
        prices {
          currency {
            symbol
            label
          }
          amount
        }
      }
    }
  }
`;

export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($product_id: String!) {
    product(id: $product_id) {
      id
      name
      inStock
      gallery
      category
      brand
      description
      attributes {
        id
        name
        items {
          id
          value
          displayValue
        }
      }
      prices {
        currency {
          symbol
          label
        }
        amount
      }
    }
  }
`;
