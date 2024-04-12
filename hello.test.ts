import { expect, test, spyOn } from "bun:test"
import { hello } from "./hello";

test("hello", () => {
  const spy = spyOn(console, "log")

  hello("안녕!")

  expect(spy).toHaveBeenCalledTimes(1)
  expect(spy.mock.calls[0]).toEqual(["안녕!"])
});