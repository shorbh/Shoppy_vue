<template>
  <div class="h-screen">
    <NavBar />
    <UserCart />
    <SideBar />
  </div>
</template>

<script>
import NavBar from "../components/NavBar/NavBar.vue";
import UserCart from "../components/Cart/UserCart.vue";
import SideBar from "../components/SideBar/SideBar.vue";

export default {
  components: { NavBar, UserCart, SideBar },
};
</script>
