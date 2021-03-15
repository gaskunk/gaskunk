import { Entity } from '../src/entity';

const INIT = [
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
                  getValues: jest.fn(() => INIT),
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
    expect(skunk.save()).toEqual(INIT);
  });

  it('delete', () => {
    const skunk = new Skunk();
    expect(skunk.delete()).toBe(`Deleted ${skunk.constructor.name} data`);
  });

  it('find', () => {
    const skunk = new Skunk();
    expect(skunk.find()).toEqual(INIT);
  });
});
