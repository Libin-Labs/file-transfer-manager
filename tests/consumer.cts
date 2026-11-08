import { download, DownloadError } from '@lp-labs/file-transfer-manager';
const publicAPI = [download, DownloadError];
const apiCount: number = publicAPI.length;
void apiCount;
const promise: ReturnType<typeof download> | undefined = undefined;
const error = new DownloadError('identity-changed', 'changed');
const code: string = error.code;
void promise;
void code;
