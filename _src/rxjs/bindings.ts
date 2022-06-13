import { concatWith, Observable, ObservableInputTuple } from "rxjs"
import { map, mergeMap, of as of_, tap, toArray, skip, take, single, zip } from "rxjs"
import { TapObserver } from "rxjs/internal/operators/tap"

/////// Fluent

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
  project: (value: T, index: number) => Observable<R>,
  concurrent?: number
) {
  return obs.pipe(mergeMap(project, concurrent))
}

/**
 * @tsplus fluent rxjs/Observable concatWith
 */
export function concatWith_<T, A extends readonly unknown[]>(
  obs: Observable<T>,
  ...otherSources: [...ObservableInputTuple<A>]
) {
  return obs.pipe(concatWith(...otherSources))
}

/**
 * @tsplus fluent rxjs/Observable tap
 */
export function tap_<T>(obs: Observable<T>, observer?: Partial<TapObserver<T>>) {
  return obs.pipe(tap(observer))
}

/**
 * @tsplus fluent rxjs/Observable tap
 */
export function tapNext_<T>(obs: Observable<T>, next: (value: T) => void) {
  return obs.pipe(tap(next))
}

/**
 * @tsplus getter rxjs/Observable toArray
 */
export function toArray_<T>(obs: Observable<T>) {
  return obs.pipe(toArray())
}

/**
 * @tsplus fluent rxjs/Observable skip
 */
export function skip_<T>(obs: Observable<T>, n: number) {
  return obs.pipe(skip(n))
}

/**
 * @tsplus fluent rxjs/Observable take
 */
export function take_<T>(obs: Observable<T>, n: number) {
  return obs.pipe(take(n))
}

/**
 * @tsplus fluent rxjs/Observable single
 */
export function single_<T>(obs: Observable<T>, pred?: (value: T, index: number, source: Observable<T>) => boolean) {
  return obs.pipe(single(pred))
}


////// Static

/**
 * @tsplus static rxjs/Observable/Ops zip
 */
export function zip_<A extends readonly unknown[]>(sources: [...ObservableInputTuple<A>]): Observable<A> {
  return zip(sources)
}

/**
 * @tsplus static rxjs/Observable/Ops zip
 */
export function zipSelect_<A extends readonly unknown[], R>(
  sources: [...ObservableInputTuple<A>],
  resultSelector: (...values: A) => R
): Observable<R> {
  return zip(sources, resultSelector)
}


/**
 * @tsplus static rxjs/Observable/Ops zip
 */
export function zipSpreadSelector_<A extends readonly unknown[], R>(
  ...sourcesAndResultSelector: [...ObservableInputTuple<A>, (...values: A) => R]
): Observable<R> {
  return zip(...sourcesAndResultSelector)
}


/**
 * @tsplus static rxjs/Observable/Ops zip
 */
export function zipSpread_<A extends readonly unknown[]>(...sources: [...ObservableInputTuple<A>]): Observable<A> {
  return zip(...sources)
}

/**
 * @tsplus static rxjs/Observable/Ops __call
 */
export const of = of_


/////// Operators
// TODO
