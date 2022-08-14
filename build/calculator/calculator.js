/**
 * 加法
 * @param arg1
 * @param arg2
 * @returns
 */
export function accAdd(arg1, arg2) {
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
export function accMinus(arg1, arg2) {
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
export function accMultiply(number1, number2) {
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
export function accDivide(num1, num2) {
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
