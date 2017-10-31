function validPort(config){
    let message = 'Portas OK\r\n\r\n';
    if(config.http.port == config.RESTCONFIG.restPort){
        message = 'A porta [HTTP]: ' + config.http.port + ' deve ser diferente da porta [RESTCONFIG]: ' + config.RESTCONFIG.restPort + '\r\n';
    }
    return message;
}

module.exports = function(config){
    return validPort(config);
}