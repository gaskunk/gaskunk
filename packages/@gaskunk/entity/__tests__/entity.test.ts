import { Entity } from '../src/entity';

SpreadsheetApp['getActive'] = jest.fn(
  () =>
    (({
      getSheetByName: jest.fn(
        () =>
          (({
            clearContents: jest.fn(
              () => ({} as GoogleAppsScript.Spreadsheet.Sheet)
            ),
            appendRow: jest.fn(),
          } as unknown) as GoogleAppsScript.Spreadsheet.Sheet)
      ),
    } as unknown) as GoogleAppsScript.Spreadsheet.Spreadsheet)
);

const SHEETS_INITIAL_VALUES = {
  columnNames: ['id', 'name', 'description'],
  initialValues: [0, 'gaskunk', '🦨'],
};

class Skunk extends Entity {
  id!: number;
  name!: string;
  description!: string;
}

describe('Entity', () => {
  it('save', () => {
    const skunk = new Skunk();
    skunk.id = 0;
    skunk.name = 'gaskunk';
    skunk.description = '🦨';
    expect(skunk.save()).toEqual(SHEETS_INITIAL_VALUES);
  });

  it('delete', () => {
    const skunk = new Skunk();
    expect(skunk.delete()).toBe(`Deleted ${skunk.constructor.name} data`);
  });
});
