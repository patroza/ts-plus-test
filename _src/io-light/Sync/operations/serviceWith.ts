/**
 * Accesses the specified service in the environment of the effect.
 *
 * Especially useful for creating "accessor" methods on services' companion
 * objects.
 *
 * @tsplus static ets/Sync/Ops serviceWith
 */
export function serviceWith<T>(tag: Tag<T>) {
  return <A>(f: (a: T) => A, __tsplusTrace?: string): Sync<Has<T>, never, A> =>
    Sync.serviceWithSync(tag)((a) => Sync.succeedNow(f(a)))
}
