import { Logger, LoggerOptions } from './logger';

export class DataLogger implements Logger {
  constructor(private options: LoggerOptions) {}

  log() {}
}
