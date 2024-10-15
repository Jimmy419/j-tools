/**
 * currency formatter
 * @param num
 * @param symbo
 * @returns
 */
export const currencyFormater = (num: number, symbo: string): string => {
  let str = num.toString();
  let newStr = "";
  let count = 0;

  if (str.indexOf(".") == -1) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newStr = str.charAt(i) + "," + newStr;
      } else {
        newStr = str.charAt(i) + newStr;
      }
      count++;
    }
    str = newStr + ".00"; //自动补小数点后两位
  } else {
    for (let i = str.indexOf(".") - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newStr = str.charAt(i) + "," + newStr;
      } else {
        newStr = str.charAt(i) + newStr; //逐个字符相接起来
      }
      count++;
    }
    str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
  }

  return `${symbo} ${str}`;
};

/**
 * date formater
 * @param dateIpt
 * @param fmt
 * @returns
 */
export const dateFormater = (dateIpt: string | Date, fmt: string): string => {
  let ret;
  const date = new Date(
    typeof dateIpt === "string" ? dateIpt.replace(/-/g, "/") : dateIpt
  );
  const opt: { [key: string]: string } = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (const k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }

  return fmt;
};

/**
 * mobile securicy formatter
 * @param name
 * @returns
 */
export const mobileFormater = (name: string): string | null => {
  if (name) {
    return name.substring(0, 3) + "****" + name.substring(7, name.length);
  }
  return null;
};

/**
 * name security formatter
 * @param name
 * @returns
 */
export const nameFormater = (name: string): string | null => {
  if (name) {
    return name.substring(0, 1) + "*" + name.substring(2, name.length);
  }
  return null;
};

/**
 * Adds a space after every four characters in the given string.
 *
 * @param str - The input string to format.
 * @returns The formatted string with spaces added after every four characters.
 *
 * @remarks
 * - If the string length is less than or equal to 4, the original string is returned.
 * - Spaces are added using the `reduce` method to traverse the string.
 * - A space is added after every four characters, except for the last group of characters.
 *
 * @example
 * ```typescript
 * addSpacesAfterEveryFourChars("1234567890"); // "1234 5678 90"
 * addSpacesAfterEveryFourChars("abcd"); // "abcd"
 * addSpacesAfterEveryFourChars("abc"); // "abc"
 * ```
 */
export const addSpacesAfterEveryFourChars = (str: string): string => {
  // 如果字符串长度小于4，则无需添加空格，直接返回原字符串
  if (str.length <= 4) {
    return str;
  }

  // 使用reduce方法遍历字符串，并添加空格
  // 使用数组索引作为第二个参数，以跟踪当前位置
  return str
    .split("")
    .reduce((acc: string[], char: string, index) => {
      // 在每四个字符后（不包括最后一个分组）添加一个空格
      if ((index + 1) % 4 === 0 && index !== str.length - 1) {
        acc.push(char, " ");
      } else {
        acc.push(char);
      }
      // 返回累加器数组
      return acc;
      // 将累加器数组转换回字符串
    }, [])
    .join("");
};
