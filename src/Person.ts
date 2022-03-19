import { Sync } from "@effect-ts/core-next/io-light/Sync"
import { String50 } from "./types/String50"

export type NamePart = String50 // TODO


/** @tsplus type Person */
export class Person {
  public readonly firstName!: NamePart
  public readonly lastName!: NamePart
  constructor(vars: Person) {
    Object.assign(this, vars)
  }
}

/**
 * @tsplus fluent Person sayHello
 */
export function sayHello(self: Person) {
  return Sync.succeed(console.log(`Hi ${self.firstName}!`))
}

/**
 * @tsplus fluent Person rename
 */
export function rename(self: Person, firstName: NamePart, lastName: NamePart) {
  return new Person({ ...self, firstName, lastName })
}
