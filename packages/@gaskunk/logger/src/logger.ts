import type { Entity } from '@gaskunk/core';

export interface Logger {
  log(level: 'log' | 'info' | 'warn', message: any): any;
}

export type MethodName = keyof Entity;
