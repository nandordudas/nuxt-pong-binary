<script setup lang="ts">
import type { RenderWorkerImpl } from '~/workers/render/render.impl'
import { wrap } from 'comlink'
import RenderWorker from '~/workers/render/render.worker?worker'

async function useRenderWorker(WorkerType: new (options?: { name?: string }) => Worker) {
  const WorkerClass = wrap<typeof RenderWorkerImpl>(new WorkerType())
  const workerInstance = await new WorkerClass()

  return workerInstance
}

const renderWorker = await useRenderWorker(RenderWorker)

await renderWorker.init()
</script>

<template>
  <div>yeah</div>
</template>
