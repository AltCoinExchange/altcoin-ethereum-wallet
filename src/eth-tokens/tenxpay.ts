/**
 * TenXPay token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class TenXPayTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.TenXPay.contractAddress, ethEngine);
    }
}

export class TenXPayTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.TenXPay.contractAddress, ethEngine);
    }
}