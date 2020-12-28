require('dotenv').config();

function getCharacter(searchCharacter) {

  const ts = new Date().getTime();
  const CryptoJS = require("crypto-js");
  const hash = CryptoJS.MD5(ts + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_API_KEY).toString();
  const axios = require('axios');

  const url = 'https://gateway.marvel.com:443/v1/public/characters?name='+ searchCharacter + '&ts=' + ts + '&apikey='
    + process.env.MARVEL_API_KEY + '&hash=' + hash;
  const output = axios.get(url)
    .then((response) => {
      // console.log("Success!");
      // console.log("\n status = " + response.status + " : " + response.statusText);
      // console.log("\n data = " + JSON.stringify(response.data));
      // console.log("\n results = " + JSON.stringify(response.data.data.results[0].name));
      return response;
    })
    .catch((error) => console.log("ERROR! = " + error));

  return output;
}

module.exports = {
  getCharacter
};
// export default getCharacter;