import { defineStore } from "pinia";
import { useState } from "./state";
import { useAction } from "./action";
import { storeToRefs } from "pinia";
export const store = defineStore("productStore", () => {
  return {
    ...storeToRefs(useState()),
    ...useAction(),
  };
});
