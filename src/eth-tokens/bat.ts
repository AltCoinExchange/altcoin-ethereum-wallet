/**
 * BAT token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class BatTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.Bat.contractAddress, ethEngine);
  }
}

export class BatTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.Bat.contractAddress, ethEngine);
  }
}