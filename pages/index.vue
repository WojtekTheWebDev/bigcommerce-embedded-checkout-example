<template>
  <div class="home">
    <Checkout :url="embeddedCheckoutUrl" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const config = useRuntimeConfig();

const embeddedCheckoutUrl = ref("");

onMounted(async () => {
  const cartRes = await fetch(
    `${config.public.baseURL}/.netlify/functions/createCart`
  );
  const cart = await cartRes.json();

  embeddedCheckoutUrl.value = cart.data.redirect_urls.embedded_checkout_url;
});
</script>

<style scoped>
.home {
  height: 100%;
}
</style>
