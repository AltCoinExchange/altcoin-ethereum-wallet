/**
 * EnjinCoin token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class EnjinCoinTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.EnjinCoin.contractAddress, ethEngine);
    }
}

export class EnjinCoinTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.EnjinCoin.contractAddress, ethEngine);
    }
}