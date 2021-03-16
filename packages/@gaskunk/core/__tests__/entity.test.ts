import { DataLogger, SheetLogger } from '@gaskunk/logger';
import { Entity } from '../src/entity';

const SHEETS_VALUES = [
  ['id', 'name', 'description'],
  [0, 'gaskunk', '🦨'],
  [1, 'skunk', 'This is Skunk!'],
];

SpreadsheetApp['getActiveSpreadsheet'] = jest.fn(
  () =>
    (({
      insertSheet: jest.fn(),
      getSheetByName: jest.fn(() => ({})),
    } as unknown) as GoogleAppsScript.Spreadsheet.Spreadsheet)
);

SpreadsheetApp['getActive'] = jest.fn(
  () =>
    (({
      insertSheet: jest.fn(),
      deleteSheet: jest.fn(),
      getSheetByName: jest.fn(() => ({
        clearContents: jest.fn(() => ({})),
        appendRow: jest.fn(),
        getDataRange: jest.fn(() => ({
          getValues: jest.fn(() => SHEETS_VALUES),
        })),
      })),
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

describe('Sheet', () => {
  const logger = new SheetLogger();

  it('create', () => {
    const skunk = new Skunk();
    expect(skunk.create(skunk.constructor.name)).toBe(
      logger.logGet(skunk.constructor.name, 'create')
    );
  });

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

  it('clear', () => {
    const skunk = new Skunk();
    expect(skunk.clear(skunk.constructor.name)).toBe(
      logger.logGet(skunk.constructor.name, 'clear')
    );
  });
});

describe('Data', () => {
  const logger = new DataLogger();

  it('find', () => {
    const skunk = new Skunk();
    expect(skunk.find()).toEqual(SHEETS_VALUES);
  });

  it('remove', () => {
    const skunk = new Skunk();
    expect(skunk.remove()).toBe(
      logger.logGet(skunk.constructor.name, 'remove')
    );
  });

  it('hasId', () => {
    const skunk = new Skunk();
    skunk.id = 0;
    skunk.name = 'gaskunk';
    skunk.description = '🦨';
    expect(skunk.hasId(skunk)).toBe(true);
  });

  it('getId', () => {
    const skunk = new Skunk();
    skunk.id = 0;
    skunk.name = 'gaskunk';
    skunk.description = '🦨';
    expect(skunk.getId(skunk)).toBe(0);
  });

  it('methods', () => {
    const skunk = new Skunk();
    expect(
      skunk.methods(
        `getSheetByName('${skunk.constructor.name}')?.getDataRange()?.getValues()`
      )
    ).toBe(SHEETS_VALUES);
  });
});
