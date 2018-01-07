class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }
  showProfile(user) {
    this.profile.innerHTML = `
        <div class="profile--wrapper">
          <div class="profile--avatar">
            <img class="profile--image" alt="profile image" src="${
              user.avatar_url
            }">
            <a class="profile--url" href="${
              user.html_url
            }" target="_blank">View profile</a>
          </div>
          <div class="profile--info">
          <ul class="profile--list">
            <li class="profile--list-elem">Public repos: ${
              user.public_repos
            }</li>
            <li class="profile--list-elem">Public gists: ${
              user.public_gists
            }</li>
            <li class="profile--list-elem">Followers: ${user.public_repos}</li>
            <li class="profile--list-elem">Following: ${user.following}</li>
            <li class="profile--list-elem">Company: ${user.company}</li>
            <li class="profile--list-elem">Member since: ${user.created_at}</li>
            </ul>
          </div>
        </div>

   `;
  }

  showRepos(repos) {
    let output = 'Public repos: ';
    repos.forEach(repo => {
      output += `
         <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      `;
    });
    document.querySelector('#repos').innerHTML = output;
  }

  showReposBlank() {
    let output = 'Public repos not found';

    document.querySelector('#repos').innerHTML = output;
  }

  showAlert(msg, className) {
    this.clearAlertMsg();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(msg));
    document.querySelector('.search--notfound').appendChild(div);

    setTimeout(() => {
      this.clearAlertMsg();
    }, 2000);
  }
  clearAlertMsg() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  clearProfile() {
    this.profile.innerHTML = '';
  }
}

export const ui = new UI();
