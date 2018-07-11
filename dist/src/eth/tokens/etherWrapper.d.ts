import { EthEngine } from "../eth-engine";
export declare class EtherWrapper {
    ethEngine: EthEngine;
    contractAddress: '0x58d20e5da51b8705343f56bca258d14725c55d2c';
    constructor(contractAddress: string, ethEngine: EthEngine);
    totalSupply(): number;
    balanceOf(owner: string): Promise<any>;
    transfer(to: string, value: number): Promise<any>;
    transferFrom(from: string, to: string, value: number): Promise<any>;
    approve(spender: string, value: number): Promise<any>;
    allowance(owner: string, spender: string): Promise<any>;
    faucet(): Promise<any>;
    withdraw(wad: number): Promise<any>;
}
