import { Entity } from '../src/entity';

const SHEETS_VALUES = [
  ['id', 'name', 'description'],
  [0, 'gaskunk', '🦨'],
  [1, 'skunk', 'This is Skunk!'],
];

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
                  getValues: jest.fn(() => SHEETS_VALUES),
                } as unknown) as GoogleAppsScript.Spreadsheet.Sheet)
            ),
          } as unknown) as GoogleAppsScript.Spreadsheet.Sheet)
      ),
    } as unknown) as GoogleAppsScript.Spreadsheet.Spreadsheet)
);

class Skunk extends Entity {
  constructor() {
    super();
  }
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
    /**
     * Column names: SHEETS_VALUES[0]
     * Initial values: SHEETS_VALUES[1]
     */
    expect(skunk.save()).toEqual([SHEETS_VALUES[0], SHEETS_VALUES[1]]);
  });

  it('delete', () => {
    const skunk = new Skunk();
    expect(skunk.delete()).toBe(`Deleted ${skunk.constructor.name} data`);
  });

  it('find', () => {
    const skunk = new Skunk();
    expect(skunk.find()).toEqual(SHEETS_VALUES);
  });
});
