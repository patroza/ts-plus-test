import type { Observable } from "rxjs"
import { map, mergeMap, of as of_, tap, toArray } from "rxjs"

/**
 * @tsplus fluent rxjs/Observable map
 */
export function map_<T, R>(
  obs: Observable<T>,
  project: (value: T, index: number) => R
) {
  return obs.pipe(map(project))
}

/**
 * @tsplus fluent rxjs/Observable mergeMap
 */
export function mergeMap_<T, R>(
  obs: Observable<T>,
  project: (value: T, index: number) => Observable<R>
) {
  return obs.pipe(mergeMap(project))
}

/**
 * TODO: overloads
 * @tsplus fluent rxjs/Observable tap
 */
export function tap_<T>(obs: Observable<T>, project: (value: T) => Observable<void>) {
  return obs.pipe(tap(project))
}

/**
 * @tsplus getter rxjs/Observable toArray
 */
export function toArray_<T>(obs: Observable<T>) {
  return obs.pipe(toArray())
}

/**
 * @tsplus static rxjs/Observable/Ops __call
 */
export const of = of_
