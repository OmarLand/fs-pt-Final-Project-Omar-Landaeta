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

// Registro de nuevo Producto:
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

// Edición de nuevo Producto:
export const editingProd = ( client ) => async( params ) => {

    try {
        const { data } = await client.put(`${PATH}/edit/:id`, params);
        console.info('===> [Service] Editando Data Producto : ', data);
        return data;
    } catch (error) {
        console.info('===> [Service] Error al editar el Producto : ', error.message );
        return { success: false }
    }
    
}

// Eliminar de nuevo Producto:
export const deleteProd = ( client ) => async( params ) => {

    try {
        const { data } = await client.delete(`${PATH}/edit/:id`, params);
        console.info('===> [Service] Editando Data Producto : ', data);
        return data;
    } catch (error) {
        console.info('===> [Service] Error al editar el Producto : ', error.message );
        return { success: false }
    }

}
