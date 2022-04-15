/**
 * Returns an effect that models success with the specified value.
 *
 * @tsplus static ets/Sync/Ops succeedNow
 */
export function succeedNow<A>(a: A): Sync<unknown, never, A> {
  return XPure.succeed(a)
}
