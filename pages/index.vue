<template>
  <div class="home">
    <Checkout :url="embeddedCheckoutUrl" />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const cartRes = await fetch(
  `${config.public.baseURL}/.netlify/functions/createCart`
);
const cart = await cartRes.json();

const embeddedCheckoutUrl = cart.data.redirect_urls.embedded_checkout_url;
</script>

<style scoped>
.home {
  height: 100%;
}
</style>
