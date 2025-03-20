const jwt=require("jsonwebtoken")

const SECRET_KEY="cookies-8888"

const encrypt = (payload) => {
  // encrypt the payload and return token
  try {
    const token=jwt.sign(payload,SECRET_KEY,{
      expiresIn:"1h"
    })
    return token
  } catch (error) {
    console.error('Encryption error:', error.message);
    return null;
  }

}

const decrypt = (token) => {
  // return decoded payload
try {
    const decoded=jwt.verify(payload,SECRET_KEY)
    return decoded
  
} catch (error) {
  console.error('Decryption error:', error.message);
    return null;

}}


const testPayload={
  userId: 123,
  username: 'testuser',
  role: 'admin'
}

const encryptedToken = encrypt(testPayload);
console.log('Encrypted Token:', encryptedToken);


const decryptedPayload = decrypt(encryptedToken);
console.log('Decrypted Payload:', decryptedPayload);


if (
  decryptedPayload &&
  decryptedPayload.userId === testPayload.userId &&
  decryptedPayload.username === testPayload.username &&
  decryptedPayload.role === testPayload.role
) {
  console.log('Success');
} else {
  console.log('Failed');
}


module.exports = {
  encrypt,
  decrypt
}
