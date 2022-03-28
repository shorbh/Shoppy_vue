<template>
  <div class="h-screen">
    <NavBar />
    <UserWishlist />
    <SideBar />
  </div>
</template>

<script>
import NavBar from "../components/NavBar/NavBar.vue";
import SideBar from "../components/SideBar/SideBar.vue";
import UserWishlist from "../components/WishList/UserWishlist.vue";
export default {
  components: { NavBar, UserWishlist, SideBar },
};
</script>
