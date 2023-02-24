<template>
  <div class="z-10 sticky top-0 bg-purple-600 h-12 p-2.5 flex">
    <img
      v-if="productStore.windowWidth <= 643"
      src="../../assets/menu.png"
      class="cursor-pointer active:text-purple-500"
      @click="productStore.toggleSideBar()"
    />
    <router-link to="/"
      ><p class="mr-1 text-2xl" v-if="productStore.windowWidth > 643">eshop</p></router-link
    >
    <div class="flex flex-grow">
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
    </div>
    <router-link class="mr-3" to="/wishlist" v-if="productStore.windowWidth > 643"
      ><img
        src="../../assets/wishlist.png"
        class=""
    /></router-link>
    <router-link class="mr-3" to="/cart" v-if="productStore.windowWidth > 643"
      ><img
        src="../../assets/cart.png"
        class=""
    /></router-link>
    <button class="border px-2 rounded-md active:bg-white" @click="handleLogout">Log out</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { store } from "../../stores/store";
import { useRouter } from 'vue-router';
import { signOut, getAuth } from "firebase/auth";
export default {
  setup() {
    const productStore = store();
    const router = useRouter();
    let search = ref("");

    let onSearch = (e) => {
      e.preventDefault();
      if (search.value) productStore.searchProduct({ search: search.value });
      else productStore.resetFilterProducts();
      router.push("/");
    };

    let handleLogout = async () => {
      const auth = getAuth();
      try {
        await signOut(auth)
        router.push('/login')
      } catch(error)
      {
        console.log(error)
      }
    }

    return {
      productStore,
      search,
      onSearch,
      handleLogout
    };
  },
};
</script>
