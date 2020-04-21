module.exports = user => {
    const errors = [];
    if (!user.username || user.username.length < 2) {
        errors.push('username must be at least 2 characters long');
    }
    if (!user.password || user.password.length < 6) {
        errors.push('password must be at least 6 characters long');
    }

    return {
        isSuccessful: errors.length ? false : true,
        errors
    };
};