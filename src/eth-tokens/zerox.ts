/**
 * ZeroX token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class ZeroXTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.ZeroX.contractAddress, ethEngine);
    }
}

export class ZeroXTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.ZeroX.contractAddress, ethEngine);
    }
}