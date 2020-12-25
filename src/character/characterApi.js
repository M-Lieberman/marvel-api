require('dotenv').config();

function getCharacter() {

  const ts = new Date().getTime();
  const CryptoJS = require("crypto-js");
  const hash = CryptoJS.MD5(ts + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_API_KEY).toString();
  const axios = require('axios');
  
  const uri = 'https://gateway.marvel.com:443/v1/public/characters?name=hulk&ts=' + ts + '&apikey='
    + process.env.MARVEL_API_KEY + '&hash=' + hash;
  console.log(">>> uri= " + uri);
  return axios.get(uri)
    .then((response) => console.log("Success= " + JSON.stringify(response.data)))
    .catch((error) => console.log("ERROR! = " + error));

  // return output;
}

module.exports = {
  getCharacter
};
// export default getCharacter;