<template>
  <div class="h-screen">
    <NavBar />
    <UserProduct />
    <SideBar />
  </div>
</template>

<script>
import UserProduct from "../components/Product/UserProduct.vue";
import NavBar from "../components/NavBar/NavBar.vue";
import SideBar from "../components/SideBar/SideBar.vue";

export default {
  components: { UserProduct, NavBar, SideBar },
  setup() {},
};
</script>
