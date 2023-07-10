export const login = ( client ) => async( params ) => {
    try {

        const { data } = await client.post('/auth/signin', params)
        console.info('===> Login data: ', data);
    
    } catch (error) {

        console.info('===> Error en el login: ', error.message);
        
    }
}