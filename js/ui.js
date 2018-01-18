class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3" >
      <div class="row">
        <div class="col-md-3">
          <img src="${user.avatar_url}" alt="Image" class="img-fluid mb-2">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public repositories: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div> 
    `;
  };

  // Show users profiles
  showRepos(repos) {
    let output = '';

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
             <a href="${repo.html_url}" target="_blank">${repo.name}</a>  
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.querySelector('#repos').innerHTML = output;
  }


  // Clear Profile output
  clearProfile() {
    this.profile.innerHTML = '';
  }

  // Show alert message
  showAlert(message, className) {
    // Clear alerts
    this.clearAlerts();
    // Create div
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchContainer');
    // Get search
    const search = document.querySelector('.search');
    // Add alert
    container.insertBefore(div, search);
    // Delete alert message after timer
    setTimeout(() => {
      this.clearAlerts();
    }, 3000);
  }

  // Clear alerts
  clearAlerts() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}