const PATH = "/products";

export const infoProd = ( client ) => async() => {

    try {

        const { data : response } = await client.get(`${PATH}`);
        console.info('==> Info Products Data Service: ', response);
        return response.data;
        
    } catch (error) {

        console.info('===> Error info user: ', error.message);
        return null;
    
    }

}

// Registro de nuevo usuario:
export const registerProd = ( client ) => async( params ) => {

    try {
        const { data } = await client.post(`${PATH}/register`, params);
        console.info('===> [Service] Registrando Data Productos : ', data);
        return data;
    } catch (error) {
        console.info('===> [Service] Error al registrar Productos : ', error.message );
        return { success: false }
    }
}
