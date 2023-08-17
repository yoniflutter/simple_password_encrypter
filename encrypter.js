const crypto = require('crypto');

const encrypt = (password, length) =>{
    const salt = crypto.randomBytes(32).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, length, 64, "sha256").toString('hex');
    return { salt, hash }
}

const decrypt = (password, hash, salt, length) =>{
    const h = crypto.pbkdf2Sync(password, salt, length, 64, "sha256").toString('hex');
    return h === hash
}

module.exports = { decrypt, encrypt }