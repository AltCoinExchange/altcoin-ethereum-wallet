/**
 * Maker token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class MakerTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.Maker.contractAddress, ethEngine);
    }
}

export class MakerTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.Maker.contractAddress, ethEngine);
    }
}