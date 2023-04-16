<template>
  <div>
    <div id="checkout"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const config = useRuntimeConfig();

onMounted(async () => {
  const cartRes = await fetch(
    `${config.public.baseURL}/.netlify/functions/createCart`
  );
  const cart = await cartRes.json();

  console.log(cart);
});
</script>
