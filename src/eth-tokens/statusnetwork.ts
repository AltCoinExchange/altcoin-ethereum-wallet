/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class StatusNetworkTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.StatusNetwork.contractAddress, ethEngine);
  }
}

export class StatusNetworkTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.StatusNetwork.contractAddress, ethEngine);
  }
}