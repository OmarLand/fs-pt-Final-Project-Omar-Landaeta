const { sql } = require( 'slonik' );

const insertUser = ( user, email, password ) => sql.unsafe`

    INSERT INTO users ( username, email, password )
    VALUES (
        ${user}, ${email}, ${password}
    );

`

module.exports = {
    insertUser,
}