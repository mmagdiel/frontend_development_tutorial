import { filterByDepartament, filterByMunicipio, getBoyaca } from './analisys';

describe('Test for filter functions', () => {
  test('Instance of boyaca', () => {
    const boyaca = getBoyaca();
    expect(boyaca.length).toBe(52);
  });
  test('Factory filter method', () => {
    const getDataOfDepartament = filterByDepartament('BOYACA');
    const boyaca = getDataOfDepartament();
    expect(boyaca.length).toBe(52);
  });
  test('Factory filter method', () => {
    const soata = filterByMunicipio('SOATA');
    expect(soata.length).toBe(3);
  });
  test('Factory filter method', () => {
    const bolivarAndSoata = getBolivarAndSoata();
    expect(bolivarAndSoata.length).toBe(1);
  });
});
