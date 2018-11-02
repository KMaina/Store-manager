function out(data){
    let products = data.products;
    let products_table = document.getElementById('showProducts');
    th = `
    <tr>
    <th>Product ID</th>
    <th>Name</th>
    <th>Price</th>
    <th>In Stock</th>
    <th>Reorder Amount</th>
    <th>Edit</th>
    <th>Delete</th>
    </tr id="getProducts">
    `
    products_table.innerHTML = th
    products.forEach(product => { 
        products_table.innerHTML += '<tr>'+
            '<td>'+product.product_id+'</td>'+
            '<td>'+product.product_name+'</td>'+
            '<td>'+product.product_cost+'</td>'+
            '<td>'+product.quantity+'</td>'+
            '<td>'+product.reorder+'</td>'+
            '<td><a onclick="getSingleProduct('+product.product_id+')"><div class="approve-button">Edit</div></a></td>'+
            '<td><a href="delete_product.html"><div class="delete-button">Delete</div></a></td>'+
            '</tr>';
    })
}

window.onload = function getProducts(e) {
    e.preventDefault();
    fetch('https://ken-online-store.herokuapp.com/api/v2/products',{
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': 'GET'
        }
    })
    .then((res) => res.json())
    .then((data) => {out(data)})
    .catch((err) => console.log(err))
}

window.onload = document.getElementById('getSingleProduct').addEventListener('onclick', getSingleProduct)

function getSingleProduct(element){
    
    window.location.href = 'edit_product.html'
    // url = 'https://ken-online-store.herokuapp.com/api/v2/products/' + element;
    console.log('https://ken-online-store.herokuapp.com/api/v2/products/' + element)
    fetch('https://ken-online-store.herokuapp.com/api/v2/products/' + element,{
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': 'GET',
            'Authentication': 'Bearer ' +localStorage.getItem('token')
        }
    })
    .then((res) => res.json())
    .then((dat) => console.log(data))
    .catch((err) => console.log(err))
}