declare const valid: {
    validateCode(rule: any, value: any, callback: any): Promise<void>;
    validateName(rule: any, value: any, callback: any): Promise<void>;
    validateGahhMinNumber(rule: any, value: any, callback: any): Promise<void>;
    validPhone(rule: any, value: any, callback: any): Promise<void>;
    number(name: string, min: number, max: number): (rule: any, value: any, callback: any) => Promise<void>;
    validNumLen(len?: number): (rule: any, value: any, callback: any) => Promise<void>;
    validateInt(rule: any, value: any, callback: any): Promise<void>;
    compare(mathType: string, end: string, messages: string): (rule: any, value: any, callback: Function) => Promise<void>;
    /**
     * 姓名判断是否是中文英文和空格
     */
    isName(maxlen?: number, minlen?: number, dstr?: string): (rule: any, value: string, callback: any) => Promise<void>;
    /** 区域限制，必须选择到村 */
    validCun(rule: any, value: any, callback: any): Promise<void>;
    idcard(access: any): (rule: any, value: any, callback: any) => Promise<void>;
    idcardWithLs(access?: any): (rule: any, value: any, callback: any) => Promise<void>;
};
export default valid;
