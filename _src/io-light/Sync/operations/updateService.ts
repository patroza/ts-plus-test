/**
 * Updates the service with the required service entry.
 *
 * @tsplus fluent ets/Sync updateService
 */
export function updateService_<R, E, A, T>(self: Sync<R, E, A>, tag: Tag<T>) {
  return (f: (_: T) => T, __tsplusTrace?: string): Sync<R & Has<T>, E, A> =>
    self.provideSomeEnvironment((env) => env.add(tag, f(env.get(tag))))
}

/**
 * Updates the service with the required service entry.
 *
 * @tsplus static ets/Sync/Aspects updateService
 */
export function updateService<T>(tag: Tag<T>, f: (_: T) => T, __tsplusTrace?: string) {
  return <R, E, A>(self: Sync<R, E, A>): Sync<R & Has<T>, E, A> =>
    self.updateService(tag)(f)
}
