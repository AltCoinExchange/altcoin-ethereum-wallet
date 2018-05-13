/**
 * Edgeless token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class EdgelessTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.Edgeless.contractAddress, ethEngine);
    }
}

export class EdgelessTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.Edgeless.contractAddress, ethEngine);
    }
}