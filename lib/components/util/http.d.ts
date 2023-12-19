declare const http: {
    init(urls: any): void;
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
    cpost(url: string, data?: {}): any;
};
export { http };
