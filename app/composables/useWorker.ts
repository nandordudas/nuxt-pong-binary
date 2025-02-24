import type { Remote } from 'comlink'
import { wrap } from 'comlink'

export async function useWorker<T extends new (...args: any[]) => any>(
  WorkerConstructor: new (options?: { name?: string }) => Worker,
): Promise<Remote<InstanceType<T>>> {
  const worker = new WorkerConstructor({ name: WorkerConstructor.name })
  const WorkerClass = wrap<T>(worker)

  return await new WorkerClass() as Remote<InstanceType<T>>
}
