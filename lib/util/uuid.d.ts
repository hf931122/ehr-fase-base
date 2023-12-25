declare const uuid: {
    created(): any;
    /**
     * 读取cookie
     */
    getCookie(name: string): string;
    setCookie(name: string, value: string): void;
};
export default uuid;
