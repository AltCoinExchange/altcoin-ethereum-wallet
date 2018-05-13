/**
 * EnjinCoin token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class EnjinCoinTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.EnjinCoin.contractAddress, ethEngine);
    }
}

export class EnjinCoinTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.EnjinCoin.contractAddress, ethEngine);
    }
}