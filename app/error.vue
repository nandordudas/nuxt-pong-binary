<script lang="ts">
import type { NuxtError } from '#app'

interface Props {
  error: NuxtError
}
</script>

<script setup lang="ts">
defineProps<Props>()
</script>

<template>
  <UApp>
    <UError :error />
  </UApp>
</template>
