declare const eff1: Effect<Has<number> & Has<void>, unknown, void>
declare const eff2: Effect<Has<string>, unknown, void>

declare const ei1: Either<string, number>
declare const ei2: Either<number, string>

declare const o1: Option<string>
declare const o2: Option<number>

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const v: number = 1
const abc = Do(($) => {
  const a = $(v ? eff1 : eff2)

  const b = $(o1)

  return a
})
