//  import MD5 from 'crypto-js/md5';

const PRIVATE_KEY = "a-long-hash";
const PUBLIC_KEY = "another-long-hash";

function getCharacter() {
    const ts = new Date().getTime();
    // var hash = CryptoJS.MD5("Message");
    // const apiKey = MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
    // // const apiKey = PRIVATE_KEY + PUBLIC_KEY;
    // console.log(apiKey);
    return "HULK";
    // https://gateway.marvel.com:443/v1/public/characters?name=Hulkr&apikey=
}

// console.log(">>>> before");
console.log(getCharacter());
// console.log("over");

module.exports = {
    getCharacter
};
// export default getMarvelCharacter;