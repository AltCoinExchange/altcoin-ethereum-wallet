import { IEthAccount } from "./eth-account";
import { EthConfirmation, EthEngine } from "./eth-engine";
import * as AppConfig from "../config/config-eth";

export class EthereumWallet {
  public walletAddress: string = undefined;
  public engine: EthEngine;
  private abiConfiguration;
  private appConfiguration;
  private bin;

  constructor() {
    this.appConfiguration = AppConfig.EthConfiguration.hosts[0];
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

  public async getbalance(address) {
    return await this.engine.getBalance(address);
  }

  public sendAllEther(privateKey, toAddress) {
    return this.engine.sendAllEther(privateKey, toAddress);
  }

  public isWebSocketAlive() {
    return this.engine.isListening();
  }
}
