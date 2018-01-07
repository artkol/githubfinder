class Github {
  constructor() {
    this.client_id = '11614306705e32bd135e';
    this.client_secret = 'f3001d01c5f2559952f85b5f9b0fd2198bc0963f'; // not good idea
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return { profile, repos };
  }
}

export const github = new Github();
