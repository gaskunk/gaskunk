import type { GaskunkConfig } from './types';
import { resolveDialect } from './dialect-resolver';

export const gaskunk = <T extends object = {}>(config?: GaskunkConfig) => {
  return (tableName: string, options: { [key: string]: any } = {}) => {
    const { MethodBuilder } = resolveDialect(config);
    return new MethodBuilder<T>(tableName, options);
  };
};
