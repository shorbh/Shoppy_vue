import { defineStore } from "pinia";
import { reactive } from "vue";
import { ref, toRefs } from "vue";

export const useState = defineStore("product.state", () => {
  const isLoad = ref(false);
  const position = ref(0);
  const openSideBar = ref(false);
  const windowWidth = ref(window.innerWidth);

  let products = reactive({
    productInfo: [],
    filterProducts: [],
    cartProducts: [],
    favProducts: [],
  });
  return {
    ...toRefs(products),
    isLoad,
    position,
    openSideBar,
    windowWidth,
  };
});
