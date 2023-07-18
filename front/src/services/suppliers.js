const PATH = "/suppliers";

// Muestro todos los proveedores:
export const infoSup = ( client ) => async() => {

    try {

        const { data : response } = await client.get(`${PATH}`);
        console.info('==> Info Suppliers Data Service: ', response);
        return response.data;
        
    } catch (error) {

        console.info('===> Error info Suppliers: ', error.message);
        return null;
    
    }

}


// Registro de nuevo Proveedor:
export const registerSup = ( client ) => async( params ) => {

    try {
        const { data } = await client.post(`${PATH}/new`, params);
        console.info('===> [Service] Registrando Data Usuario : ', data);
        return data;
    } catch (error) {
        console.info('===> [Service] Error al registrar usuario: ', error.message );
        return { success: false }
    }
}