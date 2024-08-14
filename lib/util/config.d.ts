declare let config: {
    getBiz(code: string): Promise<any>;
    getOnlineUser(force?: string): any;
    getValue(id: string, defValue?: string): any;
};
declare const getOnlineUser: (force?: string) => any;
export { getOnlineUser };
export default config;
