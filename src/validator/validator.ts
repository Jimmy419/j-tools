export const REGEX = {
  idCard:
    /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  mobile: /^1(3|4|5|6|7|8|9)\d{9}/,
  email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
};

/**
 * mobile validator
 * @param name
 * @returns
 */
export const mobileValidator = (mobile: string): boolean => {
  return mobile.trim().length == 11 && mobile.match(REGEX.mobile)
    ? true
    : false;
};

/**
 * email validator
 * @param email
 * @returns
 */
export const emailValidator = (email: string): boolean => {
  return email.match(REGEX.email) ? true : false;
};

/**
 * id card validator
 * @param idCard
 * @returns
 */
export const idNoZhValidator = (idCard: string): boolean => {
  return idCard.match(REGEX.idCard) ? true : false;
};
