/**
 * Provides some of the environment required to run this effect,
 * leaving the remainder `R0`.
 *
 * @tsplus fluent ets/Sync provideSomeEnvironment
 */
export function provideSomeEnvironment_<R0, R, E, A>(
  self: Sync<R, E, A>,
  f: (r0: Env<R0>) => Env<R>,
  __tsplusTrace?: string
): Sync<R0, E, A> {
  return Sync.environmentWithSync((r0: Env<R0>) => self.provideEnvironment(f(r0)))
}

/**
 * Provides some of the environment required to run this effect,
 * leaving the remainder `R0`.
 *
 * @tsplus static ets/Sync/Aspects provideSomeEnvironment
 */
export const provideSomeEnvironment = Pipeable(provideSomeEnvironment_)
