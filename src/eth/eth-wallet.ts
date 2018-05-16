import { IEthAccount } from "./eth-account";
import { EthConfirmation, EthEngine } from "./eth-engine";
import * as AppConfig from "../config/config-eth";
import * as bip39 from "bip39";

export class EthereumWallet {
  public walletAddress: string = undefined;
  public engine: EthEngine;
  private appConfiguration;

  constructor() {
    this.appConfiguration = AppConfig.EthConfiguration.hosts[0];
    this.engine = new EthEngine(null, this.appConfiguration, null);
  }

  public getAddress() {
    return "0x" + this.walletAddress;
  }

  public login(keystore) {
    const acc = this.engine.login(keystore);
    if (acc.address.length > 2) {
      this.walletAddress = acc.address.slice(2);
    }
    return acc;
  }

  public create(password): IEthAccount {
    return this.engine.createAccount(password);
  }

  public recover(privateKey?) {
    return this.engine.recoverAccount(privateKey);
  }

  public recoverAccountFromSeed(pkSeed) {
    return this.engine.recoverAccountFromSeed(pkSeed);
  }

  public generateMnemonic() {
    return bip39.generateMnemonic();
  }

  public mnemonicToSeed(mnemonic) {
    return bip39.mnemonicToSeed(mnemonic);
  }

  public async getBalance(address) {
    return await this.engine.getBalance(address);
  }

  public sendAllEther(privateKey, toAddress) {
    return this.engine.sendAllEther(privateKey, toAddress);
  }

  public isWebSocketAlive() {
    return this.engine.isListening();
  }
}
