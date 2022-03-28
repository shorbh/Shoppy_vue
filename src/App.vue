<template>
  <router-view></router-view>
  <!-- <div>hello</div> -->
</template>

<script>
import { store } from "./stores/store";
import { onMounted } from "vue";
export default {
  name: "App",
  setup() {
    const productStore = store();
    onMounted(() => {
      console.log("onlkjdfj");
      window.addEventListener(
        "resize",
        () => (productStore.windowWidth = window.innerWidth)
      );
      productStore.getProducts();
    });
  },
};
</script>
