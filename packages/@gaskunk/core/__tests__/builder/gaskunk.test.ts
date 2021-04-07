import { gaskunk } from '../../src/gaskunk';
interface User {
  id: number; // primary
  userName: string;
  age: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const db = gaskunk<User>({ client: 'spreadsheet' });

describe('gaskunk - ', () => {
  test('select', async () => {
    const res = await db('foo').select('id').build();
    expect(res).toBeInstanceOf([{ id: 1 }]);
  });
});
