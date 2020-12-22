const PRIVATE_KEY = "a-long-hash";
const PUBLIC_KEY = "another-long-hash";

function getCharacter() {
    const ts = new Date().getTime();
    const CryptoJS = require("crypto-js");
    const apiKey = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
    // // const apiKey = PRIVATE_KEY + PUBLIC_KEY;
    console.log("api= " + apiKey);
    return "HULK";
    // https://gateway.marvel.com:443/v1/public/characters?name=Hulkr&apikey=
}

// console.log(">>>> before");
console.log(getCharacter());
// console.log("over");

module.exports = {
    getCharacter
};
// export default getCharacter;