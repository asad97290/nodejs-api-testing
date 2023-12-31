const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res) {
  let newApiKey = shortid.generate();
  fs.appendFileSync(VALID_KEYS_PATH,newApiKey+LINE_ENDING);
  return  res.send({apiKey:newApiKey})
};

