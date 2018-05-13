/**
 * QASH token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class QASHTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.QASH.contractAddress, ethEngine);
    }
}

export class QASHTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.QASH.contractAddress, ethEngine);
    }
}