import { Repository } from "../app/models/repository";
import { RepositoryTemplate, getCardTemplate } from "../app/models/template";
import {
    rankedReposConcatHelper,
    latestReposConcatHelper,
    totalStarsConcatHelper,
    alphabeticalReposConcatHelper,
    top5StarredReposConcatHelper,
} from "../app/helpers/concatHelper";

describe("Concat Helper Functions", () => {
    const sampleRepositories: Repository[] = [
        { stargazers_count: 10, description: 'Repo 1', name: 'repo1', created_at: '2010-12-17T04:19:18Z', url: 'https://github.com/repo1' },
        { stargazers_count: 5, description: 'Repo 2', name: 'repo2', created_at: '2023-07-28T12:00:00Z', url: 'https://github.com/repo2' },
        { stargazers_count: 3, description: 'Hello World', name: 'hello-world', created_at: '2023-07-29T09:00:00Z', url: 'https://github.com/hello-world' },
    ];

    it("totalStarsConcatHelper should return HTML for the total stars", () => {
        const expectedResult = getCardTemplate(18, "Total Stars");
        expect(totalStarsConcatHelper(sampleRepositories)).toBe(expectedResult);
    });
});
