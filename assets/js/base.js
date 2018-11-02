function errorNotification(res){
    return `<p>${res.body.error}</p>`;
}

function successNotification(res){
    return `<p>${res.body.success}</p>`;
}

function setToken(res){
    localStorage.setItem("token", res.body.access_token)
}

function getToken(){
    return localStorage.getItem('token')
}

let url = 'https://ken-online-store.herokuapp.com/api/v2/'