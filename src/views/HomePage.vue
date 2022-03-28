<template>
  <div class="h-screen">
    <nav-bar />
    <div
      class="flex absolute top-12 bottom-0"
      v-if="productStore.windowWidth > 700"
    >
      <div class="p-5 flex flex-col bg-purple-600 text-white w-1/4">
        <FilterProducts />
      </div>
      <div class="w-3/4">
        <product-list />
      </div>
    </div>
    <template v-else>
      <ProductList />
    </template>
    <side-bar />
  </div>
</template>

<script>
import ProductList from "../components/ProductList/ProductList.vue";
import NavBar from "../components/NavBar/NavBar.vue";
import SideBar from "../components/SideBar/SideBar.vue";
import FilterProducts from "../components/Filter/FilterProducts.vue";
import { store } from "../stores/store";

export default {
  components: { ProductList, NavBar, SideBar, FilterProducts },
  setup() {
    const productStore = store();
    return {
      productStore,
    };
  },
};
</script>
