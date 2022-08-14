/**
 * 根据身份证号吗获取出生年月日
 * @param idCard
 * @returns
 */
export function getBirthdayFromIdCard(idCard: string): Date {
  let birthday = "";
  if (idCard != null && idCard != "") {
    if (idCard.length == 15) {
      birthday = "19" + idCard.substr(6, 6);
    } else if (idCard.length == 18) {
      birthday = idCard.substr(6, 8);
    }

    birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
  }

  return new Date(birthday);
}

/**
 * 根据身份证号吗获取性别
 * @param idCard
 * @returns
 */
export function getGenderFromIdCard(idCard: string): number {
  let sexStr: number = undefined;
  if (parseInt(idCard.slice(-2, -1)) % 2 == 1) {
    sexStr = 1; //male
  } else {
    sexStr = 0; //female
  }
  return sexStr;
}
