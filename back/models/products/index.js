const { sql } = require('slonik');
const { selectAllProducts } = require('./queries');


// Función que me trae todos los productos en pantalla
const getProducts = ( db ) => async () => {

    try {

        const response = await db.query( selectAllProducts() );
        return {
            ok : true,
            response: response.rows,
        }
        
    } catch (error) {
        console.info('==> Error con el SELECT -> : ', error);
        return{
            ok : false,
            message : error.message,
        }
    }

}

// Función que me permite meter más productos en mi DB
const addNewProduct = ( db ) => async( infoProduct ) => {

    try {

        await db.query(sql.unsafe`
            INSERT INTO products (
                name_prod,
                desc_prod,
                quant_prod,
                name_sup_product,
                supplier_id
            )
            VALUES (
                ${infoProduct.name_prod},
                ${infoProduct.desc_prod},
                ${infoProduct.quant_prod},
                ${infoProduct.name_sup_product},
                (SELECT id FROM suppliers WHERE name_sup = ${infoProduct.name_sup_product})
            )
        `)
        return {
            ok : true,
        }
        
    } catch (error) {
        console.info('Error al insertar el producto: =>>> ', error);
        return {
            ok      : false,
            message : error.message,
        }
    }

}

module.exports = {
    getProducts,
    addNewProduct,
}