document.getElementById('registerUser').addEventListener('submit', registerUser);

function registerUser(e){
    e.preventDefault();
    let user_name = document.getElementById('name').value;
    let user_password = document.getElementById('password').value;
    let user_confirm = document.getElementById('confirm').value;

    fetch(url + 'auth/signup', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json',
            'Authorization': 'Bearer ' + getToken()
        },
        body:JSON.stringify({name:user_name, password:user_password, confirm:user_confirm})
    })
    .then(res =>  res.json().then(data => ({status: res.status, body: data})))
    .then((result) => {
        let error = errorNotification(result);
        let success = successNotification(result);
        if(result.status == 201){
            document.getElementById('user-success').innerHTML = success;
            setTimeout(() => {
                let success = "";
                document.getElementById('user-error').innerHTML = success;
                window.location.href = 'profile.html'
            }, 5000)
        }
        else{
            document.getElementById('user-error').innerHTML = error;
            setTimeout(() => {
                let error = "";
                document.getElementById('user-error').innerHTML = error;
            }, 5000)
        }
    })
}