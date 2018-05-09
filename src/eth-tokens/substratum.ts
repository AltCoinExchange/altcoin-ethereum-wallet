/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class SubstratumTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.Substratum.contractAddress, ethEngine);
  }
}

export class SubstratumTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.Substratum.contractAddress, ethEngine);
  }
}