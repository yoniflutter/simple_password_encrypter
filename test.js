const { encrypt, decrypt } = require('./encrypter');

const password1 = "test";
const password2 = "test";

const { hash, salt } = encrypt(password1, 10);
console.log("Password hashed is ", hash);
const decrypted = decrypt(password2, hash, salt, 10);
console.log("Authentication ", decrypted);