import uniq1 from '@my-org/pkg1';
import uniq2 from '@my-org/pkg2';

describe('uniq', () => {
  test('pkg1', async () => {
    console.log(uniq1([1, 2, 1, 2, 3]));
  });
  test('pkg2', async () => {
    console.log(uniq2([1, 2, 1, 2, 3]));
  });
});