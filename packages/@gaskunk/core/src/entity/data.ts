import type {
  RemoveArgs,
  RemoveByArgs,
  FindArgs,
  FindByArgs,
  UpdateArgs,
  HasIdArgs,
  GetIdArgs,
  MergeArgs,
  InsertArgs,
  CountArgs,
  MethodsArgs,
} from '@gaskunk/types';
import { CannotDeleteAllError } from '@gaskunk/error';
import { DataLogger } from '@gaskunk/logger';
import { transpile } from 'typescript';
import type { Entity } from './entity';
import {
  findValuesWithEntity,
  getAllSheetValues,
  getColumnNames,
  getEntityProperties,
} from '../manager';

export const getData = (sheets: GoogleAppsScript.Spreadsheet.Spreadsheet) => {
  const logger = new DataLogger();

  const find = (args: FindArgs) => {
    const { tableName } = args;

    const allSheetValues = getAllSheetValues(tableName, sheets);
    const columnNames = getColumnNames(allSheetValues);

    if (!columnNames) return null;

    // TODO: get values excludes column names
    const values = allSheetValues?.filter((value) => value !== columnNames);

    if (values) {
      return [columnNames, ...values];
    }

    return [columnNames, []];
  };

  const findBy = (_args: FindByArgs) => {};

  const remove = (args: RemoveArgs) => {
    const { tableName } = args;

    const target = sheets.getSheetByName(tableName);
    const result = target?.clearContents();

    if (result) return logger.logGet(tableName, 'remove');
    return new CannotDeleteAllError(tableName);
  };

  const removeBy = (_args: RemoveByArgs) => {};

  const update = (_args: UpdateArgs) => {};

  const hasId = (args: HasIdArgs<Entity>) => {
    const { tableName, entity } = args;

    const allSheetValues = getAllSheetValues(tableName, sheets);
    const entityProperties = getEntityProperties(entity);
    const foundValues = findValuesWithEntity(allSheetValues, entityProperties);

    if (!foundValues) return false;

    /**
     * foundValues[0]: primaryColumn value
     */
    if (foundValues[0] != null) return true;
    else return false;
  };

  const getId = (args: GetIdArgs<Entity>) => {
    const { tableName, entity } = args;

    const allSheetValues = getAllSheetValues(tableName, sheets);
    const entityProperties = getEntityProperties(entity);
    const foundValues = findValuesWithEntity(allSheetValues, entityProperties);

    /**
     * foundValues[0]: primaryColumn value
     */
    if (!foundValues) return null;
    return foundValues[0];
  };

  const merge = (_args: MergeArgs) => {};

  const insert = (_args: InsertArgs) => {};

  const count = (args: CountArgs) => {
    const { tableName, entity } = args;
    delete entity.sheets;

    // const entityKeys = Object.keys(entity);
    // const entityValues = Object.values(entity);
    // const allSheetValues = getAllSheetValues(tableName, sheets);
    // const columnNames = getColumnNames(allSheetValues);

    // console.log(columnNames);

    // [....].filter(x => x==2).length
  };

  const methods = (args: MethodsArgs) => {
    const { methods } = args;

    const code = transpile(`sheets?.${methods}`);
    const result = eval(code);

    return result;
  };

  return {
    find: find,
    findBy: findBy,
    remove: remove,
    removeBy: removeBy,
    update: update,
    hasId: hasId,
    getId: getId,
    merge: merge,
    insert: insert,
    count: count,
    methods: methods,
  };
};
