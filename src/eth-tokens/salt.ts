/**
 * SALT token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class SaltTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.Salt.contractAddress, ethEngine);
  }
}

export class SaltTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.Salt.contractAddress, ethEngine);
  }
}