import { expose } from 'comlink'
import { RenderWorkerImpl } from '~/workers/render/render.impl'

expose(RenderWorkerImpl)
