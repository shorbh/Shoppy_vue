<template>
  <div class="z-10 sticky top-0 bg-purple-600 h-12 p-2.5 flex justify-between">
    <img
      v-if="productStore.windowWidth < 450"
      src="../../assets/menu.png"
      class=""
      @click="productStore.toggleSideBar()"
    />
    <router-link to="/"
      ><p v-if="productStore.windowWidth > 450">eshop</p></router-link
    >
    <input
      v-model="search"
      type="text"
      class="w-4/5 sm:w-96 md:w-3/4 outline-none rounded"
    />
    <input
      type="image"
      alt="submit"
      src="https://img.icons8.com/color/28/000000/search--v2.png"
      @click="(e) => onSearch(e)"
    />
    <router-link to="/wishlist"
      ><img
        v-if="productStore.windowWidth > 450"
        src="../../assets/wishlist.png"
        class=""
    /></router-link>
    <router-link to="/cart"
      ><img
        v-if="productStore.windowWidth > 450"
        src="../../assets/cart.png"
        class=""
    /></router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { store } from "../../stores/store";
export default {
  setup() {
    const productStore = store();
    let search = ref("");
    console.log(productStore);
    // let windowWidth = ref(window.innerWidth);
    // window.addEventListener(
    //   "resize",
    //   () => (windowWidth.value = window.innerWidth)
    // );

    let onSearch = (e) => {
      e.preventDefault();
      if (search.value) productStore.searchProduct({ search: search.value });
      else productStore.resetFilterProducts();
    };

    return {
      productStore,
      search,
      onSearch,
    };
  },
};
</script>
