/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class OmiseGoTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.OmiseGo.contractAddress, ethEngine);
  }
}

export class OmiseGoTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.OmiseGo.contractAddress, ethEngine);
  }
}