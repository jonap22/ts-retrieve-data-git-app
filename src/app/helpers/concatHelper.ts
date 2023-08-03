import { Repository } from "../models/repository.js";
import { RepositoryTemplate, getCardTemplate, getTitleTemplate } from "../models/template.js";

type ConcatFunction = (data: Repository[]) => string;

const rankedReposConcatHelper: ConcatFunction = (data) => {
    return data
        .filter((repo) => repo.stargazers_count > 5)
        .map((repo) => {
            const repoTemplate = new RepositoryTemplate(repo);
            return repoTemplate.render();
        })
        .join('');
};

const latestReposConcatHelper: ConcatFunction = (data) => {
    const sortedRepos = data.sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    const latestRepos = sortedRepos.slice(0, 5);
    return latestRepos
        .map((repo) => {
            const repoTemplate = new RepositoryTemplate(repo);
            return repoTemplate.render();
        })
        .join('');
};

const totalStarsConcatHelper: ConcatFunction = (data) => {
    const total = data.reduce((sum, { stargazers_count }) => sum + stargazers_count, 0);
    return getCardTemplate(total, "Total Stars");
};

const alphabeticalReposConcatHelper: ConcatFunction = (data) => {
    const filteredRepos = data.filter((repo) => !repo.name.toLowerCase().startsWith("h"));
    const sortedRepos = filteredRepos.sort((a, b) => a.name.localeCompare(b.name));
    return sortedRepos
        .map((repo) => {
            const repoTemplate = new RepositoryTemplate(repo);
            return repoTemplate.render();
        })
        .join('');
};

const top5StarredReposConcatHelper: ConcatFunction = (data) => {
    const sortedRepos = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
    const top5Repos = sortedRepos.slice(0, 5);
    return top5Repos
        .map((repo) => {
            const repoTemplate = new RepositoryTemplate(repo);
            return repoTemplate.render();
        })
        .join('');
};

export {
    rankedReposConcatHelper,
    latestReposConcatHelper,
    totalStarsConcatHelper,
    alphabeticalReposConcatHelper,
    top5StarredReposConcatHelper,
};
