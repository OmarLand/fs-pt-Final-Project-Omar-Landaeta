const PATH = "/users";

export const info = ( client ) => async() => {

    try {

        const { data : response } = await client.get(`${PATH}`);
        console.info('==> Info User Data Service: ', response);
        return response.data;
        
    } catch (error) {

        console.info('===> Error info user: ', error.message);
        return null;
    
    }

}