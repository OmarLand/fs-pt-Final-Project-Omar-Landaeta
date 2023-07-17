const PATH = "/auth";

export const login = ( client ) => async( params ) => {
    try {

        const { data } = await client.post(`${PATH}/signin`, params)
        console.info('===> Login Auth data: ', data);
        return data;
    
    } catch (error) {

        console.info('===> Error en el login: ', error.message);
        return { sucess: false }
        
    }
}

// Registro de nuevo usuario:
export const register = ( client ) => async( params ) => {

    try {
        const { data } = await client.post(`${PATH}/signup`, params);
        console.info('===> [Service] Registrando Data Usuario : ', data);
        return data;
    } catch (error) {
        console.info('===> [Service] Error al registrar usuario: ', error.message );
        return { success: false }
    }
}

// Para hacer LogOut
export const logout = (client) => async () => {
    try {
      const { data } = await client.post(`${PATH}/signout`);
      console.info('> Eliminando la cookie correctamente <');
      return data
    } catch (error) {
      console.info(">> Error [logout]: ", error.message);
      return {
        success: false,
      };
    }
  };