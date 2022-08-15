import { mobileValidator, emailValidator, idNoZhValidator } from "./validator";

describe("mobile validator", () => {
  it("'13817111111' should return true", () => {
    expect(mobileValidator("13817111111")).toEqual(true);
  });
});

describe("email validator", () => {
  it("'suifeng419@11.com' should return true", () => {
    expect(emailValidator("suifeng419@11.com")).toEqual(true);
  });
});

describe("Chinese id card number validator", () => {
  it("'322322198908181117' should return true", () => {
    expect(idNoZhValidator("322322198908181117")).toEqual(true);
  });
});
