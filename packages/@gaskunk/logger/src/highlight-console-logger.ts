import { Logger, LoggerOptions } from './logger';

export class HighLightConsoleLogger implements Logger {
  constructor(private options: LoggerOptions) {}

  log() {}
}
