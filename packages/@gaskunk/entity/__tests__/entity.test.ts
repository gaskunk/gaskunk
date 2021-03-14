import { Entity } from '../src/entity';

const SHEETS_INITIAL_VALUES = {
  columnNames: ['id', 'name', 'description'],
  initialValues: [0, 'gaskunk', '🦨'],
};

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
            getDataRange: jest.fn(
              () =>
                (({
                  getValues: jest.fn(() =>
                    SHEETS_INITIAL_VALUES.columnNames.map((value, index) => [
                      value,
                      SHEETS_INITIAL_VALUES.initialValues[index],
                    ])
                  ),
                } as unknown) as GoogleAppsScript.Spreadsheet.Sheet)
            ),
          } as unknown) as GoogleAppsScript.Spreadsheet.Sheet)
      ),
    } as unknown) as GoogleAppsScript.Spreadsheet.Spreadsheet)
);

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

  it('find', () => {
    const skunk = new Skunk();
    expect(skunk.find()).toEqual(SHEETS_INITIAL_VALUES.columnNames);
  });
});
