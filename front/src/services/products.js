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