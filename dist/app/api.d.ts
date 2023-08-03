import { Repository } from "./interfaces/repository.ts";
declare function getFormattedData(responseData: Repository[]): Promise<Repository[]>;
declare function setRankedReposOnScreen(): Promise<void>;
declare function getFormattedDate(date: string): string;
declare function setLatestReposOnScreen(): Promise<void>;
declare function sumRepositoriesStars(data: Repository[]): number;
declare function setTotalStarsOnScreen(): Promise<void>;
export { sumRepositoriesStars, getFormattedData, getFormattedDate, setRankedReposOnScreen, setLatestReposOnScreen, setTotalStarsOnScreen };
