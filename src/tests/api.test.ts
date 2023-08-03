import { getFormattedData } from "../app/models/api";
import { Repository } from "../app/models/repository";

describe("API Functions", () => {
  describe("getFormattedData", () => {
    it("returns formatted API data", async () => {
      const fixture: Repository[] = [
        { stargazers_count: 10, description: 'Repo 1', name: 'repo1', created_at: '2010-12-17T04:19:18Z', url: 'https://github.com/repo1' },
        { stargazers_count: 5, description: 'Repo 2', name: 'repo2', created_at: '2023-07-28T12:00:00Z', url: 'https://github.com/repo2' },
      ];

      const formattedData: Repository[] = await getFormattedData(fixture);

      expect(formattedData).toEqual([
        { stargazers_count: 10, description: 'Repo 1', name: 'repo1', created_at: '2010-12-17T04:19:18Z', url: 'https://github.com/repo1' },
        { stargazers_count: 5, description: 'Repo 2', name: 'repo2', created_at: '2023-07-28T12:00:00Z', url: 'https://github.com/repo2' },
      ]);
    });
  });
});
