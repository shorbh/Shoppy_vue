<template>
  <div class="flex flex-col sm:flex-row my-0 mx-auto items-center w-5/6">
    <div class="flex flex-col items-center sm:mr-4">
      <div
        :key="product.id"
        class="product-image-card flex justify-center items-center h-70 sm:h-72 sm:w-40"
        :class="productStore.windowWidth > 400 ? 'w-40' : 'w-3/4'"
      >
        <img alt="Not found" :src="product.image" />
      </div>
      <template
        v-if="productStore.cartProducts.some((prod) => prod.id === product.id)"
      >
        <router-link to="/cart">
          <button
            class="p-2.5 my-2 w-3/4 rounded-md shadow-lg border-none bg-orange-400 text-white cursor-pointer"
          >
            Go to Cart
          </button>
        </router-link>
      </template>
      <template v-else>
        <button
          class="p-2.5 my-2 w-3/4 rounded-md shadow-lg border-none bg-orange-400 text-white cursor-pointer"
          @click="addProdToCart"
        >
          Add to Cart
        </button>
      </template>
    </div>
    <div class="product-desc">
      <h3 class="my-2 text-xl">{{ product.title }}</h3>
      <div class="flex my-2 text-2xl">
        <p class="text-white bg-green-700 w-10 text-center">
          {{ product.rating.rate }}
        </p>
        ({{ product.rating.count }})
      </div>
      <h3 class="text-2xl">₹{{ product.price }}</h3>
      <p>{{ product.description }}</p>
      <!-- {/* <button className="addToCart">Add to Cart</button> */} -->
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref, watchEffect } from "vue";
import { store } from "../../stores/store";
export default {
  setup() {
    const productStore = store();
    const route = useRoute();
    const router = useRouter();
    let product = ref({});
    watchEffect(async () => {
      product.value = productStore.productInfo.filter(
        (prod) => prod.id === parseInt(route.params.productId)
      )[0];
    });
    let addProdToCart = () => {
      productStore.addToCart(product.value);
      router.push("/cart");
    };
    return {
      productStore,
      addProdToCart,
      product,
    };
  },
};
</script>

<style></style>
