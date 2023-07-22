const { sql } = require('slonik');
const { selectAllProducts, selectProduct } = require('./queries');


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
                (SELECT id FROM suppliers WHERE name_sup LIKE ${infoProduct.name_sup_product})
            )
        `)
        return {
            ok : true
        }   

    } catch (error) {
        console.info('Error al insertar el producto: =>>> ', error);
        return {
            ok      : false,
            message : error.message,
        }
    }
}

const selectOneProduct = (db) => async( id = null ) => {
    try {

        const response = await db.query( selectProduct( id ) );

        console.log( 'Response: ==> ', response );

        return {
            ok       : true,
            response : response.rows
        }
        
    } catch (error) {
        return{
            ok      : false,
            message : error.message,
        }
    }
}

const updateTheProduct = ( db ) => async ( id, newContent  ) => {

    console.log('Entro en el Model El ID a modificar: ==> ', id);
    console.log('Entro en el Model Nuevo contenido: ==> ', newContent);

    try {

        await db.query(sql.unsafe`
            UPDATE products
            SET name_prod=${newContent.name_prod}, desc_prod=${newContent.desc_prod}, quant_prod=${newContent.quant_prod}
            WHERE id = ${id}
        `)

        return{
            ok      : true,
            message : 'Producto actualizado correctamente',
        }
        
    } catch (error) {
        console.info('Error al actualizar el producto. ==> ', error);
        return {
            ok : false,
            message: error.message,
        }
    }

}

const deleteTheProduct = ( db ) => async( id  ) => {

    console.log('Entro en el Model El ID para eliminar articulo: ==> ', id);

    try {

        await db.query( sql.unsafe`
            DELETE FROM products WHERE id = ${id}
        ` )
        return {
            ok : true,
            message: 'Producto eliminado correctamente.'
        }
        
    } catch (error) {
        console.info( 'Error al intentar eliminar el producto: ', error );
        return{
            ok      : false,
            message : error.message,
        }
    }

}

module.exports = {
    getProducts,
    addNewProduct,
    selectOneProduct,
    updateTheProduct,
    deleteTheProduct,
}