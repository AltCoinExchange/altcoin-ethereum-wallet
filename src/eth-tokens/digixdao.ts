/**
 * DigixDAO token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class DigixDAOTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.DigixDAO.contractAddress, ethEngine);
    }
}

export class DigixDAOTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.DigixDAO.contractAddress, ethEngine);
    }
}