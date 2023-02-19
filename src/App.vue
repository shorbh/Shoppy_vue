<template>
  <router-view></router-view>
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
