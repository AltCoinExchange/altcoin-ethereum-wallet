/**
 * GNOSIS token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class GnosisTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.Gnosis.contractAddress, ethEngine);
  }
}

export class GnosisTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.Gnosis.contractAddress, ethEngine);
  }
}