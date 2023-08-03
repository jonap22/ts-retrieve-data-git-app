import { Repository } from "../app/models/repository";
import { RepositoryTemplate } from "../app/models/template";

const mockRepository: Repository = {
  stargazers_count: 10,
  description: "Test Repo",
  name: "test-repo",
  created_at: "2023-07-28T12:00:00Z",
  url: "https://github.com/test-repo",
};

describe("RepositoryTemplate", () => {
  it("renders the repository data to HTML correctly", () => {
    const repositoryTemplate = new RepositoryTemplate(mockRepository);

    const expectedHTML = `
      <ul class="list-group mb-3 mx-auto">
        <li class="list-group-item"><strong>Repository name:</strong> test-repo</li>
        <li class="list-group-item"><strong>Created on:</strong> 2023-07-28 at 12:00:00</li>
        <li class="list-group-item"><strong>Description:</strong> Test Repo</li>
        <li class="list-group-item"><strong>Stars number:</strong> 10</li>
        <li class="list-group-item"><strong>Repo URL:</strong> https://github.com/test-repo</li>
      </ul>
    `;

    expect(repositoryTemplate.render()).toBe(expectedHTML);
  });
});
