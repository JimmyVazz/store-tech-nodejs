const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productoSchema = new Schema(
  {
    nombre: String,
    precio: Number,
    marca: String,
    caracteristicas: String,
    urlImagen: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Producto", productoSchema);
