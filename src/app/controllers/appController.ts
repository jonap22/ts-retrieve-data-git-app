import { getElementById, addClickListener } from "../helpers/domHelper.js";
import { setLatestReposOnScreen, setRankedReposOnScreen, setTotalStarsOnScreen } from "../api.js";

function initializeApp() {
  const button1 = getElementById("btnRankedRepos");
  const button2 = getElementById("btnLatestRepositories");
  const button3 = getElementById("btnStars");

  addClickListener(button1, setRankedReposOnScreen);
  addClickListener(button2, setLatestReposOnScreen);
  addClickListener(button3, setTotalStarsOnScreen);
}

export { initializeApp };
