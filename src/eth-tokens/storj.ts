/**
 * Storj token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class StorjTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.Storj.contractAddress, ethEngine);
    }
}

export class StorjTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.Storj.contractAddress, ethEngine);
    }
}