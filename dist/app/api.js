import { getCardTemplate, getItemsGroupTemplate, getTitleTemplate } from "./template";
function getURL() {
    return "https://api.github.com/orgs/stackbuilders/repos";
}
async function retrieveDataFromAPI() {
    let response = await fetch(getURL());
    if (!response.ok) {
        alert("HTTP-Error: " + response.status);
        return [];
    }
    return await getFormattedData(await response.json());
}
async function getFormattedData(responseData) {
    return responseData.map(repo => {
        const { stargazers_count, description, name, created_at, url } = repo;
        return { stargazers_count, description, name, created_at, url };
    });
}
function concatRankedReposOnHTML(data, htmlOutput) {
    data.filter(repo => repo.stargazers_count > 5)
        .map(repo => {
        htmlOutput += getItemsGroupTemplate(repo);
    });
    document.getElementById('repositoryContent').innerHTML = htmlOutput;
}
async function setRankedReposOnScreen() {
    let title = "Best Repositories";
    let bestRepos = await retrieveDataFromAPI();
    concatRankedReposOnHTML(bestRepos, getTitleTemplate(title));
}
function getFormattedDate(date) {
    return date.replace('T', ' at ').replace('Z', '');
}
function concatLatestReposOnHTML(data, htmlOutput) {
    const sortedRepos = data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    const latestRepos = sortedRepos.slice(0, 5);
    latestRepos.map(repo => {
        htmlOutput += getItemsGroupTemplate(repo);
    });
    document.getElementById('repositoryContent').innerHTML = htmlOutput;
}
async function setLatestReposOnScreen() {
    let title = "Latest Repositories";
    let latestRepos = await retrieveDataFromAPI();
    concatLatestReposOnHTML(latestRepos, getTitleTemplate(title));
}
function concatTotalStarsOnHTML(data, htmlOutput) {
    let total = sumRepositoriesStars(data);
    htmlOutput += getCardTemplate(total, "Total Stars");
    document.getElementById('repositoryContent').innerHTML = htmlOutput;
}
function sumRepositoriesStars(data) {
    return data.reduce((total, { stargazers_count }) => {
        return total += stargazers_count;
    }, 0);
}
async function setTotalStarsOnScreen() {
    let title = "All Obtained Stars";
    let repos = await retrieveDataFromAPI();
    concatTotalStarsOnHTML(repos, getTitleTemplate(title));
}
export { sumRepositoriesStars, getFormattedData, getFormattedDate, setRankedReposOnScreen, setLatestReposOnScreen, setTotalStarsOnScreen };
