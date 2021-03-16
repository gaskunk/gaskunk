import { entityContainerFactory } from '../factory';
import type { SaveArgs } from './types/sheets';

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

  const find = () => {};

  const findBy = () => {};

  const deleteAll = () => {};

  const deleteBy = () => {};

  const order = () => {};

  const update = () => {};

  return {
    save: save,
  };
};
