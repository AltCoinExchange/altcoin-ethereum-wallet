/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class TronTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.Tron.contractAddress, ethEngine);
  }
}

export class TronTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.Tron.contractAddress, ethEngine);
  }
}