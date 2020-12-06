const express = require("express");
const router = express.Router();

const producto = require("../useCases/producto");

// Ruta para guardar producto

//Request - Peticion
// Response - Respuesta
router.post("/create", async (req, res) => {
  //Sacar los datos del cliente de la req
  console.log("Info del cliente" + req.body);
  const { nombre, precio, marca, caracteristicas, urlImagen } = req.body;
  console.log("Nombre: " + nombre);
  console.log("Precio: " + precio);
  console.log("marca: " + marca);
  console.log("carcateristicas: " + caracteristicas);

  const newProducto = await producto.createProducto(
    nombre,
    precio,
    marca,
    caracteristicas,
    urlImagen
  );

  res.json({
    success: true,
    message: "Todo genial! Guardamos tus datos",
    data: {
      producto: newProducto,
    },
  });
});

module.exports = router;
