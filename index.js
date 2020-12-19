import MD5 from 'crypto-js/MD5';

const PRIVATE_KEY = "a-long-hash";
const PUBLIC_KEY = "another-long-hash";

function getMarvelResponse() {
    const ts = new Date().getTime();
    const apiKey = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
    // const apiKey = PRIVATE_KEY + PUBLIC_KEY;
    console.log(apiKey);

    // https://gateway.marvel.com:443/v1/public/characters?name=Hulkr&apikey=
}

console.log(">>>> before");
getMarvelResponse();
console.log("over");

