/**
 * Ethos token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class EthosTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.Ethos.contractAddress, ethEngine);
    }
}

export class EthosTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.Ethos.contractAddress, ethEngine);
    }
}