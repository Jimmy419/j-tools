import { getBirthdayFromIdCard, getGenderFromIdCard } from "./idNoAnalyzeZh";

describe("get birthday from Chinese id number", () => {
  it("'342222198908181211' should return '1989-08-18'", () => {
    expect(getBirthdayFromIdCard("342222198908181211")).toEqual(
      new Date("1989-08-18")
    );
  });
});

describe("get gender from Chinese id number", () => {
  it("'342222198908181217' should return 1", () => {
    expect(getGenderFromIdCard("342222198908181217")).toEqual(1);
  });
});
