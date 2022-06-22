<template>
  <template v-if="productStore.productInfo.length">
    <router-view></router-view>
  </template>
  <template v-else>
    <div class="h-screen w-screen flex justify-center items-center text-3xl">
      Loading...
    </div>
  </template>
</template>

<script>
import { store } from "./stores/store";
import { onMounted } from "vue";
export default {
  name: "App",
  setup() {
    const productStore = store();
    onMounted(() => {
      let timeoutId;
      window.addEventListener(
        "resize",
        () => {
          clearTimeout(timeoutId)
          timeoutId = setTimeout(() => {
            productStore.windowWidth = window.innerWidth
          }, 200)
        }
      );

    });
    productStore.getProducts();

    return {
      productStore,
    }
  },
};
</script>
