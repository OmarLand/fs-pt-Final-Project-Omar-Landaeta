export const info = ( client ) => async() => {

    try {

        const { data } = await client.get('/users/');
        console.info('==> Info data user: ', data);
        
    } catch (error) {
        console.info('===> Error info user: ', error.message);
    }

}