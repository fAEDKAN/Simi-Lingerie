module.exports = {

  //* Permite que el usuario se registre
  register: async (req, res) => {
    try {
      return res.status(201).json({
        ok: true,
        msg: "Usuario Registrado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, hubo un error en LOGIN!",
      });
    }
  },

//* Permite que el usuario inicie sesión
  register: async (req, res) => {
    try {
      return res.status(201).json({
        ok: true,
        msg: "Usuario Logueado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, hubo un error en REGISTER!",
      });
    }
  },

  //* Permite chequear si el usuario está registrado
  // Envía un mail con link para que el usuario confirme su registro
  checked: async (req, res) => {
    try {
      return res.status(201).json({
        ok: true,
        msg: "Usuario Chequeado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, hubo un error en CHECKED!",
      });
    }
  },
};
