
import * as Logger from "@effect/io/Logger"

import * as Level from "@effect/io/Logger/Level"

const program = pipe(
  [1, 2, 3, 4, 5],
  Effect.forEachPar((n) => (n % 3 === 0 ? Effect.die("boom") : Effect.succeed(n + 1)))
)
  .flatMap((chunk) => Effect.sync(() => console.log(Array.from(chunk))))
  .tapErrorCause((_) => Effect.logErrorCauseMessage("abc", _))
  .provideLayer(Logger.minimumLogLevel(Level.Debug))

program.unsafeFork
