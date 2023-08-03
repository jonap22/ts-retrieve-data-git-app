import { getElementById, addClickListener } from "../helpers/domHelper.js";
import { setAlphabeticalReposOnScreen, setLatestReposOnScreen, setRankedReposOnScreen, setTop5StarredReposOnScreen, setTotalStarsOnScreen } from "../injector.js";

function initializeApp() {
  const buttonRankedRepos = getElementById("btnRankedRepos");
  const buttonLatestRepos = getElementById("btnLatestRepositories");
  const buttonStars = getElementById("btnStars");
  const buttonAlphabeticalRepos = getElementById("btnAlphabeticalRepos");
  const buttonFiveBestRepos = getElementById("btnFiveBestRepos");


  addClickListener(buttonRankedRepos, setRankedReposOnScreen);
  addClickListener(buttonLatestRepos, setLatestReposOnScreen);
  addClickListener(buttonStars, setTotalStarsOnScreen);
  addClickListener(buttonAlphabeticalRepos, setAlphabeticalReposOnScreen);
  addClickListener(buttonFiveBestRepos, setTop5StarredReposOnScreen);
}

export { initializeApp };
