/**
 * Iconomi token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class IconomiTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.Iconomi.contractAddress, ethEngine);
    }
}

export class IconomiTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.Iconomi.contractAddress, ethEngine);
    }
}