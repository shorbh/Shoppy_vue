import { defineStore } from "pinia";
import { useActionNavBar } from "../components/NavBar/action";
// import { useState } from "./state.js";
import { useActionProductList } from "../components/ProductList/action";
import { useActionCart } from "../components/Cart/action";
import { useActionFilterProduct } from "../components/Filter/action";
export const useAction = defineStore("product.action", () => {
  // const state = useState();
  return {
    ...useActionProductList(),
    ...useActionNavBar(),
    ...useActionCart(),
    ...useActionFilterProduct(),
  };
});
