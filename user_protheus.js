function userValid(config) {
    let message = 'Usuário do Protheus presente na sessão [RESTCONFIG]: ' + config.restconfig.userid + "\r\n\r\n";
    if (!config.restconfig || !config.restconfig.userid || config.restconfig.userid.trim().toLowerCase() == 'admin') {
        message = 'O usuário do Protheus deve estar preenchido e não ser Admin.\r\n\r\n';
    }

    return message;
}

module.exports = function (config) {
    return userValid(config);
}