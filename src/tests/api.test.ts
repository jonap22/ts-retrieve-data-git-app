import {
  sumRepositoriesStars,
  getFormattedDate,
  getFormattedData,
  Repository,
} from "../app/api";

test('getFormattedData return formatted api data', async () => {
  const fixture = [
    { stargazers_count: 10, description: 'Repo 1', name: 'repo1', created_at: '2010-12-17T04:19:18Z', url: 'https://github.com/repo1' },
    { stargazers_count: 5, description: 'Repo 2', name: 'repo2', created_at: '2023-07-28T12:00:00Z', url: 'https://github.com/repo2' },
  ];
  const formattedData: Repository[] = await getFormattedData(fixture);

  expect(formattedData).toEqual([
    { stargazers_count: 10, description: 'Repo 1', name: 'repo1', created_at: '2010-12-17T04:19:18Z', url: 'https://github.com/repo1' },
    { stargazers_count: 5, description: 'Repo 2', name: 'repo2', created_at: '2023-07-28T12:00:00Z', url: 'https://github.com/repo2' },
  ]);
});

test('getFormattedDate replaces "T" with "at" and "Z" with " "', () => {
  const date = '2023-07-28T12:00:00Z';
  const expectedFormattedDate = getFormattedDate(date);

  expect(expectedFormattedDate).toEqual('2023-07-28 at 12:00:00');
});

test('sumRepositoriesStars returns the correct sum of stars', () => {
  const fixture = [
    { stargazers_count: 10, description: 'Repo 1', name: 'repo1', created_at: '2010-12-17T04:19:18Z', url: 'https://github.com/repo1' },
    { stargazers_count: 5, description: 'Repo 2', name: 'repo2', created_at: '2023-07-28T12:00:00Z', url: 'https://github.com/repo2' },
  ];
  const totalStars = sumRepositoriesStars(fixture);
  expect(totalStars).toBe(15);
});
