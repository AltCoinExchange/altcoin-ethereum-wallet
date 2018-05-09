/**
 * RequestNetwork token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class RequestNetworkTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.RequestNetwork.contractAddress, ethEngine);
    }
}

export class RequestNetworkTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.RequestNetwork.contractAddress, ethEngine);
    }
}