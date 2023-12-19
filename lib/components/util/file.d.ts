declare let file: {
    init(urls: any): void;
    upload(file: any, dirCode: any, resId: string, resType: string, success: any): void;
    setUpload(file: any, dirCode: string, resId: string, resType: string, success: any): void;
    view(fid: string): void;
    getUrl(fid: string): string;
};
export default file;
