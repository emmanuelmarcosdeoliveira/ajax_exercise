document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector("#name");
  const userNameElement = document.querySelector("#username");
  const avatarElement = document.querySelector("#avatar");
  const reposElement = document.querySelector("#repos");
  const followersElement = document.querySelector("#followers");
  const followingElement = document.querySelector("#following");
  const linkElement = document.querySelector("#link");
  const mybio = document.querySelector('#bio');
  const endpoint = "https://api.github.com/users/emmanuelmarcosdeoliveira";
  fetch(endpoint)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (json) {
      nameElement.innerText = json.name;
      userNameElement.innerText = json.login;
      avatarElement.src = json.avatar_url;
      followersElement.innerText = json.followers;
      followingElement.innerText = json.following;
      reposElement.innerText = json.public_repos;
      linkElement.href = json.html_url;
      mybio.innerText = json.bio
    });
});
