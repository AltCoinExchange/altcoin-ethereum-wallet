import { EthEngine } from "../eth-engine";
import { ERC20 } from "./ERC20";
export declare class DEX extends ERC20 {
    private _dexContractAddress;
    dexContractAddress: any;
    constructor(contractAddress: string, ethEngine: EthEngine);
    currentDepositNonce(): Promise<any>;
    DepositToken(value: number): Promise<any>;
    withdraw(msgHash: string, amount: number, nonce: number, v: string, r: string, s: string): Promise<any>;
}
