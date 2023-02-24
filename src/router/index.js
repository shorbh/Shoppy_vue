import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import WishlistPage from "../views/WishlistPage.vue";
import CartPage from "../views/CartPage.vue";
import ProductPage from "../views/ProductPage.vue";
import SignUp from '../views/SignUp.vue'
import Signin from '../views/Signin.vue'
import { getCurrentUser } from 'vuefire'
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: WishlistPage,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/product/:productId",
    name: "Product",
    component: ProductPage,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignUp,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/login",
    name: "Signin",
    component: Signin,
    meta: {
      requireAuth: true
    }
  },
];

async function requireAuth(to, from, next) {
  const user = await getCurrentUser();
  if (user && (to.name==='Signup' || to.name==='Signin'))
  {
    next({ name: 'HomePage'})
  }
  else if(user || (!user && (to.name==='Signup' || to.name==='Signin')))
  {
    next();
  }
  else {
    // User is not logged in, redirect to sign-in page
    next({ name: 'Signin' });
  }
}

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth)
  {
    requireAuth(to, from, next)
  } else {
    next()
  }
})