const { sql } = require( 'slonik' );

const selectAllProducts = () => sql.unsafe`

    SELECT * FROM products

`

module.exports = {
    selectAllProducts,
}