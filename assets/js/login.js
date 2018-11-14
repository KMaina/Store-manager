import {
  errorNotification, setToken, url,
} from './base';

const userError = document.getElementById('user-error');
let error = '';
const loginUser = document.getElementById('LoginUser');
loginUser.addEventListener('submit', LoginUser);

function LoginUser(e) {
  e.preventDefault();
  const userName = document.getElementById('name').value;
  const userPassword = document.getElementById('password').value;

  fetch(`${url} + auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name: userName, password: userPassword }),
  })
    .then(res => res.json().then(data => ({ status: res.status, body: data })))
    .then((result) => {
      error = errorNotification(result);

      if (result.status === 200) {
        setToken(result);
        window.location.href = 'pages/profile.html';
      } else {
        userError.innerHTML = error;
        setTimeout(() => {
          error = '';
          userError.innerHTML = error;
        }, 5000);
      }
    });
}
