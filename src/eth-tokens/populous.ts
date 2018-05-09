/**
 * Populous token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class PopulousTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.Populous.contractAddress, ethEngine);
    }
}

export class PopulousTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.Populous.contractAddress, ethEngine);
    }
}