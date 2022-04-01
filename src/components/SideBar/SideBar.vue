<template>
  <teleport to="body">
    <div v-if="productStore.openSideBar" class="w-screen h-screen z-50 bg-grey fixed top-0">
      <div
        class="z-50 fixed transition duration-700 ease-in top-0 p-5 flex flex-col h-screen w-screen max-w-sm bg-purple-600 text-white"
      >
        <p
          class="font-bold text-7xl mb-4 cursor-pointer"
          @click="() => beforeRoute('/')"
        >
          eshop
        </p>
        <hr />
        <div
          class="flex items-center p-2 cursor-pointer my-1 hover:bg-purple-500"
          @click="() => beforeRoute('/wishlist')"
        >
          <img class="w-1/6 h-10 mr-1" src="../../assets/wishlist.png" />
          <p class="font-bold text-2xl">Wishlist</p>
        </div>
        <div
          class="flex items-center p-2 my-1 cursor-pointer hover:bg-purple-500"
          @click="() => beforeRoute('/cart')"
        >
          <img class="w-1/6 h-10 mr-1" src="../../assets/cart.png" />
          <p class="font-bold text-2xl">Cart</p>
        </div>
        <img
          src="../../assets/icon-close.png"
          class="absolute top-2 right-2 cursor-pointer"
          @click="productStore.toggleSideBar()"
        />
        <FilterProducts />
      </div>
    </div>
  </teleport>
</template>

<script>
import { store } from "../../stores/store";
import { useRouter } from "vue-router";
import FilterProducts from "../Filter/FilterProducts.vue";
import { watchEffect } from 'vue'
export default {
  components: { FilterProducts },
  setup() {
    const productStore = store();
    const router = useRouter();
    function beforeRoute(path) {
      productStore.toggleSideBar();
      router.push(path);
    }
    watchEffect(async () => {
      if(productStore.windowWidth >645 && productStore.openSideBar){
        productStore.toggleSideBar();
      }
    })
    return {
      productStore,
      beforeRoute,
    };
  },
};
</script>

<style></style>
