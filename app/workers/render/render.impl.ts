import { consola } from 'consola'

const logger = consola.withTag('RenderWorker')

// declare const self: DedicatedWorkerGlobalScope // globalThis

export class RenderWorkerImpl {
  init() {
    logger.log('init')
  }
}
