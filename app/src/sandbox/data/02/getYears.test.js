import { getThreeYears, getYears } from './getYears';

describe('Test for getThreeYears', () => {
  test('Get three elements for now', () => {
    const res = getThreeYears();
    expect(res.length).toBe(3);
    const today = new Date();
    const thisYear = today.getFullYear();
    const nextYear = today.getFullYear() + 1;
    const lastYear = today.getFullYear() - 1;
    expect(res.includes(thisYear)).toBeTruthy();
    expect(res.includes(nextYear)).toBeTruthy();
    expect(res.includes(lastYear)).toBeTruthy();
  });
  test('Get three elements for the past', () => {
    const res = getThreeYears(2000);
    expect(res.length).toBe(3);
    const thisYear = 2000;
    const nextYear = 2001;
    const lastYear = 1999;
    expect(res.includes(thisYear)).toBeTruthy();
    expect(res.includes(nextYear)).toBeTruthy();
    expect(res.includes(lastYear)).toBeTruthy();
  });
  test('Get three elements for the past in string', () => {
    const res = getThreeYears('2000');
    expect(res.length).toBe(3);
    const thisYear = 2000;
    const nextYear = 2001;
    const lastYear = 1999;
    expect(res.includes(thisYear)).toBeTruthy();
    expect(res.includes(nextYear)).toBeTruthy();
    expect(res.includes(lastYear)).toBeTruthy();
  });
  test('Get three elements for the future', () => {
    const res = getThreeYears(2100);
    expect(res.length).toBe(3);
    const thisYear = 2100;
    const nextYear = 2101;
    const lastYear = 2099;
    expect(res.includes(thisYear)).toBeTruthy();
    expect(res.includes(nextYear)).toBeTruthy();
    expect(res.includes(lastYear)).toBeTruthy();
  });
});

describe('Test for getYears', () => {
  test('Get three elements for now', () => {
    const getThreeYears = getYears(3);
    const res = getThreeYears();
    expect(res.length).toBe(3);
    const today = new Date();
    const thisYear = today.getFullYear();
    const nextYear = today.getFullYear() + 1;
    const lastYear = today.getFullYear() - 1;
    expect(res.includes(thisYear)).toBeTruthy();
    expect(res.includes(nextYear)).toBeTruthy();
    expect(res.includes(lastYear)).toBeTruthy();
  });
  test('Get eleven elements for now', () => {
    const getThreeYears = getYears(11);
    const res = getThreeYears();
    expect(res.length).toBe(11);
    const today = new Date();
    const thisYear = today.getFullYear();
    const lastYear = today.getFullYear() - 5;
    const nextYear = today.getFullYear() + 5;
    expect(res.includes(thisYear)).toBeTruthy();
    expect(res.includes(nextYear)).toBeTruthy();
    expect(res.includes(lastYear)).toBeTruthy();
  });
  test('Get eleven elements for now', () => {
    const getThreeYears = getYears(101);
    const res = getThreeYears();
    expect(res.length).toBe(101);
    const today = new Date();
    const thisYear = today.getFullYear();
    const lastYear = today.getFullYear() - 50;
    const nextYear = today.getFullYear() + 50;
    expect(res.includes(thisYear)).toBeTruthy();
    expect(res.includes(nextYear)).toBeTruthy();
    expect(res.includes(lastYear)).toBeTruthy();
  });
});
