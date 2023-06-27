const { sql } = require( 'slonik' );

const insertUser = ( user, email, password ) => sql.unsafe`

    INSERT INTO users ( username, email, password )
    VALUES (
        ${user}, ${email}, ${password}
    );

`

const selectByEmail = ( email ) => sql.unsafe`
        SELECT email, password
        FROM users
        WHERE email LIKE ${email}
`

module.exports = {
    insertUser,
    selectByEmail,
}