const port = process.env.PORT || 4000;

let db = process.env.MONGODB_URI || "mongodb://mongo:27017/nodegoat";

module.exports = {
    port,
    db,
    cookieSecret: process.env.COOKIE_SECRET || "dev_secret",
    cryptoKey: process.env.CRYPTO_KEY || "dev_key",
    cryptoAlgo: "aes256",
    hostName: "localhost",
    environmentalScripts: []
};
