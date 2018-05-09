/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class AragonTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.Aragon.contractAddress, ethEngine);
  }
}

export class AragonTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.Aragon.contractAddress, ethEngine);
  }
}