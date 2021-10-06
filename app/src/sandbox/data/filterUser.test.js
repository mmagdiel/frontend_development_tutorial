import {
  getPostById,
  getPostByUserId,
  getPostByUserIdAndId,
} from './filterUser';

test('Get post by userId 1 ', () => {
  const res = getPostByUserId(1);
  expect(res.length).toBe(10);
});

test('Get post by id 1', () => {
  const res = getPostById(1);
  expect(res.length).toBe(1);
});

test('Get post by userId 2 and id 13', () => {
  const res = getPostByUserIdAndId(2, 13);
  expect(res.length).toBe(2);
});
