<script setup lang="ts">
definePageMeta({
  layout: 'default',
  name: 'HomePage',
})

defineRouteRules({
  headers: {
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Embedder-Policy': 'require-corp',
  },
})

useHead({
  title: 'Home',
})
</script>

<template>
  <div class="grid place-items-center h-screen">
    <CanvasWrapper />
  </div>
</template>
