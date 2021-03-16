import { Logger, LoggerOptions } from './logger';

export class SheetLogger implements Logger {
  constructor(private options: LoggerOptions) {}

  log() {}
}
