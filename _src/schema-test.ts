import type { Model } from "./schema"
import { makeModel } from "./schema"

/**
 * @tsplus companion ModelOps
 */
export class SomeModel extends makeModel("something") {}

export namespace SuperModel {
  export const bla = 1
}
export interface SuperModel<A> extends Model<A> {
  somethingSuper: number
}

export interface SuperSuperModel<A> extends SuperModel<A> {
  somethingSuperSuper: string
}

declare const a: Model<string>
a.doSomething("hi")

declare const b: SuperSuperModel<string>
b.doSomething("ho")

//SomeModel.do

// SomeModel.doSomething("hu") // error
// SomeModel.doSomethingElse("hu")
//const c = new SomeModel()
