<template>
  <div class="checkout">
    <iframe :src="url" width="100%" height="100%" frameborder="0"></iframe>
  </div>
</template>

<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.checkout {
  height: 100%;
}
</style>
