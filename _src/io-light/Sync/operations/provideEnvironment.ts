/**
 * Provides the effect with its required environment, which eliminates its
 * dependency on `R`.
 *
 * @tsplus fluent ets/Sync provideEnvironment
 */
export function provideEnvironment_<R, E, A>(
  _self: Sync<R, E, A>,
  environment: LazyArg<Env<R>>,
  __tsplusTrace?: string
): Sync.IO<E, A> {
  return Sync.succeed(environment).flatMap(
    (_env) => null as any // TODO
    //(self as Sync.IO<E, A>).apply(FiberRef.currentEnvironment.value.locally(env))
  )
}

/**
 * Provides the effect with its required environment, which eliminates its
 * dependency on `R`.
 *
 * @tsplus static ets/Sync/Aspects provideEnvironment
 */
export const provideEnvironment = Pipeable(provideEnvironment_)
