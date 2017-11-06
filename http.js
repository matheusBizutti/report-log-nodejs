function validPort(config){
    let message = 'As portas HTTP: ' + config.http.port + ' e REST: ' + config.restconfig.restport +  ' estão corretas.\r\n\r\n';
    if(config.http.port == config.restconfig.restport){
        message = 'A porta [HTTP]: ' + config.http.port + ' deve ser diferente da porta [RESTCONFIG]: ' + config.restconfig.restport + '\r\n';
    }
    return message;
}

module.exports = function(config){
    return validPort(config);
}