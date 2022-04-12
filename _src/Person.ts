import { String50 } from "./types/String50"

export type NamePart = String50 // TODO
export const NamePart = String50

export interface Schema<Encoded, Parsed> {
  Encoded: Encoded
  Parsed: Parsed
}

export const Schema: Schema<Person, Person> = {} as any

/** @tsplus type Person */
export class Person {
  public readonly firstName!: NamePart
  public readonly lastName!: NamePart
  public static Schema = Schema
  constructor(vars: Person) {
    Object.assign(this, vars)
  }
}

/**
 * Copy
 * @tsplus fluent Person cp
 */
export function copy(self: Person, changes: Partial<Person>) {
  return new Person({ ...self, ...changes })
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
  return self.cp({ firstName, lastName })
}
