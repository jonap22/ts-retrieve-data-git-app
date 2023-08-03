import { Repository } from '../app/models/repository';

describe('Repository Interface', () => {
  test('has the correct properties', () => {
    const repo: Repository = {
      stargazers_count: 10,
      description: 'Test Repo',
      name: 'test-repo',
      created_at: '2023-08-01T12:00:00Z',
      url: 'https://github.com/test-repo',
    };

    expect(repo.stargazers_count).toBe(10);
    expect(repo.description).toBe('Test Repo');
    expect(repo.name).toBe('test-repo');
    expect(repo.created_at).toBe('2023-08-01T12:00:00Z');
    expect(repo.url).toBe('https://github.com/test-repo');
  });
});
