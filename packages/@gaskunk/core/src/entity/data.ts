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
import { DataLogger, ConsoleLogger } from '@gaskunk/logger';
import { transpile } from 'typescript';
import type { Entity } from './entity';
import {
  findValuesWithEntity,
  getAllSheetValues,
  getColumnNames,
  getEntityProperties,
  getAllTableValues,
  existsEntitySome,
} from '../manager';

export const getData = (sheets: GoogleAppsScript.Spreadsheet.Spreadsheet) => {
  const dataLogger = new DataLogger();
  const consoleLogger = new ConsoleLogger();

  const find = (args: FindArgs) => {
    const { tableName } = args;

    const allSheetValues = getAllSheetValues(tableName, sheets);
    const columnNames = getColumnNames(allSheetValues);

    if (!columnNames) return null;

    const allTableValues =
      allSheetValues && getAllTableValues(allSheetValues, columnNames);

    if (allTableValues) {
      return [columnNames, ...allTableValues];
    }

    return [columnNames, []];
  };

  const findBy = (_args: FindByArgs) => {};

  const remove = (args: RemoveArgs) => {
    const { tableName } = args;

    const target = sheets.getSheetByName(tableName);
    const result = target?.clearContents();

    if (result) return dataLogger.logGet(tableName, 'remove');
    return new CannotDeleteAllError(tableName);
  };

  const removeBy = (_args: RemoveByArgs) => {};

  const update = (_args: UpdateArgs) => {};

  const merge = (_args: MergeArgs) => {};

  const insert = (_args: InsertArgs) => {};

  const hasId = (args: HasIdArgs<Entity>) => {
    consoleLogger.log('warn', 'This is experimental API');

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
    consoleLogger.log('warn', 'This is experimental API');

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

  const count = (args: CountArgs) => {
    consoleLogger.log('warn', 'This is experimental API');

    const { tableName, entity } = args;
    delete entity.sheets;

    const allSheetValues = getAllSheetValues(tableName, sheets);
    const columnNames = getColumnNames(allSheetValues);
    const allTableValues =
      allSheetValues &&
      columnNames &&
      getAllTableValues(allSheetValues, columnNames);

    return allTableValues?.filter((allTableValue) =>
      existsEntitySome(allTableValue, Object.values(entity))
    ).length;
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
