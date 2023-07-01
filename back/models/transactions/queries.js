const { sql } = require( 'slonik' );

const selectAllTransactions = () => sql.unsafe`

    SELECT * FROM transactions

`

module.exports = {
    selectAllTransactions,
}