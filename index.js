let fs = require('fs')
  , ini = require('ini');

let fileStr = fs.readFileSync('../appserver.ini', 'utf-8');

let sections = fileStr.match(/\[(.*)\]/g);

sections.forEach(function (section) {
  sectionFix = section.replace(/\./g, "_");
  fileStr = fileStr.replace(section, sectionFix);
}, this);

let config = ini.parse(fileStr);
let log = "";

// ---------------------------------------------
// - LOADING THE RETURN OF THE MODULES.
// ---------------------------------------------
let httpModule = require('./http.js')(config);
log += httpModule;
console.error(httpModule);

let userId = require('./user_protheus.js')(config);
log += userId;
console.error(userId);

let restPattern = require('./rest.js')(config);
log += restPattern;
console.log(restPattern);

fs.writeFileSync("portal-meurh-config.log", log);