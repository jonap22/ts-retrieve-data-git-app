import { getFormattedDate } from "../injector.js";
class RepositoryTemplate {
    data;
    constructor(data) {
        this.data = data;
    }
    getRepositoryName() {
        return `<li class="list-group-item"><strong>Repository name:</strong> ${this.data.name}</li>`;
    }
    getCreatedDate() {
        return `<li class="list-group-item"><strong>Created on:</strong> ${getFormattedDate(this.data.created_at)}</li>`;
    }
    getDescription() {
        return `<li class="list-group-item"><strong>Description:</strong> ${this.data.description}</li>`;
    }
    getStargazersCount() {
        return `<li class="list-group-item"><strong>Stars number:</strong> ${this.data.stargazers_count}</li>`;
    }
    getRepoURL() {
        return `<li class="list-group-item"><strong>Repo URL:</strong> ${this.data.url}</li>`;
    }
    render() {
        return `
      <ul class="list-group mb-3 mx-auto">
        ${this.getRepositoryName()}
        ${this.getCreatedDate()}
        ${this.getDescription()}
        ${this.getStargazersCount()}
        ${this.getRepoURL()}
      </ul>
    `;
    }
}
function getTitleTemplate(title) {
    return `<h2 class='mb-4'>${title}</h2>`;
}
function getCardTemplate(value, title) {
    return `
    <div class="card card-body mb-3">
      <p><strong>${title}:</strong> ${value}</p>
    </div>
  `;
}
export { RepositoryTemplate, getTitleTemplate, getCardTemplate };
