import type { GaskunkConfig } from './types';
import { resolveDialect } from './dialect-resolver';

export const gaskunk = <T extends object = {}>(config: GaskunkConfig) => {
  return (tableName: string, options: any = {}) => {
    const { MethodBuilder } = resolveDialect(config);
    if (MethodBuilder != null) return new MethodBuilder<T>(tableName, options);
  };
};
