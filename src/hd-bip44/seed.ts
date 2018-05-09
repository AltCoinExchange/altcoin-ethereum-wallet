import * as bip39 from "bip39";

export const generateMnemonic = () => {
  return bip39.generateMnemonic();
};
const EXTERNAL_CHAIN = 0;
const INTERNAL_CHAIN = 1;

export abstract class Bip44Wallet<T> {
  protected abstract coin;
  private root;
  private account = 0; // probably we will never change this
  private interalAddressIndex = 0;
  private externalAddressIndex = 0;

  constructor(mnemonic?: string) {
    if (!mnemonic) {
      mnemonic = generateMnemonic();
    }
    const seed = bip39.mnemonicToSeed(mnemonic);
  }
}

export class EthBip44Wallet extends Bip44Wallet<EthBip44Wallet> {
  protected coin = 60;

}