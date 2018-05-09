/**
 * FunFair token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class FunFairTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.FunFair.contractAddress, ethEngine);
    }
}

export class FunFairTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.FunFair.contractAddress, ethEngine);
    }
}