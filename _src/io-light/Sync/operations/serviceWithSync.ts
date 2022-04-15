/**
 * Syncfully accesses the specified service in the environment of the
 * effect.
 *
 * Especially useful for creating "accessor" methods on services' companion
 * objects.
 *
 * @tsplus static ets/Sync/Ops serviceWithSync
 */
export function serviceWithSync<T>(_tag: Tag<T>) {
  return <R, E, A>(_f: (a: T) => Sync<R, E, A>): Sync<R & Has<T>, E, A> => null as any // TODO
  //FiberRef.currentEnvironment.value.get().flatMap((env) => f(env.unsafeGet(tag)))
}
