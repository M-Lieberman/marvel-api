require('dotenv').config();

function getCharacter() {

  const ts = new Date().getTime();
  const CryptoJS = require("crypto-js");
  const hash = CryptoJS.MD5(ts + process.env.MARVEL_API_KEY + process.env.MARVEL_PRIVATE_KEY).toString();
  const axios = require('axios');
  // Make a request for a user with a given ID
  const msg = 'https://gateway.marvel.com:443/v1/public/characters?name=hulk&ts=' + ts + '&apikey=' + process.env.MARVEL_API_KEY + '&hash=' + hash;
  console.log("msg= " + msg);
  const output = axios.get(msg)
    .then(function (response) {
      // handle success
      console.log("Success= " + response);
    })
    .catch(function (error) {
      // handle error
      console.log("ERROR! = " + error);
    })
    .then(function () {
      // always executed
    });
  return output;
}

module.exports = {
  getCharacter
};
// export default getCharacter;