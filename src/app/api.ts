import { Repository } from "./interfaces/repository";
import { getCardTemplate, getItemsGroupTemplate, getTitleTemplate } from "./template";

function getURL(): string {
    return "https://api.github.com/orgs/stackbuilders/repos";
}

async function retrieveDataFromAPI(): Promise<Repository[]> {
    let response = await fetch(getURL());

    if (!response.ok) {
        alert("HTTP-Error: " + response.status);
        return [];
    }

    return await getFormattedData(await response.json());
}

async function getFormattedData(responseData: Repository[]): Promise<Repository[]> {
    return responseData.map(repo => {
        const { stargazers_count, description, name, created_at, url } = repo;
        return { stargazers_count, description, name, created_at, url };
    });
}

function concatRankedReposOnHTML(data: Repository[], htmlOutput: string) {
    data.filter(repo => repo.stargazers_count > 5)
        .map(repo => {
            htmlOutput += getItemsGroupTemplate(repo)
        });

    document.getElementById('repositoryContent')!.innerHTML = htmlOutput;
}

async function setRankedReposOnScreen() {
    let title = "Best Repositories";
    let bestRepos = await retrieveDataFromAPI();
    concatRankedReposOnHTML(bestRepos, getTitleTemplate(title));
}

function getFormattedDate(date: string): string {
    return date.replace('T', ' at ').replace('Z', '');
}

function concatLatestReposOnHTML(data: Repository[], htmlOutput: string) {
    const sortedRepos = data.sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    const latestRepos = sortedRepos.slice(0, 5);
    latestRepos.map(repo => {
        htmlOutput += getItemsGroupTemplate(repo);
    });

    document.getElementById('repositoryContent')!.innerHTML = htmlOutput;
}

async function setLatestReposOnScreen() {
    let title = "Latest Repositories";
    let latestRepos = await retrieveDataFromAPI();
    concatLatestReposOnHTML(latestRepos, getTitleTemplate(title));
}

function concatTotalStarsOnHTML(data: Repository[], htmlOutput: string) {
    let total = sumRepositoriesStars(data);
    htmlOutput += getCardTemplate(total, "Total Stars");
    document.getElementById('repositoryContent')!.innerHTML = htmlOutput;
}

function sumRepositoriesStars(data: Repository[]): number {
    return data.reduce((total, { stargazers_count }) => {
        return total += stargazers_count;
    }, 0);
}

async function setTotalStarsOnScreen() {
    let title = "All Obtained Stars";
    let repos = await retrieveDataFromAPI();
    concatTotalStarsOnHTML(repos, getTitleTemplate(title));
}

export {
    sumRepositoriesStars,
    getFormattedData,
    getFormattedDate,
    setRankedReposOnScreen,
    setLatestReposOnScreen,
    setTotalStarsOnScreen
};