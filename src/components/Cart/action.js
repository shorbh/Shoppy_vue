import { useState } from "../../stores/state.js";
import { defineStore } from "pinia";

export const useActionCart = defineStore("Cart.action", () => {
  let incCountToCart = (index) => {
    const state = useState();
    state.cartProducts = [
      ...state.cartProducts.filter((prod, i) => i < index),
      {
        ...state.cartProducts[index],
        count: state.cartProducts[index].count
          ? state.cartProducts[index].count + 1
          : 2,
      },
      ...state.cartProducts.filter((prod, i) => i > index),
    ];
  };
  let decCountToCart = (index) => {
    const state = useState();
    state.cartProducts = [
      ...state.cartProducts.filter((prod, i) => i < index),
      {
        ...state.cartProducts[index],
        count: state.cartProducts[index].count
          ? state.cartProducts[index].count - 1
          : 1,
      },
      ...state.cartProducts.filter((prod, i) => i > index),
    ];
  };
  return {
    incCountToCart,
    decCountToCart,
  };
});
