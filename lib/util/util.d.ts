declare const util: {
    checkQuery(areaId: string, keyword: string, len?: number, isLsZjhm?: boolean): any;
    checkArea(value: string, areaId: string, len: number): boolean;
    getDictItems(code: string, sys?: string, excludes?: any): any;
    /** 解析url */
    getUrlParams(url: any): any;
    isEqualData(o_param: any, n_param: any): boolean;
    dealTrimFrom(form: any): any;
    trimForm(form: any): any;
    dealForm(form: any): any;
    delNull(param: any): any;
    getFormData(data: any, format?: string): any;
    attrs(array: Array<any>, name: string): any[];
    /**
     * 部分属性通过位运算传给后端
     * @param data form对象
     * @param val 位运算的字段可以是字符串，可以是数组-字符串
    */
    setBitData(data: any, val: string | Array<string>): any;
    /**
     * 把后端位运算值转化为字符串
     * @param data form对象
     * @param val 位运算的字段可以是字符串，可以是数组-字符串
    */
    parsingBit(data: any, val: string | Array<string>): any;
    bitForArry(bitVal: number, arry?: any, num?: number): any;
    idcard(idcard: any): any;
    idcardCheck(idcard: any): any;
    getAge(value: string, isyear?: boolean): {};
    getTreeNode(list: Array<any>, key: string): any;
    exportExecll(method: string, url: string, exportTitle: string, exportParam: any, headers?: any): void;
    excellError(res: any): void;
    /**
     * 加密公共方法
     */
    encryptedRsa(data: string): any;
    /** 计算页码 */
    getPageSize(height?: number, rowHeight?: number): number;
    /** 禁止选择未来日期*/
    disabledFutureDate(current: any): boolean;
    /** 禁止选择过去日期*/
    disabledPastDate(current: any): boolean;
};
declare const getDictItems: (code: string, sys?: string, excludes?: any) => any;
export { getDictItems };
export default util;
