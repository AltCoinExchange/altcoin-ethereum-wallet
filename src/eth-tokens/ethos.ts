/**
 * Ethos token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class EthosTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.Ethos.contractAddress, ethEngine);
    }
}

export class EthosTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.Ethos.contractAddress, ethEngine);
    }
}