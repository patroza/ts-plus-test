/**
 * @tsplus type Model
 * @tsplus companion ModelOps
 */
export interface Model<A> {
  something: A
}

/**
 * @tsplus type ModelCls
 * @tsplus companion ModelClsOps
 */
export abstract class ModelCls {
  static something: number
}

export function makeModel<A>(a: A): ModelCls & Model<A> & { new (): any } {
  return class {
    static something: A
    static a = a
  }
}

/**
 * @tsplus fluent Model doSomething
 * @tsplus static Model doSomething3
 * @tsplus static ModelOps doSomething4
 * @tsplus static ModelClsOps doSomething2
 */
export function doSomethingWithModel<A>(a: Model<A>, b: string) {
  console.log(a, b)
}

/**
 * @tsplus getter Model doSomethingElse
 * @tsplus static Model doSomethingElse3
 * @tsplus static ModelOps doSomethingElse4
 * @tsplus static ModelClsOps doSomethingElse2
 */
export function doSomethingElseWithModel<A>(a: Model<A>) {
  return (b: string) => doSomethingWithModel(a, b)
}
