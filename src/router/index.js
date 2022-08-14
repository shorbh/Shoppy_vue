import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import WishlistPage from "../views/WishlistPage.vue";
import CartPage from "../views/CartPage.vue";
import ProductPage from "../views/ProductPage.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: WishlistPage,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage,
  },
  {
    path: "/product/:productId",
    name: "Product",
    component: ProductPage,
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
