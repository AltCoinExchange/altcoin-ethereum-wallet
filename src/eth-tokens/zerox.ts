/**
 * ZeroX token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class ZeroXTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.ZeroX.contractAddress, ethEngine);
    }
}

export class ZeroXTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.ZeroX.contractAddress, ethEngine);
    }
}