import { Response } from 'express';

export const jsonResponse = <T = Record<string, unknown>>(
  res: any,
  code: number,
  message: string,
  data?: T | T[]
): void => {
  const success = code >= 200 && code <= 299;
  return res.status(code).json({
    success,
    error_message: success ? undefined : message,
    data,
  });
};

export const ok = <T>(res: Response, dto?: T) => {
  if (!!dto) {
    jsonResponse<T>(res, 200, 'OK', dto);
  } else {
    jsonResponse<void>(res, 200, 'OK');
  }
};

export const notFound = (res: Response, message?: string, emptyResponse = false) => {
  if (emptyResponse) {
    res.status(404).end();
    return;
  }
  return jsonResponse(res, 404, message ? message : 'Not found');
};
