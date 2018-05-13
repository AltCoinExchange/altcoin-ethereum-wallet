/**
 * Maker token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class MakerTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.Maker.contractAddress, ethEngine);
    }
}

export class MakerTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.Maker.contractAddress, ethEngine);
    }
}