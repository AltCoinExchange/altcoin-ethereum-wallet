import { IEthAccount } from "./eth-account";
import { EthEngine } from "./eth-engine";
import { EtherWrapper } from "./tokens/etherWrapper";
export declare class EthereumWallet {
    walletAddress: string;
    engine: EthEngine;
    etherWrapper: EtherWrapper;
    private appConfiguration;
    constructor(configuration?: any);
    getAddress(): string;
    login(keystore: any): any;
    create(password: any): IEthAccount;
    recover(privateKey?: any): any;
    recoverAccountFromSeed(pkSeed: any): any;
    generateMnemonic(): any;
    validateMnemonic(mnemonic: any): any;
    mnemonicToSeed(mnemonic: any): any;
    getBalance(address: any): Promise<number>;
    sendAllEther(privateKey: any, toAddress: any, gasMultiplier?: number): Promise<any>;
    sendEther(toAddress: any, balance: any, gasMultiplier?: number, gasIncremental?: number): Promise<any>;
    isWebSocketAlive(): boolean;
    unwrapEther(amount: any): Promise<any>;
}
