# ehr-fase-base
云平台定制组件，通用js、组件抽离；
使用 import ehrBasic from "ehr-face-base"
app.use(ehrBasic, faceConfig)
faceConfig 对象参数{basePath: basePath, ehrPath: ehrPath}
basePath： 本项目后端url； ehrPath： 公卫后端url
## $http 全局请求 详情见 lib/util/http.d.ts
/** 第一个参数在data中，第二个参数在url后面 */
submit(method: string, url: string, data?: any, queryParams?: any, header?: any): Promise<unknown>;
/** 第一个参数在data中，第二个参数在url后面 */
submit2(method: string, url: string, data?: any, queryParams?: any, header?: any): Promise<unknown>;
postFile(url: string, data?: any, queryParams?: any, header?: any): Promise<unknown>;
ajax(method: string, url: string, data: any, isAsync?: boolean, isformData?: boolean): any;
get(url: string, params: any): Promise<unknown>;
del(url: string, params: any, data?: object): Promise<unknown>;
post(url: string, data?: object): Promise<unknown>;
/** params参数在data中，data参数在url后面 */
put(url: string, data: object, params: any): Promise<unknown>;
## $util 全局方法 详情见 lib/util/util.d.ts
checkQuery(areaId: string, keyword: string, len?: number, isLsZjhm?: boolean): any;
checkArea(value: string, areaId: string, len: number): boolean;
/** 解析url */
getUrlParams(url: any): any;
isEqualData(o_param: any, n_param: any): boolean;
delNull(param: any): any;
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
idcard(idcard: any): any;
idcardCheck(idcard: any): any;
exportExecll(method: string, url: string, exportTitle: string, exportParam: any, headers?: any): void;
## $valid 表单验证 详情见 lib/util/valid.d.ts
## $flie 文件上传 详情见 lib/util/flie.d.ts
upload(file: any, dirCode: any, resId: string, resType: string, success: any): void;
