import { Sync } from "@effect-ts/core-next/io-light/Sync"

import { NamePart, Person } from "./Person"

const p = new Person({
  firstName: NamePart("First"),
  lastName: NamePart("Last"),
})
const p2: Person = {
  firstName: NamePart("First 2"),
  lastName: NamePart("Last 2"),
}
const p3 = p2.rename(NamePart("First 3"), NamePart("Last 3"))

// say hello to each once
;(p.sayHello() > p2.sayHello() > p3.sayHello()).run()

// say hello to each, repeat 3 times
const program = p.sayHello() > p2.sayHello() > p3.sayHello()
Sync.collectAll([program, program, program]).run()
