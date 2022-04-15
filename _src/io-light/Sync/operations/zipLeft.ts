import { concreteXPure } from "@/io-light/Sync/definition";

/**
 * Combines this computation with the specified computation, passing the
 * updated state from this computation to that computation and returning
 * the result of this computation.
 *
 * @tsplus operator ets/Sync <
 * @tsplus fluent ets/Sync zipLeft
 */
export function zipLeft_<R, E, A, R1, E1, B>(
  self: Sync<R, E, A>,
  that: LazyArg<Sync<R1, E1, B>>
): Sync<R & R1, E | E1, A> {
  concreteXPure(self);
  return self.zipLeft(that);
}

/**
 * Combines this computation with the specified computation, passing the
 * updated state from this computation to that computation and returning
 * the result of this computation.
 *
 * @tsplus static ets/Sync/Aspects zipLeft
 */
export const zipLeft = Pipeable(zipLeft_);
