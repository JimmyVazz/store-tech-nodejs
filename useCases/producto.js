//Importamos el modelo de BD - Producto
const Producto = require("../models/Producto");

// Funcion que crea un nuevo Producto
function createProducto(nombre, precio, marca, caracteristicas, urlImagen) {
  //Crear producto en la BD
  const productoNuevo = new Producto({
    nombre,
    precio,
    marca,
    caracteristicas,
    urlImagen,
  });
  //Guardarlo en la BD
  return productoNuevo.save();
}

module.exports = {
  createProducto,
};
