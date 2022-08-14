import { accAdd, accMinus } from "./calculator";

test("adds 1 + 2 to equal 3", () => {
  expect(accAdd(1, 2)).toBe(3);
});

describe("minus function", () => {
  it("2 - 1 = 1", () => {
    expect(accMinus(2, 1)).toEqual(1);
  });
});
