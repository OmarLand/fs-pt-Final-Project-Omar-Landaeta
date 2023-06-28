const { sql } = require( 'slonik' );

const selectAllSuppliers = () => sql.unsafe`

    SELECT * FROM suppliers

`

module.exports = {
    selectAllSuppliers,
}