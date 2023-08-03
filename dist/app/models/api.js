function getURL() {
    return "https://api.github.com/orgs/stackbuilders/repos";
}
async function retrieveDataFromAPI() {
    let response = await fetch(getURL());
    if (!response.ok) {
        alert("HTTP-Error: " + response.status);
        return [];
    }
    let data = await response.json();
    return await getFormattedData(data);
}
async function getFormattedData(responseData) {
    return responseData.map(repo => {
        const { stargazers_count, description, name, created_at, url } = repo;
        return { stargazers_count, description, name, created_at, url };
    });
}
export { retrieveDataFromAPI, getFormattedData };
