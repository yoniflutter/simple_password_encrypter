### Simple Node Js Password Encrypter

> Features

- Encrypt user's password
- Decrypt user's password

> Steps after cloning this repo

On cmd initialise node

```bash
   npm init -y
```

Then change these line of code with your own password

```javascript
    const { encrypt, decrypt } = require("./encrypter");

    const password1 = "test";
    // change this with your own password
    const password2 = "test";
    // make this password the same as the above if you want to get Authentication true message on the console

    // don't edit this line of code
    const { hash, salt } = encrypt(password1, 10);
    console.log("Password hashed is ", hash);
    const decrypted = decrypt(password2, hash, salt, 10);
    console.log("Authentication ", decrypted);
```

Finally enjoy :grin:
