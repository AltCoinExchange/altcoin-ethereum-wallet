/**
 * DigixDAO token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class DigixDAOTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.DigixDAO.contractAddress, ethEngine);
    }
}

export class DigixDAOTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.DigixDAO.contractAddress, ethEngine);
    }
}