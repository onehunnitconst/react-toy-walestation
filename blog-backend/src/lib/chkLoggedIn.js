const chkLoggedIn = ( ctx, next ) => {
    if (!ctx.state.user) {
        ctx.status = 401;
        return;
    }
    return next();
}

module.exports = chkLoggedIn;
