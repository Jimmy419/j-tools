export declare const REGEX: {
    idCard: RegExp;
    mobile: RegExp;
    email: RegExp;
};
/**
 * mobile validator
 * @param name
 * @returns
 */
export declare const mobileValidator: (mobile: string) => boolean;
/**
 * email validator
 * @param email
 * @returns
 */
export declare const emailValidator: (email: string) => boolean;
/**
 * id card validator
 * @param idCard
 * @returns
 */
export declare const idNoZhValidator: (idCard: string) => boolean;
