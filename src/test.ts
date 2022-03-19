import { Person } from "./Person"
import "./types/String50"


const p = new Person({ firstName: "First".unsafeAsString50(), lastName: "Last".unsafeAsString50() })
const p2: Person = { firstName: "First 2".unsafeAsString50(), lastName: "Last 2".unsafeAsString50() }
const p3 = p2.rename("First 3".unsafeAsString50(), "Last 3".unsafeAsString50())

const program = p.sayHello() >
  p2.sayHello() >
  p3.sayHello()

program.run()
