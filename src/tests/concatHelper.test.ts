import {
    rankedReposConcatHelper,
    latestReposConcatHelper,
    totalStarsConcatHelper,
    alphabeticalReposConcatHelper,
    top5StarredReposConcatHelper,
} from '../app/helpers/concatHelper';
import { Repository } from '../app/models/repository';
import { getCardTemplate } from '../app/models/template';

describe('concatHelper functions', () => {
    const mockRepos: Repository[] = [
        { stargazers_count: 10, description: 'Repo 1', name: 'repo1', created_at: '2010-12-17T04:19:18Z', url: 'https://github.com/repo1' },
        { stargazers_count: 5, description: 'Repo 2', name: 'repo2', created_at: '2023-07-28T12:00:00Z', url: 'https://github.com/repo2' },
    ];

    test('rankedReposConcatHelper contains Repo 1 and Repo 2', () => {
        const result = rankedReposConcatHelper(mockRepos);

        expect(result).toContain('Repo 1');
        expect(result).not.toContain('Repo 2');
    });

    describe('totalStarsConcatHelper', () => {
        it('returns the correct sum of stars', () => {
            const result = totalStarsConcatHelper(mockRepos);
    
            expect(result).toContain('15');
            expect(result).toContain('Total Stars');
        });
    
        it("returns HTML for the total stars", () => {
            const expectedResult = getCardTemplate(15, "Total Stars");
            expect(totalStarsConcatHelper(mockRepos)).toBe(expectedResult);
        });
    });

    test('latestReposConcatHelper', () => {
        const result = latestReposConcatHelper(mockRepos);

        expect(result).toContain('Repo 2');
        expect(result).toContain('Repo 1');
    });

    test('alphabeticalReposConcatHelper', () => {
        const result = alphabeticalReposConcatHelper(mockRepos);

        expect(result).toContain('Repo 1');
        expect(result).toContain('Repo 2');
    });

    test('top5StarredReposConcatHelper', () => {
        const result = top5StarredReposConcatHelper(mockRepos);

        expect(result).toContain('Repo 1');
        expect(result).toContain('Repo 2');
    });
});
