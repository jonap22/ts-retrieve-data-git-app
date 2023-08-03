import { retrieveDataFromAPI } from "./models/api.js";
import { getTitleTemplate } from "./models/template.js";
import { rankedReposConcatHelper, latestReposConcatHelper, totalStarsConcatHelper, alphabeticalReposConcatHelper, top5StarredReposConcatHelper, } from "./helpers/concatHelper.js";
function getFormattedDate(date) {
    return date.replace('T', ' at ').replace('Z', '');
}
async function setRankedReposOnScreen() {
    let title = "Best Repositories";
    let bestRepos = await retrieveDataFromAPI();
    injectData(bestRepos, getTitleTemplate(title), rankedReposConcatHelper);
}
async function setLatestReposOnScreen() {
    let title = "Latest Repositories";
    let latestRepos = await retrieveDataFromAPI();
    injectData(latestRepos, getTitleTemplate(title), latestReposConcatHelper);
}
async function setTotalStarsOnScreen() {
    let title = "All Obtained Stars";
    let repos = await retrieveDataFromAPI();
    injectData(repos, getTitleTemplate(title), totalStarsConcatHelper);
}
async function setAlphabeticalReposOnScreen() {
    let title = "Alphabetical Repositories (Excluding 'h' Repositories)";
    let repos = await retrieveDataFromAPI();
    injectData(repos, getTitleTemplate(title), alphabeticalReposConcatHelper);
}
async function setTop5StarredReposOnScreen() {
    let title = "Top 5 Starred Repositories";
    let repos = await retrieveDataFromAPI();
    injectData(repos, getTitleTemplate(title), top5StarredReposConcatHelper);
}
function injectData(data, titleTemplate, strategy) {
    let htmlOutput = titleTemplate + strategy(data);
    document.getElementById("repositoryContent").innerHTML = htmlOutput;
}
export { setRankedReposOnScreen, setLatestReposOnScreen, setTotalStarsOnScreen, setAlphabeticalReposOnScreen, setTop5StarredReposOnScreen, getFormattedDate, };
