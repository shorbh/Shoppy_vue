import { useState } from "../../stores/state.js";
import { defineStore } from "pinia";

export const useActionNavBar = defineStore("NavBar.action", () => {
  function toggleSideBar() {
    // console.log("in toggle");
    const state = useState();
    state.openSideBar = !state.openSideBar;
    // console.log(state);
  }
  return {
    toggleSideBar
  };
});
