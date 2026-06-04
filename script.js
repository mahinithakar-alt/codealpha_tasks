fetch("/api/products")
.then(res => res.json())
.then(data => {

    let output = "";

    data.forEach(product => {
        output += `
        <div class="card">
            <h2>${product.name}</h2>
            <p>₹${product.price}</p>
            <button>Add To Cart</button>
        </div>
        `;
    });

    document.getElementById("products").innerHTML = output;
});