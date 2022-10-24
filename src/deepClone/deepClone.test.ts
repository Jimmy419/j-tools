import { deepClone } from "./deepClone";

test("deep clone function", () => {
  const sampleObj = {
    a: 1,
    b: "string",
    c: [1, 3],
    d: {
      a: 1,
      b: "string",
      c: [1, 3],
      f: null,
      g: undefined,
    },
    e: null,
    f: undefined,
  };
  expect(deepClone(sampleObj)).toStrictEqual({
    a: 1,
    b: "string",
    c: [1, 3],
    d: {
      a: 1,
      b: "string",
      c: [1, 3],
      f: null,
      g: undefined,
    },
    e: null,
    f: undefined,
  });
});

// describe("minus function", () => {
//   it("2 - 1 = 1", () => {
//     expect(accMinus(2, 1)).toEqual(1);
//   });
// });
