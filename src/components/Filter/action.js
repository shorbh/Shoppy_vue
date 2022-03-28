import { useState } from "../../stores/state.js";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useActionFilterProduct = defineStore(
  "FilterProduct.action",
  () => {
    let resetFilterProducts = () => {
      const state = useState();
      state.filterProducts = state.productInfo;
    };

    let searchProduct = (filters) => {
      const state = useState();
      let filterProducts = ref([]);

      if (filters["category"]) {
        filterProducts.value = state.productInfo.filter(
          (product) => product.category === filters.category
        );
      }
      if (filters["minprice"]) {
        filterProducts.value = (
          filterProducts.value[0] ? filterProducts.value : state.productInfo
        ).filter((product) => product.price >= parseInt(filters.minprice, 10));
      }
      if (filters["maxprice"]) {
        filterProducts.value = (
          filterProducts.value[0] ? filterProducts.value : state.productInfo
        ).filter((product) => product.price <= parseInt(filters.maxprice, 10));
      }
      if (filters["search"]) {
        filterProducts.value = (
          filterProducts.value[0] ? filterProducts.value : state.productInfo
        ).filter(
          (product) =>
            product.category.includes(filters.search) ||
            product.title.includes(filters.search)
        );
      }
      if (
        filters["search"] ||
        filters["category"] ||
        filters["minprice"] ||
        filters["maxprice"]
      ) {
        state.filterProducts = filterProducts.value;
      }
    };

    return {
      resetFilterProducts,
      searchProduct,
    };
  }
);
