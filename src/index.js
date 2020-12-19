// import CrpytoJS from 'crypto-js';

const PRIVATE_KEY = "a-long-hash";
const PUBLIC_KEY = "another-long-hash";

function getMarvelCharacter() {
    const ts = new Date().getTime();
    // const apiKey = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
    // // const apiKey = PRIVATE_KEY + PUBLIC_KEY;
    // console.log(apiKey);
    return "HULK";
    // https://gateway.marvel.com:443/v1/public/characters?name=Hulkr&apikey=
}

// console.log(">>>> before");
// getMarvelCharacter();
// console.log("over");

module.exports = {
    getMarvelCharacter
};
// export default getMarvelCharacter;