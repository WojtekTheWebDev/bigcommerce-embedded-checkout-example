<template>
  <div>
    <iframe :src="embeddedCheckoutUrl" width="100%" height="100%" frameborder="0"></iframe>
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

  embeddedCheckoutUrl.value = cart.data.redirect_urls.embedded_checkout_url
});
</script>
