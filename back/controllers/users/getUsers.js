//TODO: ASk about this shitty page to the TA

module.exports = () => async (req, res, next) => {
    const { username } = res.locals.user

    console.log( `Del getUser ${username}` )

    res.status(200).json({
        success: true,
        data: res.locals.user,
        // data: {
        //     username,
        // },
    })
}