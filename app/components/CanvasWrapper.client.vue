<script setup lang="ts">
import type { RenderWorkerImpl } from '~/workers/render/render.impl'
import { transfer } from 'comlink'
import RenderWorker from '~/workers/render/render.worker?worker'

const renderWorker = await useWorker<typeof RenderWorkerImpl>(RenderWorker)
const canvasRef = useTemplateRef('canvasRef')

watch(
  canvasRef,
  async (value) => {
    if (value) {
      const offscreen = value.transferControlToOffscreen()

      await renderWorker.init(transfer(offscreen, [offscreen]))
    }
  },
  { once: true },
)
</script>

<template>
  <canvas
    ref="canvasRef"
    width="800"
    height="450"
    class="rounded aspect-video w-[800px] h-[450px]"
  />
</template>
