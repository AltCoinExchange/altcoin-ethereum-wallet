/**
 * ICON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class ICONTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.ICON.contractAddress, ethEngine);
    }
}

export class ICONTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.ICON.contractAddress, ethEngine);
    }
}