import { EthEngine } from "../eth-engine";
export declare class EtherWrapper {
    ethEngine: EthEngine;
    contractAddress: string;
    constructor(ethEngine: EthEngine);
    totalSupply(): number;
    balanceOf(owner: string): Promise<any>;
    transfer(to: string, value: number): Promise<any>;
    transferFrom(from: string, to: string, value: number): Promise<any>;
    approve(spender: string, value: number): Promise<any>;
    allowance(owner: string, spender: string): Promise<any>;
    faucet(): Promise<any>;
    withdraw(wad: number): Promise<any>;
}
