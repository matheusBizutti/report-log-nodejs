let fs = require('fs');
let ini = require('ini');
let httpModule = '';
let userId = '';
let restPattern = '';

let fileStr = fs.readFileSync('../appserver.ini', 'utf-8');
let sections = fileStr.match(/\[(.*)\]/g);
let config = {};
let log = "";

sections.forEach(function (section) {
  sectionFix = section.replace(/\./g, "_");
  fileStr = fileStr.replace(section, sectionFix);
}, this);

config = ini.parse(fileStr.toLowerCase());

// ---------------------------------------------
// - LOADING THE RETURN OF THE MODULES.
// ---------------------------------------------
httpModule = require('./http.js')(config);
log += httpModule;
console.error(httpModule);

userId = require('./user_protheus.js')(config);
log += userId;
console.error(userId);

restPattern = require('./rest.js')(config);
log += restPattern;
console.log(restPattern);

fs.writeFileSync("portal-meurh-config.log", log);