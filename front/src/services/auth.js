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