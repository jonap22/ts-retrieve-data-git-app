import { getFormattedDate } from "../injector.js";
import { Repository } from "./repository.js";

interface HTMLTemplate {
    render(): string;
}

class RepositoryTemplate implements HTMLTemplate {
    private data: Repository;

    constructor(data: Repository) {
        this.data = data;
    }

    private getRepositoryName(): string {
        return `<li class="list-group-item"><strong>Repository name:</strong> ${this.data.name}</li>`;
    }

    private getCreatedDate(): string {
        return `<li class="list-group-item"><strong>Created on:</strong> ${getFormattedDate(this.data.created_at)}</li>`;
    }

    private getDescription(): string {
        return `<li class="list-group-item"><strong>Description:</strong> ${this.data.description}</li>`;
    }

    private getStargazersCount(): string {
        return `<li class="list-group-item"><strong>Stars number:</strong> ${this.data.stargazers_count}</li>`;
    }

    private getRepoURL(): string {
        return `<li class="list-group-item"><strong>Repo URL:</strong> ${this.data.url}</li>`;
    }

    render(): string {
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

function getTitleTemplate(title: string): string {
    return `<h2 class='mb-4'>${title}</h2>`;
}

function getCardTemplate(value: number, title: string): string {
    return `
    <div class="card card-body mb-3">
      <p><strong>${title}:</strong> ${value}</p>
    </div>
  `;
}

export {
    RepositoryTemplate,
    getTitleTemplate,
    getCardTemplate
};
