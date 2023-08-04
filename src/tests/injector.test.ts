import { getFormattedDate } from "../app/injector";

describe('Injector Functions', () => {
  test('getFormattedDate replaces "T" with "at" and "Z" with " "', () => {
    const date = '2023-07-28T12:00:00Z';
    const expectedFormattedDate = getFormattedDate(date);

    expect(expectedFormattedDate).toEqual('2023-07-28 at 12:00:00');
  });
});


