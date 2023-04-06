module.exports = {
  //* Permite listar todos los productos
  productsList: async (req, res) => {
    try {
      return res.status(200).json({
        ok: true,
        msg: "Listado de Productos",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, hubo un error en PRODUCTS-LIST!",
      });
    }
  },

  //* Permite listar productos por ID
  productById: async (req, res) => {
    try {
      return res.status(200).json({
        ok: true,
        msg: "Detalle del Producto",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, hubo un error en PRODUCT-BY-ID!",
      });
    }
  },

  //* Permite crear productos
  productCreate: async (req, res) => {
    try {
      return res.status(201).json({
        ok: true,
        msg: "Producto Creado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, hubo un error en PRODUCT-CREATE!",
      });
    }
  },

  //* Permite actualizar productos
  productUpdate: async (req, res) => {
    try {
      return res.status(204).json({
        ok: true,
        msg: "Producto Actualizado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, hubo un error en PRODUCT-UPDATE!",
      });
    }
  },

  //* Permite eliminar productos
  productDelete: async (req, res) => {
    try {
      return res.status(204).json({
        ok: true,
        msg: "Producto Eliminado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, hubo un error en PRODUCT-DELETE!",
      });
    }
  },
};
