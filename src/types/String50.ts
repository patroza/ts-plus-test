/* eslint-disable @typescript-eslint/no-empty-interface */
import { Sync } from "@effect-ts/core-next/io-light/Sync"

declare global {
  /**
   * @tsplus type string
   */
  export interface String {}
}

export interface String50Brand {
  readonly String50: unique symbol
}

export type String50 = string & String50Brand

/**
 * @tsplus type String50
 */
export interface String50Ops {}
export const String50: String50Ops = {}

/**
 * @tsplus static String50 parse
 * @tsplus fluent string parseAsString50
 */
export function parse(self: string) {
  if (self.length > 50) {
    return Sync.fail(new Error("Too long"))
  } else if (self.length === 0) {
    return Sync.fail(new Error("Too short"))
  }
  return Sync.succeed(self as String50)
}

/**
 * @tsplus static String50 __call
 * @tsplus static String50 unsafe
 * @tsplus fluent string unsafeAsString50
 */
export function unsafe(self: string) {
  return parse(self)
    .mapError((err) => {
      throw err
    })
    .run()
}
