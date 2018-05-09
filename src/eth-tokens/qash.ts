/**
 * QASH token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class QASHTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.QASH.contractAddress, ethEngine);
    }
}

export class QASHTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.QASH.contractAddress, ethEngine);
    }
}