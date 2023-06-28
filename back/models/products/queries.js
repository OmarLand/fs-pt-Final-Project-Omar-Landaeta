const { sql } = require( 'slonik' );

const selectAllProducts = () => sql.unsafe`

    SELECT products.name_prod, products.desc_prod, products.quant_prod, 
    suppliers.name_sup, suppliers.contact_sup 
    FROM products 
    INNER JOIN suppliers 
    ON products.supplier_id = suppliers.id
    WHERE suppliers.name_sup = products.name_sup_product
    OR products.name_sup_product IS NULL


`

const selectProduct = (id = null ) => sql.unsafe`

    SELECT products.name_prod, products.desc_prod, products.quant_prod, 
    suppliers.name_sup, suppliers.contact_sup 
    FROM products 
    INNER JOIN suppliers 
    ON products.supplier_id = suppliers.id
    WHERE products.id = ${id}


`

module.exports = {
    selectAllProducts,
    selectProduct,
}