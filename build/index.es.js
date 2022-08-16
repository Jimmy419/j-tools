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
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
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
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
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
    }
    try {
        baseNum += number2.toString().split(".")[1].length;
    }
    catch (e) {
        // console.log(e);
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
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    }
    catch (e) {
        baseNum2 = 0;
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
    var date = new Date(dateIpt);
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

export { REGEX, accAdd, accDivide, accMinus, accMultiply, currencyFormater, dateFormater, emailValidator, getBirthdayFromIdCard, getGenderFromIdCard, idNoZhValidator, mobileFormater, mobileValidator, nameFormater };
