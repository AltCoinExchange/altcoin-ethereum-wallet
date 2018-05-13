/**
 * ICON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class ICONTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.ICON.contractAddress, ethEngine);
    }
}

export class ICONTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.ICON.contractAddress, ethEngine);
    }
}