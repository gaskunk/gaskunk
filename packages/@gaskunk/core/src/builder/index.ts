/**
 * import internal/resolver & create instance from it, FYI: https://github.com/knex/knex/blob/1744c8c2655a8362260ba987d706ec3473681a78/lib/knex-builder/Knex.js
 */

import { MethodBuilder } from '../method/builder';

export const gaskunk = (tableName: string) => {
  return new MethodBuilder(tableName);
};
