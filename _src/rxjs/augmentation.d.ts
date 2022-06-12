import "rxjs"

declare module "rxjs" {

  /**
   * @tsplus type rxjs/Observable
   * @tsplus companion rxjs/Observable/Ops
   */
  export class Observable<T> { }
}
