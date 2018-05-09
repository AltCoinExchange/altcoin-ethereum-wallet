/**
 * Edgeless token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class EdgelessTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.Edgeless.contractAddress, ethEngine);
    }
}

export class EdgelessTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.Edgeless.contractAddress, ethEngine);
    }
}