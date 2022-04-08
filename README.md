# Tienda Online Amiibo

El sistema permite :

    1- Listar todos los personajes amiibos obtenidos de la api https://amiiboapi.com/
    2- Filtrar busqueda por tipo de producto
    3- Seleccionar algun personaje de la lista de productos
    4- Agregar y Quitar al carrito desde la vista de lista de productos (+1 y -1)
    5- Mostrar detalle del producto en una vista de detalle
    6- Agregar y quitar al carrito desde la vista detalle
    7- Mostar y ocular carrito
    8- Ir a checkout 
    9- Muestra detalle de la compra donde permite modificar cantidades
    10- finalizar la compra resetea los valores y vuelve al product list


## Ejecución

### Indicaciones 
- Instalar dependencias mediante comando "yarn"
- El archivo **.env**, posee la variable de entorno **REACT_APP_API_AMIIBO** para conectarse al servicio de amiibo (para la utilizacion de variables entornos de react se debe usar el prefijo REACT_APP)

- Por ultimo ejecutar el comando "yarn start" para iniciar el proyecto, por defecto React.Js utiliza el puerto **3000**.