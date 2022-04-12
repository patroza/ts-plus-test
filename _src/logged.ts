export const numbers = Effect(0) + Effect(1) + Effect(2)
export const numbersPar = Effect(0) & Effect(1) & Effect(2)

export const isPositive = (n: number) =>
  n > 0 ? Either("positive") : Either.left("negative")

export const isPositiveEff = (n: number) =>
  n > 0 ? Effect("positive") : Effect.fail("negative")

export const switched = (n: number) => {
  switch (n) {
    case 0:
      return Effect(0 as const)
    case 1:
      return Effect.fail(1 as const)
    case 2:
      return Effect(2 as const)
    case 3:
      return Effect.fail(3 as const)
    case 4:
      return Effect.environmentWithEffect((r: { bar: string }) => Effect.die(r.bar))
    default:
      return Effect.environmentWithEffect((r: { foo: string }) => Effect.die(r.foo))
  }
}

export const message = isPositive(10)
export const messageLeft = message.left.value

if (message.isLeft()) {
  console.log(message.left)
}

export const program = (numbers + numbersPar).flatMap(
  ({ tuple: [a, b, c, d, e, f] }) =>
    Effect.log(`yay: ${a}`) >
    Effect.logInfo(`ok: ${b}`) >
    Effect.logWarning(`maybe: ${c}`) >
    Effect.log(`yay: ${d}`) >
    Effect.logInfo(`ok: ${e}`) >
    Effect.logWarning(`maybe: ${f}`)
)

export const executeOrDie = Effect.fail("error") | program

program.apply(LogLevel(LogLevel.Error)).unsafeRunPromise()

export const x4 = Chunk(0, 1, 2).mapK(Effect.Applicative)((n) =>
  n > 0 ? Effect.fail("error") : Effect.succeed(`${n + 1}`)
)

export const x5 = Chunk(Effect(0), Effect(1))
  .sequenceK(Effect.Applicative)
  .map((chunk) => chunk[0])
  .map((opt) => opt.value)

x5.unsafeRunPromise()

export const useHashMap =
  HashMap(["foo", "map-foo"], ["bar", "map-bar"]) +
  HashMap(["baz", "map-baz"], ["tap", "map-tap"])

export const accessHashMap = useHashMap["tap"].value
console.log("mi hashimapp", accessHashMap)

//Effect.logWarning(`maybe: ${c}`) >=
//Effect.logWarning(`maybe: ${c}`) >=
