<script setup lang="ts">
defineOptions({
  name: 'DefaultLayout',
  inheritAttrs: false,
})
</script>

<template>
  <UContainer as="main">
    <slot />
  </UContainer>
</template>
