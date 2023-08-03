import { Repository } from "./interfaces/repository.ts";
declare function getTitleTemplate(title: string): string;
declare function getCardTemplate(value: number, title: string): string;
declare function getItemsGroupTemplate(data: Repository): string;
export { getCardTemplate, getTitleTemplate, getItemsGroupTemplate };
