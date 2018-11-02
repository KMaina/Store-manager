function errorNotification(res){
    return `<p>${res.msg}</p>`;
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
    .then((data) => {
        let products = data.users;
        let products_table = document.getElementById('showProducts');
        th = `
        <tr>
        <th>Product ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>In Stock</th>
        <th>Amount</th>
        <th>Add</th>
        </tr>
        `
        products_table.innerHTML = th
        products.forEach(product => { 
            products_table.innerHTML += '<tr>'+
                '<td>'+product.product_id+'</td>'+
                '<td>'+product.product_name+'</td>'+
                '<td>'+product.product_cost+'</td>'+
                '<td>'+product.quantity+'</td>'+
                '<td><input type="text" class="form-text" placeholder="Amount" id=""></td>'+
                '<td><input type="submit" class="submit" value="Add"></td>'+
                '</tr>';
        })
    })
    .catch((err) => console.log(err)) // display in notification
}

// function out(data){
//     console.log(data.users)
//         let output = '<h1>All Products</h1>';
//         data.foreach(function(product){
//             show += `
//                 <tr>
//                 <td>${product.product_id}<td>
//                 <td>${product.product_name}</td>
//                 <td>${product.product_cost}</td>
//                 <td>${product.quantity}</td>
//                 <td><input type="text" class='form-text' placeholder="Amount" id=""></td>
//                 <td><input type="submit" class='submit' value="Add"></td>
//                 </tr>
//             `;
//         });
//         document.getElementById('output').innerHTML = show;
// }