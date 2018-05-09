/**
 * TenXPay token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class TenXPayTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.TenXPay.contractAddress, ethEngine);
    }
}

export class TenXPayTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.TenXPay.contractAddress, ethEngine);
    }
}