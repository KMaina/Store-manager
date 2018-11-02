document.getElementById('LoginUser').addEventListener('submit', LoginUser);

function LoginUser(e){
    e.preventDefault();
    let user_name = document.getElementById('name').value;
    let user_password = document.getElementById('password').value;

    fetch(url + 'auth/login', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify({name:user_name, password:user_password})
    })
    .then(res =>  res.json().then(data => ({status: res.status, body: data})))
    .then((result) => {
        let error = errorNotification(result);
        let success = successNotification(result);
        if(result.status == 200){
            setToken(result);
            document.getElementById('user-success').innerHTML = success;
            setTimeout(() => {
                let success = "";
                document.getElementById('user-success').innerHTML = success;
                window.location.href = 'pages/profile.html'
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

