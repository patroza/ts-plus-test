/**
 * Syncually accesses the environment of the effect.
 *
 * @tsplus static ets/Sync/Ops environmentWithSync
 */
export function environmentWithSync<R, R0, E, A>(
  f: (env: Env<R0>) => Sync<R, E, A>,
  __tsplusTrace?: string
): Sync<R & R0, E, A> {
  return XPure.environmentWithXPure(f) as any // TODO
}
