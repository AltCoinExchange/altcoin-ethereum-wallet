/**
 * Augur token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class AugurTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.Augur.contractAddress, ethEngine);
  }
}

export class AugurTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.Augur.contractAddress, ethEngine);
  }
}