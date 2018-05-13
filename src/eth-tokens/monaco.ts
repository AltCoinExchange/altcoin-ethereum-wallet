/**
 * Monaco token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class MonacoTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.Monaco.contractAddress, ethEngine);
    }
}

export class MonacoTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.Monaco.contractAddress, ethEngine);
    }
}