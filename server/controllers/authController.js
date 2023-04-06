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
        msg: error.message || "Ups, hubo un error en REGISTER!",
      });
    }
  },

//* Permite que el usuario inicie sesión
  login: async (req, res) => {
    try {
      return res.status(200).json({
        ok: true,
        msg: "Usuario Logueado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, hubo un error en LOGIN!",
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

  //* Permite enviar token si el usuario olvida su contraseña
  // Envía un código alfanumérico al usuario en caso que olvide su contraseña
  sendToken: async (req, res) => {
    try {
      return res.status(200).json({
        ok: true,
        msg: "Token Enviado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, hubo un error en SEND-TOKEN!",
      });
    }
  },

  //* Permite verificar que el token sea correcto
  // Corrobora que el token introducido por el usuario sea igual al token enviado
  verifyToken: async (req, res) => {
    try {
      return res.status(200).json({
        ok: true,
        msg: "Token Verificado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, hubo un error en VERIFY-TOKEN!",
      });
    }
  },

  changePassword: async (req, res) => {
    try {
      return res.status(201).json({
        ok: true,
        msg: "Contraseña Actualizada",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, hubo un error en CHANGE-PASSWORD!",
      });
    }
  },
};
