<template>
  <div class="home">
    <Checkout :url="embeddedCheckoutUrl" />
  </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig();

  const { data: cart } = useFetch<any>(
    `${config.public.baseURL}/.netlify/functions/createCart`
  );
  const embeddedCheckoutUrl = computed(() => cart.value?.data.redirect_urls.embedded_checkout_url);
</script>

<style scoped>
.home {
  height: 100%;
}
</style>
