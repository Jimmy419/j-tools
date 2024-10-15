/**
 * currency formatter
 * @param num
 * @param symbo
 * @returns
 */
export declare const currencyFormater: (num: number, symbo: string) => string;
/**
 * date formater
 * @param dateIpt
 * @param fmt
 * @returns
 */
export declare const dateFormater: (dateIpt: string | Date, fmt: string) => string;
/**
 * mobile securicy formatter
 * @param name
 * @returns
 */
export declare const mobileFormater: (name: string) => string | null;
/**
 * name security formatter
 * @param name
 * @returns
 */
export declare const nameFormater: (name: string) => string | null;
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
export declare const addSpacesAfterEveryFourChars: (str: string) => string;
