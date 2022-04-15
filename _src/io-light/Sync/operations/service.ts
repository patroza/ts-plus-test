/**
 * Accesses the specified service in the environment of the effect.
 *
 * Especially useful for creating "accessor" methods on services' companion
 * objects.
 *
 * @tsplus static ets/Sync/Ops service
 */
export function service<T>(
  tag: Tag<T>,
  __tsplusTrace?: string
): Sync<Has<T>, never, T> {
  return Sync.serviceWithSync(tag)(Sync.succeedNow)
}
