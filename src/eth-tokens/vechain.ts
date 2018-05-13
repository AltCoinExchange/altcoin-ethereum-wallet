/**
 * VeChain token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class VeChainTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.VeChain.contractAddress, ethEngine);
    }
}

export class VeChainTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.VeChain.contractAddress, ethEngine);
    }
}