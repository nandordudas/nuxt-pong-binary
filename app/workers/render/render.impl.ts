import { consola } from 'consola'

const logger = consola.withTag('RenderWorker')

// declare const self: DedicatedWorkerGlobalScope // globalThis

export class RenderWorkerImpl {
  #offscreen: OffscreenCanvas | null = null
  #ctx: OffscreenCanvasRenderingContext2D | null = null

  constructor() {
    logger.info('Worker initialized')
  }

  init(offscreen: OffscreenCanvas): void {
    this.#offscreen = offscreen
    this.#ctx = this.#offscreen.getContext('2d', { alpha: false })

    this.#ctx?.clearRect(0, 0, this.#offscreen.width, this.#offscreen.height)
  }
}
