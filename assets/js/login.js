document.getElementById('LoginUser').addEventListener('submit', LoginUser);

function errorNotification(res){
    return `<p>${res.msg}</p>`;
}

function setToken(res){
    localStorage.setItem("token", res.access_token)
}

function LoginUser(e){
    e.preventDefault();
    let user_name = document.getElementById('name').value;
    let user_password = document.getElementById('password').value;
    // let output = document.getElementById('output');
    fetch('https://ken-online-store.herokuapp.com/api/v2/auth/login', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify({name:user_name, password:user_password})
    })
    .then((res) => res.json())
    .then((res) => {
        let msg = errorNotification(res);
        if(res.msg == "User Successfully logged in"){
            setToken(res);
            window.location.href = 'pages/profile.html'
        }
        else{
            document.getElementById('user-error').innerHTML = msg;
            setTimeout(() => {
                let msg = "";
                document.getElementById('user-error').innerHTML = msg;
            }, 5000)
        }
    })                    
}

