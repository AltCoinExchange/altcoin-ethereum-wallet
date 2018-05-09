/**
 * Bancor token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class BancorTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.Bancor.contractAddress, ethEngine);
    }
}

export class BancorTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.Bancor.contractAddress, ethEngine);
    }
}