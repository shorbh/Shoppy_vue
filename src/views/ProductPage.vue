<template>
  <template v-if="productStore.productInfo.length">
    <div class="h-screen">
      <NavBar />
      <UserProduct />
      <SideBar />
    </div>
  </template>
  <template v-else>
    <Loader />
  </template>
</template>

<script>
import UserProduct from "../components/Product/UserProduct.vue";
import NavBar from "../components/NavBar/NavBar.vue";
import SideBar from "../components/SideBar/SideBar.vue";
import Loader from '../components/Loader/Loader.vue'
import { store } from "../stores/store";

export default {
  components: { UserProduct, NavBar, SideBar, Loader },
  setup() {
    const productStore = store();
    return {
      productStore,
    };
  },
};
</script>
