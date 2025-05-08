# Asyncronismo-Dom

🛒 Visualizador de Productos con Búsqueda - Fake Store API
Este proyecto es una aplicación web sencilla que permite visualizar productos obtenidos desde una API externa (Fake Store API). Ofrece funcionalidades como búsqueda por título, visualización de detalles e indicador de carga.

🚀 Funcionalidades
🔍 Búsqueda de productos por título (en tiempo real al presionar el botón de búsqueda).

🖼️ Visualización de productos en tarjetas con imagen, título, precio y descripción.

⏳ Indicador de carga mientras se obtienen los datos de la API.

❌ Manejo de errores en caso de que la API falle.

🧩 Tecnologías usadas
HTML, CSS, JavaScript

Fake Store API como fuente de datos

📁 Estructura del Código
showLoading(show)
Muestra u oculta un cuadro de diálogo tipo loading (cargando) al recibir true o false.

displayProducts(products)
Renderiza la lista de productos en el DOM. Si la lista está vacía, muestra un mensaje de “No se encontraron productos”.

fetchProducts(callback)
Realiza la solicitud fetch a la API y pasa los datos a la función de callback proporcionada. También gestiona el indicador de carga.

searchProduct()
Filtra los productos obtenidos en base al texto introducido por el usuario en el campo de búsqueda.

window.onload
Carga automáticamente todos los productos cuando se abre la página por primera vez.

🖥️ Vista previa esperada
Lista de productos con imagen, título, precio y descripción.

Input de búsqueda para filtrar productos por nombre.

Indicador de carga (ej. spinner) al buscar productos.

🔧 Cómo usar
Clona el repositorio o copia el código.

Abre el archivo HTML en tu navegador.

Escribe en el campo de búsqueda para filtrar productos por título.

¡Explora los productos disponibles!

📦 Fuente de datos
Los productos son obtenidos desde: https://fakestoreapi.com/products
