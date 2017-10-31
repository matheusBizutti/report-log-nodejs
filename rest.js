function restValid(config) {
    let message = '';

    for (var section in config) {
        for (var key in config[section]) {
            if (key.toUpperCase() === "DEFAULTPAGE") {
                message += "Encontrado um portal em [" + section.replace(/_/g, ".") + "]";
                message += "\r\npath: " + config[section].PATH;
                message += "\r\nENABLE: " + config[section].ENABLE;
                message += "\r\nENVIRONMENT: " + config[section].ENVIRONMENT;
                message += "\r\n\r\n";
            }

            if (key.toLocaleUpperCase() == "PUBLIC" && config[section][key].toLowerCase() === "fwjwt/refresh_token,auth") {

                message += "Encontrado um rest em [" + section + "]";
                message += "\r\nURL: " + config[section].URL;
                message += "\r\nPrepare: " + config[section].PrepareIn;
                message += "\r\nCORSEnable: " + config[section].CORSEnable;
                message += "\r\nAllowOrigin: " + config[section].AllowOrigin;
                message += "\r\n\r\n";
            }
        }
    }

    return message;
}

module.exports = function (config) {
    return restValid(config);
}