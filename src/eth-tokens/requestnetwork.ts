/**
 * RequestNetwork token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class RequestNetworkTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.RequestNetwork.contractAddress, ethEngine);
    }
}

export class RequestNetworkTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.RequestNetwork.contractAddress, ethEngine);
    }
}