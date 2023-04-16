<template>
  <div>
    <div id="checkout"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { embedCheckout } from "@bigcommerce/checkout-sdk";

const cartRes = await fetch(
  `${process.env.BASE_URL}/.netlify/functions/createCart`
);
const cart = await cartRes.json();

console.log(cart)

// const embeddedCheckoutUrl = cart.data.redirect_urls.embedded_checkout_url;

// onMounted(async () => {
//   await embedCheckout({
//     containerId: "checkout",
//     url: embeddedCheckoutUrl,
//     onComplete: async () => {
//       console.log("Checkout completed");
//     },
//     onError: async () => {
//       console.log("Checkout failed.");
//     },
//     onFrameError: () => {
//       console.log("Issue with checkout frame.");
//     },
//     onSignOut: async () => {
//       console.log("User signed out.");
//     },
//   });
// });
</script>
