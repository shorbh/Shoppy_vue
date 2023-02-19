<template>
  <template v-if="productStore.productInfo.length">
    <div class="h-screen w-screen">
      <nav-bar />
      <div
        class="flex absolute top-12 bottom-0 w-full"
        v-if="productStore.windowWidth > 643"
      >
        <div class="p-5 flex flex-col bg-purple-600 text-white w-2/5 md:w-1/3 lg:w-1/4">
          <FilterProducts />
        </div>
        <div class="w-3/5 md:w-2/3 lg:w-3/4 overflow-y-auto">
          <product-list />
        </div>
      </div>
      <template v-else>
        <ProductList />
      </template>
      <side-bar />
    </div>
  </template>
  <template v-else>
    <Loader />
  </template>
</template>

<script>
import ProductList from "../components/ProductList/ProductList.vue";
import NavBar from "../components/NavBar/NavBar.vue";
import SideBar from "../components/SideBar/SideBar.vue";
import FilterProducts from "../components/Filter/FilterProducts.vue";
import Loader from '../components/Loader/Loader.vue'
import { store } from "../stores/store";

export default {
  components: { ProductList, NavBar, SideBar, FilterProducts, Loader },
  setup() {
    const productStore = store();
    return {
      productStore,
    };
  },
};
</script>
