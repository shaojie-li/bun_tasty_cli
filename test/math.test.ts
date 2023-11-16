import { expect, test } from "bun:test";

test("2 + 2", () => {
  expect(2 + 2).toBe(4);
});

test("snapshot", async () => {
  expect({ c: new Date() }).toMatchSnapshot({ c: expect.any(Date) });
}); 