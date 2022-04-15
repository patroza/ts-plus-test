/**
 * Accesses the environment of the effect.
 *
 * @tsplus static ets/XPure/Ops environmentWith
 */
export function environmentWith<R, A, S>(
  f: (env: Env<R>) => A,
  __tsplusTrace?: string
): XPure<never, S, S, R, never, A> {
  return XPure.environmentWithXPure((r: Env<R>) => f(r))
}
