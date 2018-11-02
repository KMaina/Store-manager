document.getElementById('addProduct').addEventListener('submit', addProduct)

function errorNotification(res){
    return `<p>${res.msg}</p>`;
}

function addProduct(e){
    e.preventDefault();
    let product_name = document.getElementById('name').value;
    let product_amount = document.getElementById('amount').value;
    let product_reorder = document.getElementById('reorder').value;
    let product_price = document.getElementById('price').value;

    fetch('https://ken-online-store.herokuapp.com/api/v2/products', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': 'POST'
        },
        body:JSON.stringify({name:product_name, quantity:parseInt(product_amount), product_cost:parseInt(product_price), reorder:parseInt(product_reorder)})
        
    })
    .then(res =>  res.json().then(data => ({status: res.status, body: data})))
    .then((result) => {
        if(result.status == 403){
            window.location.href = 'profile.html'
        }
        console.log(result.status)
        let msg = errorNotification(res);
        if(res.status == 201){
            document.getElementById('user-success').innerHTML = msg;
            setTimeout(() => {
                let msg = "";
                document.getElementById('user-success').innerHTML = msg;
            }, 5000)
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