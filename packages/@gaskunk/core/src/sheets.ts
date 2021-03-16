import { entityContainerFactory } from './factory';
import type {
  ClearArgs,
  CreateArgs,
  DeleteAllArgs,
  DeleteByArgs,
  FindAllArgs,
  FindByArgs,
  OrderArgs,
  SaveArgs,
  UpdateArgs,
} from './types/sheets/sheets';

export const getTable = (sheets: GoogleAppsScript.Spreadsheet.Spreadsheet) => {
  const create = (args: CreateArgs) => {
    const { tableName } = args;
    sheets.insertSheet(tableName);
    return `Created ${tableName}`;
  };

  const clear = (args: ClearArgs) => {
    const { tableName } = args;
    const target = sheets?.getSheetByName(tableName);
    if (target) {
      sheets?.deleteSheet(target);
      return `Cleared ${tableName}`;
    }
    // FIXME: @gaskunk/error
    return new Error(`Cannot clear ${tableName}`);
  };

  return {
    create: create,
    clear: clear,
  };
};

export const getSheets = (sheets: GoogleAppsScript.Spreadsheet.Spreadsheet) => {
  const container = entityContainerFactory(sheets);
  const { table } = container;

  const save = (args: SaveArgs) => {
    const { tableName, properties } = args;
    /**
     * Insert new sheet as table
     */
    table?.create(tableName);

    /**
     * FIXME: Get sub class properties
     */
    const values = properties.filter(
      (property) => !property.includes('sheets')
    );

    /**
     * Insert column name
     */
    const colunmNames = values.map((value) => value[0]);
    const target = sheets?.getSheetByName(tableName);
    target?.appendRow(colunmNames);

    /**
     * Insert initial values
     */
    const initialValues = values.map((value) => value[1]);
    target?.appendRow(initialValues);

    return [colunmNames, initialValues];
  };

  const findAll = (args: FindAllArgs) => {
    const { tableName } = args;
    const target = sheets?.getSheetByName(tableName);
    const range = target?.getDataRange();
    const SpreadsheetValues = range?.getValues();

    /**
     * Get first row values as column names
     */
    const columnNames = SpreadsheetValues?.reduce((prev, cur, index) => {
      if (index == 0) return cur;
      return prev;
    }, []);

    // TODO: get values excludes column names
    const values = SpreadsheetValues?.filter((value) => value !== columnNames);

    if (values) {
      return [columnNames, ...values];
    }

    return [columnNames, []];
  };

  const findBy = (_args: FindByArgs) => {};

  const deleteAll = (args: DeleteAllArgs) => {
    const { tableName } = args;
    const target = sheets.getSheetByName(tableName);
    const result = target?.clearContents();
    if (result) return `Deleted ${tableName} data`;
    // FIXME: @gaskunk/error
    return new Error(`Cannot deleted ${tableName} data`);
  };

  const deleteBy = (_args: DeleteByArgs) => {};

  const order = (_args: OrderArgs) => {};

  const update = (_args: UpdateArgs) => {};

  return {
    save: save,
    findAll: findAll,
    findBy: findBy,
    deleteAll: deleteAll,
    deleteBy: deleteBy,
    order: order,
    update: update,
  };
};
