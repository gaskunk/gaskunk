import connection from '../src/connection';

describe('connection', () => {
  it('can get resolved', () => {
    return connection({ sheetId: '123456789XXXX' }).then((value) => {
      expect(value).toMatchObject({ sheetId: '123456789XXXX' });
    });
  });
});
