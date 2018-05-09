/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class DentTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.Dent.contractAddress, ethEngine);
  }
}

export class DentTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.Dent.contractAddress, ethEngine);
  }
}