const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';

module.exports = function (req, res, next) {
let apiKey = req.header.x-api-key;
let keyStoreFile = fs.readFileSync(VALID_KEYS_PATH,"utf-8")
if(!keyStoreFile.includes(apiKey)){
return res.status(401).send({message:"Error: Wrong api key"});
}
next();
};
