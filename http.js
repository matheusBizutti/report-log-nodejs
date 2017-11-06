function validPort(config){
    let message = 'Portas OK\r\n\r\n';
    if(config.http.port == config.restconfig.restport){
        message = 'A porta [HTTP]: ' + config.http.port + ' deve ser diferente da porta [RESTCONFIG]: ' + config.restconfig.restport + '\r\n';
    }
    return message;
}

module.exports = function(config){
    return validPort(config);
}