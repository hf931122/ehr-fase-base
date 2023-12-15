declare const refrsh: {
    getCookie(cname?: string): any;
    getLogin(cname?: string): string;
    remove(title?: string): void;
    outLogin(title?: string): void;
    validTokenTime(url: string): void;
    countRefresfTime(): void;
    refreshTokens(): void;
    /** 保存token */
    setCookie(value: string): void;
    /** 保存login */
    setLogin(param: any): void;
};
export default refrsh;
