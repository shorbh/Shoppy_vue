<template>
  <div
    class="flex flex-row sm:flex-row flex-wrap justify-center sm:justify-evenly m-3"
  >
    <template v-if="products.length">
      <template v-for="product in products" :key="product.id">
        <router-link :to="`/product/${product.id}`" class="w-80 md:w-1/3">
          <div
            class="p-2.5 m-1 shadow bg-gray-50 relative flex flex-col justify-center items-center"
            :key="product.id"
          >
            <img
              alt="wishlist"
              class="absolute top-0.5 right-0.5"
              :src="
                productStore.favProducts.some((prod) => prod.id === product.id)
                  ? 'https://img.icons8.com/color/30/000000/like--v3.png'
                  : 'https://img.icons8.com/ios/30/000000/like--v2.png'
              "
              @click="(e) => addFav(e, product)"
            />
            <img
              alt="cart"
              class="absolute top-10 right-0.5"
              :src="
                productStore.cartProducts.some((prod) => prod.id === product.id)
                  ? 'https://img.icons8.com/external-those-icons-lineal-those-icons/30/000000/external-cart-shopping-actions-those-icons-lineal-those-icons-8.png'
                  : 'https://img.icons8.com/material-rounded/30/000000/add-shopping-cart.png'
              "
              @click="(e) => toggleCart(e, product)"
            />
            <img
              alt="Not found"
              :src="product.image"
              class="bg-no-repeat h-72 sm:h-64 md:h-48"
            />
            <h3 class="w-full truncate my-1 text-center">
              {{ product.title }}
            </h3>
            <div class="flex justify-center items-center">
              <p class="px-1 bg-green-800 text-white">
                {{ product.rating.rate }}
              </p>
              ({{ product.rating.count }})
            </div>
            <h3 class="text-center">₹{{ product.price }}</h3>
          </div>
        </router-link>
      </template>
      <div
        :class="!productStore.position && 'flex-row-reverse'"
        class="w-3/4 flex justify-between items-center h-8 my-1"
      >
        <button
          v-if="productStore.position"
          class="py-1 px-2.5 mr-1 h-8 bg-purple-600 text-white rounded md:rounded-md lg:rounded-lg cursor-pointer m-1"
          @click="productStore.loadPrevCards()"
        >
          Prev
        </button>
        <button
          v-if="productStore.filterProducts[productStore.position + 6]"
          class="py-1 px-2.5 ml-1 h-8 bg-purple-600 text-white rounded md:rounded-md lg:rounded-lg cursor-pointer m-1"
          @click="productStore.loadNextCards()"
        >
          Next
        </button>
      </div>
    </template>
    <template
      v-else-if="
        !productStore.filterProducts.length && productStore.productInfo.length
      "
    >
      <div class="flex flex-col justify-center items-center h-96">
        <img src="../../assets/nothing-found.png" />
        <p class="text-2xl">Try different search</p>
      </div>
    </template>
    <template v-else
      ><p class="flex flex-col justify-center items-center h-96">
        Loading...
      </p></template
    >
  </div>
  <!-- <div>hello</div> -->
</template>

<script>
import { ref, watchEffect } from "vue";
import { store } from "../../stores/store";
export default {
  setup() {
    const productStore = store();
    let products = ref([]);
    // products.value = [
    //   ...productStore.productInfo.slice(
    //     productStore.position,
    //     productStore.position + 6
    //   ),
    // ];
    watchEffect(async () => {
      products.value = [
        ...productStore.filterProducts.slice(
          productStore.position,
          productStore.position + 6
        ),
      ];
    });

    let addFav = (e, product) => {
      e.stopPropagation();
      e.preventDefault();
      if (productStore.favProducts.some((pro) => product.id === pro.id)) {
        productStore.remToFav(product);
      } else {
        console.log("addfav");
        productStore.addToFav(product);
      }
    };

    let toggleCart = (e, product) => {
      e.stopPropagation();
      e.preventDefault();
      if (productStore.cartProducts.some((pro) => product.id === pro.id)) {
        productStore.remToCart(product);
      } else {
        productStore.addToCart(product);
      }
    };

    console.log(productStore);
    return {
      productStore,
      products,
      addFav,
      toggleCart,
    };
  },
};
</script>
