/**
 * Provides the effect with the single service it requires. If the effect
 * requires more than one service use `provideEnvironment` instead.
 *
 * @tsplus fluent ets/Sync provideServiceSync
 */
export function provideServiceSync_<R, E, A, T>(
  self: Sync<R & Has<T>, E, A>,
  tag: Tag<T>
) {
  return <R1, E1>(
    effect: Sync<R1, E1, T>,
    __tsplusTrace?: string
  ): Sync<R1 & Erase<R, Has<T>>, E | E1, A> =>
    Sync.environmentWithSync((env: Env<R & R1>) =>
      effect.flatMap((service) => self.provideEnvironment(env.add(tag, service)))
    )
}

/**
 * Provides the effect with the single service it requires. If the effect
 * requires more than one service use `provideEnvironment` instead.
 *
 * @tsplus static ets/Sync/Aspects provideServiceSync
 */
export const provideServiceSync = Pipeable(provideServiceSync_)
