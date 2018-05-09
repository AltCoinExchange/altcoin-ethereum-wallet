/**
 * Monaco token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class MonacoTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.Monaco.contractAddress, ethEngine);
    }
}

export class MonacoTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.Monaco.contractAddress, ethEngine);
    }
}