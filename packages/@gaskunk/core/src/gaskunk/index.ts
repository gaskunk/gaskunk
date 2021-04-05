/**
 * import internal/resolver & create instance from it, FYI: https://github.com/knex/knex/blob/1744c8c2655a8362260ba987d706ec3473681a78/lib/knex-builder/Knex.js
 */

import { resolveDialect } from './dialect-resolver';
import type { GaskunkConfig } from './types';

export const gaskunk = <T extends object = {}>(config: GaskunkConfig) => {
  return (tableName: string, options: any = {}) => {
    const { MethodBuilder } = resolveDialect(config);
    if (!MethodBuilder) return;
    return new MethodBuilder<T>(tableName, options);
  };
};
