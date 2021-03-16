import type { Entity } from '@gaskunk/core';

export type MethodName = keyof Entity;
export interface Logger {
  log(level: 'log' | 'info' | 'warn', message: any): any;

  logGet(tableName: string, methodName: MethodName): any;
}
