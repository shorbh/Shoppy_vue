import axios from "axios";
import { useState } from "../../stores/state.js";
import { defineStore } from "pinia";

export const useActionProductList = defineStore("productList.action", () => {
  async function getProducts() {
    const products = await axios.get("https://fakestoreapi.com/products");
    // console.log(products.data);
    const state = useState();
    state.isLoad = true;
    state.productInfo = products.data;
    state.filterProducts = products.data;
    // console.log({ state });
  }
  function loadNextCards() {
    const state = useState();
    state.position = state.position + 6;
  }
  function loadPrevCards() {
    const state = useState();
    state.position = state.position - 6;
  }
  let addToCart = (product) => {
    // console.log("add to cart");
    const state = useState();
    state.cartProducts = [...state.cartProducts, product];
  };
  let remToCart = (product) => {
    const state = useState();
    state.cartProducts = [
      ...state.cartProducts.filter(({ id }) => id !== product.id)
    ];
  };
  let addToFav = (product) => {
    const state = useState();
    state.favProducts = [...state.favProducts, product];
  };
  let remToFav = (product) => {
    const state = useState();
    state.favProducts = [
      ...state.favProducts.filter((prod) => prod.id !== product.id)
    ];
  };
  return {
    getProducts,
    loadNextCards,
    loadPrevCards,
    addToCart,
    remToCart,
    addToFav,
    remToFav
  };
});
