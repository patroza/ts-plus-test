// /**
//  * Access the environment monadically.
//  *
//  * @tsplus static ets/XPure/Ops environmentWithXPure
//  */
// export function environmentWithXPure<W, R, S1, S2, R1, E, A>(
//   f: (env: Env<R>) => A,
// ): XPure<W, S1, S2, R1 & R, E, A> {
//   return new Access<W, S1, S2, R1 & R, E, A>();
// }

/**
 * Accesses the environment of the effect.
 *
 * @tsplus static ets/XPure/Ops environmentWithXPure
 */
export function environmentWithXPure<W, R, S1, S2, R1, E, A>(
  _f: (env: Env<R>) => A,
  __tsplusTrace?: string
): XPure<W, S1, S2, R1 & R, E, A> {
  return null as any // TODO
}
