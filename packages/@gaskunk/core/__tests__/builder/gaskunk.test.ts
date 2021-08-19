import { gaskunk } from '../../src/gaskunk';

interface User {
  // id: number; // primary
  userName: string;
  age: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const db = gaskunk<User>({ client: 'spreadsheet' });

describe('gaskunk', () => {
  test('select', async () => {
    const res = await db('foo').select('userName').build();
    expect(res).toMatchObject([{ userName: 'skunk' }]);
  });
});
