/**
 * currency formatter
 * @param num
 * @param symbo
 * @returns
 */
export const currencyFormater = (num: number, symbo: string): string => {
  str = num.toString();
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
