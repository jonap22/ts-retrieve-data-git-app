import { setLatestReposOnScreen, setRankedReposOnScreen, setTotalStarsOnScreen } from "./app/api.js";
const button1 = document.getElementById("btnRankedRepos");
const button2 = document.getElementById("btnLatestRepositories");
const button3 = document.getElementById("btnStars");
button1?.addEventListener("click", async () => {
    setRankedReposOnScreen();
});
button2?.addEventListener("click", async () => {
    setLatestReposOnScreen();
});
button3?.addEventListener("click", async () => {
    setTotalStarsOnScreen();
});
console.log("herre");
