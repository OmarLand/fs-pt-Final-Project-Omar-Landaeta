module.exports = () => async (req, res, next) => {
    const { users } = res.locals

    res.status(200).json({
        success: true,
        // data: {
        //     username: users.username,
        // },
    })
}