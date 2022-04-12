import "./bla"

import { Case } from "@tsplus/stdlib/data/Case"

interface Person extends Case {
  readonly _tag: "Person"
  readonly name: string
  readonly age?: number
}
const Person = Case.tagged<Person>("Person")

const A = Person({ name: "Mike" })
const B = Person({ name: "Foo", age: 30 })
  .copy({ name: "Mike" })
  .copy({ age: undefined })

console.log(A, B)

const C: Person = { ...A, name: "Patrick" }
const D = C.copy({ age: 15 })

console.log(D)

console.log("$$ keys", Object.keys(D))

Object.defineProperty(D, "test", { value: 1, enumerable: false })

console.log(D)
console.log((D as any)["test"])
const E = {
  ...D,
  abc: () => {},
  abcd() {
    return {}
  },
}
console.log(Object.entries(E))
console.log(Object.keys(E))
console.log((E as any)["test"])
console.log(E)
console.log({ ...E })
