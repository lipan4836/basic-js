const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphaLength = 26;
    this.startPos = 65;
  }

  config(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    if (message.length > key.length) {
      key = key.repeat(Math.ceil(message.length / key.length));
    }
    this.message = message;
    this.key = key;
  }

  encrypt(message, key) {
    this.config(message, key);

    let result = '';
    let shift = 0;

    for (let i = 0; i < this.message.length; i += 1) {
      const char = this.message.charCodeAt(i) - this.startPos;
      const shiftChar = this.key.charCodeAt(i - shift) - this.startPos;

      if (char < 0 || char > this.alphaLength) {
        result += this.message[i];
        shift += 1;
      } else {
        result += String.fromCharCode(
          ((char + shiftChar) % this.alphaLength) + this.startPos
        )
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    this.config(message, key);

    let result = '';
    let shift = 0;

    for (let i = 0; i < this.message.length; i += 1) {
      const char = this.message.charCodeAt(i) - this.startPos;
      const shiftChar = this.key.charCodeAt(i - shift) - this.startPos;

      if (char < 0 || char > this.alphaLength) {
        result += this.message[i];
        shift += 1;
      } else {
        result += String.fromCharCode(
          ((char - shiftChar + this.alphaLength) % this.alphaLength) + this.startPos
        )
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
