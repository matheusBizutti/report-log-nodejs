function restValid(config) {
    let message = '';

    for (var section in config) {
        for (var key in config[section]) {
            if (key.toUpperCase() === "DEFAULTPAGE") {
                message += "Encontrado um portal em [" + section.replace(/_/g, ".") + "]";
                message += "\r\npath: " + config[section].path;
                message += "\r\nENABLE: " + config[section].enable;
                message += "\r\nENVIRONMENT: " + config[section].environment;
                message += "\r\n\r\n";
            }

            if (key.toLocaleUpperCase() == "PUBLIC" && config[section][key].toLowerCase() === "fwjwt/refresh_token,auth") {

                message += "Encontrado um rest em [" + section + "]";
                message += "\r\nURL: " + config[section].url;
                message += "\r\nPrepare: " + config[section].preparein;
                message += "\r\nCORSEnable: " + config[section].corsenable;
                message += "\r\nAllowOrigin: " + config[section].alloworigin;
                message += "\r\n\r\n";
            }
        }
    }

    return message;
}

module.exports = function (config) {
    return restValid(config);
}