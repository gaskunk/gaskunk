import { CreateOutputArgs } from './types';

export const createOutput = <T>(args: CreateOutputArgs<T>) => {
  const { message, data } = args;
  return ContentService.createTextOutput(
    JSON.stringify({ status: 200, message: message, data: data })
  ).setMimeType(ContentService.MimeType.JSON);
};
