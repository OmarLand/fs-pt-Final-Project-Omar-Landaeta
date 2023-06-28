const { sql } = require('slonik');
const { selectAllSuppliers } = require('./queries');

// Selecciono todos los proveedores registrados en mi DB
const getSuppliers = ( db ) => async () => {

    try {

        const response = await db.query( selectAllSuppliers() );

        // console.info( '===> response: ', response );

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

// Inserto proveedores en la tabla de suppliers:
const createNewSupplier = ( db ) => async ( infoSupplier ) =>{
    try {

        await db.query(sql.unsafe`
            INSERT INTO suppliers ( name_sup, contact_sup, desc_sup )
            VALUES (
                ${infoSupplier.name_sup},
                ${infoSupplier.contact_sup},
                ${infoSupplier.desc_sup}
            )
        `)

        return {
            ok  :  true,
        }
        
    } catch (error) {
        // console.info('===> Error al crear Proveedor.. ->', error);
        return{
            ok      : false,
            message : error.message,
        }
    }
}

module.exports = {
    getSuppliers,
    createNewSupplier,
}