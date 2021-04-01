import { MethodBuilder } from '../method/builder';

export const gaskunk = (tableName: string) => {
  return new MethodBuilder(tableName);
};
