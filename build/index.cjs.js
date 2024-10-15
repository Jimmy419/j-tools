'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 加法
 * @param arg1
 * @param arg2
 * @returns
 */
function accAdd(arg1, arg2) {
    var r1, r2;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        console.error(e);
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
        console.error(e);
    }
    var m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}
/**
 * 减法
 * @param arg1
 * @param arg2
 * @returns
 */
function accMinus(arg1, arg2) {
    var r1, r2;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
        console.error(e);
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
        console.error(e);
    }
    var m = Math.pow(10, Math.max(r1, r2));
    var n = r1 >= r2 ? r1 : r2;
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
}
/**
 * 乘法
 * @param number1
 * @param number2
 * @returns
 */
function accMultiply(number1, number2) {
    var baseNum = 0;
    try {
        baseNum += number1.toString().split(".")[1].length;
    }
    catch (e) {
        // console.log(e);
        console.error(e);
    }
    try {
        baseNum += number2.toString().split(".")[1].length;
    }
    catch (e) {
        // console.log(e);
        console.error(e);
    }
    return ((Number(number1.toString().replace(".", "")) *
        Number(number2.toString().replace(".", ""))) /
        Math.pow(10, baseNum));
}
/**
 * 除法
 * @param num1
 * @param num2
 * @returns
 */
function accDivide(num1, num2) {
    var baseNum1 = 0, baseNum2 = 0;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    }
    catch (e) {
        baseNum1 = 0;
        console.error(e);
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    }
    catch (e) {
        baseNum2 = 0;
        console.error(e);
    }
    var baseNum3 = Number(num1.toString().replace(".", ""));
    var baseNum4 = Number(num2.toString().replace(".", ""));
    return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
}

/**
 * currency formatter
 * @param num
 * @param symbo
 * @returns
 */
var currencyFormater = function (num, symbo) {
    var str = num.toString();
    var newStr = "";
    var count = 0;
    if (str.indexOf(".") == -1) {
        for (var i = str.length - 1; i >= 0; i--) {
            if (count % 3 == 0 && count != 0) {
                newStr = str.charAt(i) + "," + newStr;
            }
            else {
                newStr = str.charAt(i) + newStr;
            }
            count++;
        }
        str = newStr + ".00"; //自动补小数点后两位
    }
    else {
        for (var i = str.indexOf(".") - 1; i >= 0; i--) {
            if (count % 3 == 0 && count != 0) {
                newStr = str.charAt(i) + "," + newStr;
            }
            else {
                newStr = str.charAt(i) + newStr; //逐个字符相接起来
            }
            count++;
        }
        str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
    }
    return "".concat(symbo, " ").concat(str);
};
/**
 * date formater
 * @param dateIpt
 * @param fmt
 * @returns
 */
var dateFormater = function (dateIpt, fmt) {
    var ret;
    var date = new Date(typeof dateIpt === "string" ? dateIpt.replace(/-/g, "/") : dateIpt);
    var opt = {
        "Y+": date.getFullYear().toString(),
        "m+": (date.getMonth() + 1).toString(),
        "d+": date.getDate().toString(),
        "H+": date.getHours().toString(),
        "M+": date.getMinutes().toString(),
        "S+": date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (var k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
        }
    }
    return fmt;
};
/**
 * mobile securicy formatter
 * @param name
 * @returns
 */
var mobileFormater = function (name) {
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
var nameFormater = function (name) {
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
var addSpacesAfterEveryFourChars = function (str) {
    // 如果字符串长度小于4，则无需添加空格，直接返回原字符串
    if (str.length <= 4) {
        return str;
    }
    // 使用reduce方法遍历字符串，并添加空格
    // 使用数组索引作为第二个参数，以跟踪当前位置
    return str
        .split("")
        .reduce(function (acc, char, index) {
        // 在每四个字符后（不包括最后一个分组）添加一个空格
        if ((index + 1) % 4 === 0 && index !== str.length - 1) {
            acc.push(char, " ");
        }
        else {
            acc.push(char);
        }
        // 返回累加器数组
        return acc;
        // 将累加器数组转换回字符串
    }, [])
        .join("");
};

/**
 * 根据身份证号吗获取出生年月日
 * @param idCard
 * @returns
 */
function getBirthdayFromIdCard(idCard) {
    var birthday = "";
    if (idCard != null && idCard != "") {
        if (idCard.length == 15) {
            birthday = "19" + idCard.substr(6, 6);
        }
        else if (idCard.length == 18) {
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
function getGenderFromIdCard(idCard) {
    var sexStr = undefined;
    if (parseInt(idCard.slice(-2, -1)) % 2 == 1) {
        sexStr = 1; //male
    }
    else {
        sexStr = 0; //female
    }
    return sexStr;
}

var REGEX = {
    idCard: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    mobile: /^1(3|4|5|6|7|8|9)\d{9}/,
    email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
};
/**
 * mobile validator
 * @param name
 * @returns
 */
var mobileValidator = function (mobile) {
    return mobile.trim().length == 11 && mobile.match(REGEX.mobile)
        ? true
        : false;
};
/**
 * email validator
 * @param email
 * @returns
 */
var emailValidator = function (email) {
    return email.match(REGEX.email) ? true : false;
};
/**
 * id card validator
 * @param idCard
 * @returns
 */
var idNoZhValidator = function (idCard) {
    return idCard.match(REGEX.idCard) ? true : false;
};

/* eslint-disable */
function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    var rstObj;
    if (obj instanceof Array) {
        rstObj = [];
    }
    else {
        rstObj = {};
    }
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            rstObj[key] = deepClone(obj[key]);
        }
    }
    return rstObj;
}
// export function deepClone<T>(obj: T): T {
//   if (typeof obj !== "object" || obj === null) {
//     return obj;
//   }
//   let rstObj: any;
//   if (Array.isArray(obj)) {
//     rstObj = [];
//   } else {
//     rstObj = {} as { [key: string]: any };
//   }
//   for (let key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       rstObj[key] = deepClone(obj[key]);
//     }
//   }
//   return rstObj as T;
// }

exports.REGEX = REGEX;
exports.accAdd = accAdd;
exports.accDivide = accDivide;
exports.accMinus = accMinus;
exports.accMultiply = accMultiply;
exports.addSpacesAfterEveryFourChars = addSpacesAfterEveryFourChars;
exports.currencyFormater = currencyFormater;
exports.dateFormater = dateFormater;
exports.deepClone = deepClone;
exports.emailValidator = emailValidator;
exports.getBirthdayFromIdCard = getBirthdayFromIdCard;
exports.getGenderFromIdCard = getGenderFromIdCard;
exports.idNoZhValidator = idNoZhValidator;
exports.mobileFormater = mobileFormater;
exports.mobileValidator = mobileValidator;
exports.nameFormater = nameFormater;
