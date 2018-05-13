/**
 * Bancor token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class BancorTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.Bancor.contractAddress, ethEngine);
    }
}

export class BancorTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.Bancor.contractAddress, ethEngine);
    }
}