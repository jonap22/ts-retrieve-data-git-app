import { getFormattedDate } from "./api";
import { Repository } from "./interfaces/repository";

function getTitleTemplate(title: string) {
    return `<h2 class='mb-4'>${title}</h2>`;
}

function getCardTemplate(value: number, title: string) {
    return `
        <div class="card card-body mb-3">
            <p><strong>${title}:</strong> ${value}</p>
        </div>
    `
}

function getItemsGroupTemplate(data: Repository) {
    let template =  `
            <ul class="list-group mb-3 mx-auto">
                <li class="list-group-item"><strong>Repository name:</strong> ${data.name}</li>
                <li class="list-group-item"><strong>Created on:</strong> ${getFormattedDate(data.created_at)}</li>
                <li class="list-group-item"><strong>Description:</strong> ${data.description}</li>
                <li class="list-group-item"><strong>Stars number:</strong> ${data.stargazers_count}</li>
                <li class="list-group-item"><strong>Repo URL:</strong> ${data.url}</li>
            </ul>
        `
    return template;
}

export {
    getCardTemplate,
    getTitleTemplate,
    getItemsGroupTemplate
}