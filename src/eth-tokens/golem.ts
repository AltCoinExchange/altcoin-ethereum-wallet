/**
 * Golem token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class GolemTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.Golem.contractAddress, ethEngine);
  }
}

export class GolemTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.Golem.contractAddress, ethEngine);
  }
}