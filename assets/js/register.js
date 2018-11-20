document.getElementById('registerUser').addEventListener('submit', registerUser);

const userError = document.getElementById('user-error');
const userSuccess = document.getElementById('user-success');
let error = '';
let success = '';
const accessToken = `Bearer ${getToken()}`;

function registerUser(e) {
  e.preventDefault();
  const userName = document.getElementById('name').value;
  const userPassword = document.getElementById('password').value;
  const userConfirm = document.getElementById('confirm').value;
  // Add a place to add a user as an admin

  fetch(`${url}auth/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: accessToken
    },
    body: JSON.stringify({
      name: userName,
      password: userPassword,
      confirm: userConfirm
    })
  })
    .then(res => res.json().then(data => ({ status: res.status, body: data })))
    .then((result) => {
      error = errorNotification(result);
      success = successNotification(result);
      if (result.status === 201) {
        userSuccess.innerHTML = success;
        setTimeout(() => {
          success = '';
          userSuccess.innerHTML = success;
          window.location.href = 'profile.html';
        }, 5000);
      } else {
        userError.innerHTML = error;
        setTimeout(() => {
          error = '';
          userError.innerHTML = error;
        }, 5000);
      }
    });
}
