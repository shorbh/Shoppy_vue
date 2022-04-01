<template>
  <!-- <div class="side-bar vw-20 vh-75"> -->
  <form class="w-full overflow-y-auto">
    <div class="flex justify-between items-center text-2xl my-2">
      <h2>Filters</h2>
      <p class="reset-filter cursor-pointer active:text-purple-500" @click="resetFilters()">Clear All</p>
    </div>
    <dl>
      <dt class="text-2xl my-2">Category</dt>
      <dd
        class="text-xl my-0.5 pl-8"
        v-for="(category, index) in productCategories"
        :key="index"
      >
        <input
          @click="
            (e) => setFilterProduct({ ...filterProduct, category: category })
          "
          type="radio"
          :id="category"
          name="select_category"
          :value="category"
          class="mr-1"
        />
        <label :htmlFor="category">{{ category }}</label>
      </dd>
    </dl>
    <div class="text-2xl my-2">Price</div>
    <div class="flex justify-around flex-col md:flex-row">
      <input
        placeholder="Min"
        name="min-price"
        class="w-1/2 md:1/5 outline-none text-center text-black"
        type="number"
        min="1"
        v-model="filterProduct.minprice"
      />
      <input
        placeholder="Max"
        name="max-price"
        class="w-1/2 md:1/5 outline-none text-center text-black"
        type="number"
        min="1"
        v-model="filterProduct.maxprice"
      />
    </div>
    <div class="flex justify-around">
      <button
        type="submit"
        @click="(e) => filter(e)"
        class="absolute bottom-8 bg-white text-purple-600 border-none rounded-lg h-8 w-40 text-xl"
      >
        Apply
      </button>
      <!-- {/* <button>Clear All </button> */} -->
    </div>
  </form>
  <!-- </div> -->
</template>

<script>
import { reactive, watchEffect, ref } from "vue";
import { store } from "../../stores/store";

export default {
  setup() {
    const productStore = store();
    let products = reactive(new Set());
    productStore.productInfo.forEach((product) =>
      products.add(product.category)
    );
    let productCategories = ref([]);
    watchEffect(async () => {
      productCategories.value = [...products];
    });
    let filterProduct = reactive({
      category: "",
      minprice: "",
      maxprice: "",
    });

    let filter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (
        filterProduct.minprice &&
        filterProduct.maxprice &&
        filterProduct.minprice > filterProduct.maxprice
      ) {
        filterProduct.minprice = "";
        filterProduct.maxprice = "";
        return;
      }
      productStore.searchProduct(filterProduct);
    };

    let resetFilters = () => {
      if (filterProduct.category)
        document.getElementById(filterProduct.category).checked = false;
      Object.assign(filterProduct, {
        category: "",
        minprice: "",
        maxprice: "",
      });
      productStore.resetFilterProducts();
    };

    let setFilterProduct = (filterObj) => {
      Object.assign(filterProduct, filterObj);
    };

    return {
      filterProduct,
      resetFilters,
      filter,
      productCategories,
      setFilterProduct,
    };
  },
};
</script>

<style></style>
