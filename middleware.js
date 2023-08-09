const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');

module.exports = function (req, res, next) {
let apiKey = req.headers["x-api-key"];
if(!apiKey){
    return res.status(401).send({message:"Error: api key not present"});
    }
console.log("apiKey",apiKey)
let keyStoreFile = fs.readFileSync(VALID_KEYS_PATH,"utf8");
console.log("keyStoreFile",keyStoreFile)
if(!keyStoreFile.includes(apiKey)){
return res.status(401).send({message:"Error: Wrong api key"});
}
next();
};
