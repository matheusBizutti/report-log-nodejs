function userValid(config) {
    let message = 'Usuário do Protheus presente na sessão [RESTCONFIG]: ' + config.RESTCONFIG.userId + "\r\n\r\n";
    if (!config.RESTCONFIG || !config.RESTCONFIG.userId || config.RESTCONFIG.userId.trim().toLowerCase() == 'admin') {
        message = 'O usuário do Protheus deve estar preenchido e não ser Admin.\r\n\r\n';
    }

    return message;
}

module.exports = function (config) {
    return userValid(config);
}