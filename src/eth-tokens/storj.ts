/**
 * Storj token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class StorjTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.Storj.contractAddress, ethEngine);
    }
}

export class StorjTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.Storj.contractAddress, ethEngine);
    }
}