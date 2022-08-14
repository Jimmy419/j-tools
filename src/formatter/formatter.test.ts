import { dateFormater } from "./formatter";

describe("date formatter", () => {
  it("'2022-07-01' should return 07-01", () => {
    expect(dateFormater(new Date("2022-07-01"), "mm-dd")).toEqual("07-01");
  });
});
