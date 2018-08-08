import { IEthAccount } from "./eth-account";
import { EthConfirmation, EthEngine } from "./eth-engine";
import { EtherWrapper } from "./tokens/etherWrapper";
import * as AppConfig from "../config/config-eth";
import * as bip39 from "bip39";

export class EthereumWallet {
  public walletAddress: string = undefined;
  public engine: EthEngine;
  public etherWrapper: EtherWrapper;
  private appConfiguration;

  constructor(configuration?: any) {
    if (!configuration) {
      this.appConfiguration = AppConfig.EthConfiguration.hosts[0];
    } else {
      this.appConfiguration = configuration;
    }
    this.engine = new EthEngine(null, this.appConfiguration, null);
    this.etherWrapper = new EtherWrapper(this.engine);
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

  public validateMnemonic(mnemonic) {
    return bip39.validateMnemonic(mnemonic);
  }

  public mnemonicToSeed(mnemonic) {
    return bip39.mnemonicToSeed(mnemonic);
  }

  public async getBalance(address) {
    return await this.engine.getBalance(address);
  }

  public sendAllEther(privateKey, toAddress, gasMultiplier = 2) {
    return this.engine.sendAllEther(privateKey, toAddress, gasMultiplier);
  }

  public sendEther(toAddress, balance, gasMultiplier = 2, gasIncremental = 0.1) {
    return this.engine.sendEther(toAddress, balance, gasMultiplier, gasIncremental);
  }

  public isWebSocketAlive() {
    return this.engine.isListening();
  }

  public unwrapEther(amount) {
    return this.etherWrapper.withdraw(amount);
  }
}
