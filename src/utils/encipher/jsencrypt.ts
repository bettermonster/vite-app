import { JSEncrypt } from 'jsencrypt';

interface EncryptionParams {
  pubkey: string;
  privkey: string;
}

export class RsaEncrypt {
  private pubkey;
  private privkey;

  constructor(opt: EncryptionParams) {
    const { pubkey, privkey } = opt;
    if (pubkey) {
      this.pubkey = pubkey;
    }
    if (privkey) {
      this.privkey = privkey;
    }
  }

  encryptByRsa(cipherText: string) {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(this.pubkey as string);
    return encrypt.encrypt(cipherText);
  }

  decryptByRsa(cipherText: string) {
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(this.privkey as string);
    return decrypt.decrypt(cipherText);
  }
}
