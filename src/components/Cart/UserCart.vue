<template>
  <div
    v-if="productStore.cartProducts.length"
    class="flex flex-col overflow-y-scroll justify-center items-center"
  >
    <div class="w-4/5 mr-2.5">
      <div
        v-for="(product, index) in productStore.cartProducts"
        class="flex justify-center items-center h-1/5 shadow-md p-2.5 mb-2.5"
        :key="index"
      >
        <div class="flex justify-evenly h-full">
          <img :src="product.image" class="h-6/7 w-1/3 mr-1" alt="product" />
          <div class="flex flex-col">
            <h3>{{ product.title }}</h3>
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
            <div class="flex justify-between">
              <h3 class="m-1">₹{{ product.price }}</h3>
              <div class="flex">
                <button
                  :disabled="product.count <= 1"
                  @click="() => productStore.decCountToCart(index)"
                >
                  -
                </button>
                <input
                  type="text"
                  class="outline-none mx-2 w-10 h-8 text-center"
                  :value="product.count ? product.count : 1"
                  readOnly
                />
                <button
                  :disabled="product.count >= 5"
                  @click="() => productStore.incCountToCart(index)"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://img.icons8.com/small/16/000000/filled-trash.png"
          height="20px"
          alt="delete"
          @click="(e) => productStore.remToCart(product)"
          class="cursor-pointer"
        />
      </div>
    </div>
    <div class="w-4/5 border-2 p-2.5 shadow-md">
      <p class="my-1">Price Details</p>
      <div class="flex my-1 justify-between">
        <p>Price({{ productStore.cartProducts.length }} items)</p>
        <p>₹{{ totalPrice }}</p>
      </div>
      <hr class="border border-gray-300" />
      <div class="flex my-1 justify-between">
        <p>Total</p>
        <p>₹{{ totalPrice }}</p>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center h-5/6">
    <img
      src="https://img.icons8.com/ios/200/000000/empty-box.png"
      alt="empty cart"
      class="h-40"
    />
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import { store } from "../../stores/store";
export default {
  setup() {
    const productStore = store();
    let totalPrice = ref(0);
    watchEffect(async () => {
      totalPrice.value = productStore.cartProducts
        ?.reduce(
          (prevVal, curVal) =>
            prevVal + (curVal.count ? curVal.count : 1) * curVal.price,
          0
        )
        .toFixed(2);
    });
    console.log(productStore.cartProducts.length);
    return {
      productStore,
      totalPrice,
    };
  },
};
</script>

<style></style>
