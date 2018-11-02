document.getElementById('addProduct').addEventListener('submit', addProduct)


function addProduct(e){
    e.preventDefault();
    let product_name = document.getElementById('name').value;
    let product_amount = document.getElementById('amount').value;
    let product_reorder = document.getElementById('reorder').value;
    let product_price = document.getElementById('price').value;

    fetch(url + 'products', {
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
        let error = errorNotification(result);
        let success = successNotification(result);
        if(result.status == 201){
            document.getElementById('user-success').innerHTML = success;
            setTimeout(() => {
                let success = "";
                document.getElementById('user-success').innerHTML = success;
                window.location.href = 'new_product.html'
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