import { github } from './github';
import { ui } from './ui';

const searchUser = document.querySelector('#searchuser');
searchUser.addEventListener('keyup', e => {
  const userText = e.target.value;
  if (userText !== '') {
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        ui.showAlert('User not found', 'alert');
        ui.clearProfile();
        ui.showReposBlank();
        document.querySelector('#repos').innerHTML = '';
      } else {
        ui.showProfile(data.profile);
        if (data.repos.length === 0) {
          ui.showReposBlank();
        } else {
          ui.showRepos(data.repos);
        }
      }
    });
  } else {
    ui.clearProfile();
  }
});
