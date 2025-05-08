function showLoading(show) {
    const dialog = document.getElementById('loading-dialog');
    dialog.style.display = show ? 'flex' : 'none';
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    if (products.length === 0) {
        productList.innerHTML = '<p>No se encontraron productos.</p>';
        return;
    }
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <div class="product-details">
            <h2>${product.title}</h2>
            <p><strong>Precio:</strong> $${product.price}</p>
            <p>${product.description}</p>
            </div>
        `;
        productList.appendChild(div);
    });
}

function fetchProducts(callback) {
    // llamamos a la funcion que nos mostrara un cuadro de dialogo al buscar y cargar un producto
    showLoading(true);
    // Realizamos la conexion a la Api que contiene los datos
    fetch('https://fakestoreapi.com/products')
        .then(r => r.json())
        .then(data => {
            showLoading(false);
            // Llamamos a la fucion que ordenara los datos convertidos a .json
            callback(data);
        })
        .catch(e => {
            showLoading(false);
            console.error('Error al obtener productos:', e);
        });
}

function searchProduct() {
    const term = document.getElementById('search-input').value.toLowerCase();
    fetchProducts(data => {
        const filtered = data.filter(product =>
            product.title.toLowerCase().includes(term)
        );
        displayProducts(filtered);
    });
}

// Cargar productos al inicio
window.onload = () => {
    fetchProducts(displayProducts);
};
