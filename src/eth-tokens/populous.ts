/**
 * Populous token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class PopulousTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.Populous.contractAddress, ethEngine);
    }
}

export class PopulousTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.Populous.contractAddress, ethEngine);
    }
}