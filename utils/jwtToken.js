export const generateToken = (user, messsage, statusCode, res) => {
    const token = user.generateJsonWebToken();

    res.status(statusCode).cookie("token", token, {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 100
        ),
        httpOnly: true,
        sameSite: "None",
        secure: true,
    })
    .json({
        success: true,
        messsage,
        token,
        user,
    });
};