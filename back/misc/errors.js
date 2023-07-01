module.exports = {
    400: {
      statusCode: 400,
      error: new Error("Hay Campos ¡Obligatorios!"),
    },
    wrong_data: {
      statusCode: 400,
      error: new Error("Usuario o contraseña invalida."),
    },
    pass_length: {
      statusCode: 400,
      error: new Error("El Password debe contener al menos 4."),
    },
    401: {
      statusCode: 401,
      error: new Error("Unauthorized"),
    },
    timeout_access: {
      statusCode: 401,
      error: new Error(" Oh oh! Por seguridad, ha expirado la sesión...!"),
    },
    403: {
      statusCode: 403,
      error: new Error("forbidden"),
    },
    404: {
      statusCode: 404,
      error: new Error("===> No encuentro la ruta..."),
    },
    500: {
      statusCode: 500,
      error: new Error("===> ¡Woops! Algo esta mal."),
    },
  };