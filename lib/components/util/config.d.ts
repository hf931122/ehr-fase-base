declare let config: {
    getBiz(code: string): Promise<any>;
    getValue(id: string, defValue?: string): any;
};
export default config;
