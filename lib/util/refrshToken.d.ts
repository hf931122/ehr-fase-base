declare const refrsh: {
    env: boolean;
    init(env?: boolean): void;
    getCookie(cname?: string): any;
    getLogin(cname?: string): string;
    remove(): void;
    outLogin(title?: string): void;
    outInLogin(title: string, des: string, url: string): void;
    validTokenTime(url: string): void;
    countRefresfTime(): void;
    refreshTokens(): void;
    /** 保存token */
    setCookie(value: string): void;
    /** 保存login */
    setLogin(param: any): void;
};
export default refrsh;
