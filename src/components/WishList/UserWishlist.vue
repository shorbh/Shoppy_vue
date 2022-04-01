<template>
  <div
    v-if="productStore.favProducts.length"
    class="w-5/6 md:w-3/4 my-0 mx-auto overflow-y-auto h-auto"
  >
    <h3>My Wishlist</h3>

    <div
      v-for="(product, index) in productStore.favProducts"
      class="flex justify-around items-center w-full md:w-3/4 h-48 shadow-md p-2.5 m-2.5 mx-auto"
      :key="index"
    >
      <!-- <div class="flex justify-center items-center h-full"> -->
        <img :src="product.image" class="h-full w-1/4 md:w-1/6 mr-1" alt="product" />
        <div class="flex flex-col w-2/4">
          <h3 class="truncate w-6/7">{{ product.title }}</h3>
          <div class="flex">
            <p
              class="m-1"
              :style="{
                width: '25px',
                height: '20px',
                backgroundColor: '#388e3c',
                color: 'white',
              }"
            >
              {{ product.rating.rate }}
            </p>
            <p class="m-1">({{ product.rating.count }})</p>
          </div>
          <h3 class="m-1">₹{{ product.price }}</h3>
        </div>
      <!-- </div> -->
      <img
        src="https://img.icons8.com/small/16/000000/filled-trash.png"
        height="20px"
        alt="delete"
        @click="(e) => productStore.remToFav(product)"
        class="cursor-pointer"
      />
    </div>
  </div>
  <div v-else class="flex justify-center items-center h-5/6">
    <img
      src="https://img.icons8.com/ios/100/000000/wish-list.png"
      alt="No Wishlist yet"
    />
  </div>
</template>

<script>
import { store } from "../../stores/store";
export default {
  setup() {
    const productStore = store();
    return {
      productStore,
    };
  },
};
</script>

<style></style>
