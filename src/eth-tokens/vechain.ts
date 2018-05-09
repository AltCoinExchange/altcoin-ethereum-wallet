/**
 * VeChain token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class VeChainTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.VeChain.contractAddress, ethEngine);
    }
}

export class VeChainTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.VeChain.contractAddress, ethEngine);
    }
}