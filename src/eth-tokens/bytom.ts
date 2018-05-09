/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class BytomTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.Bytom.contractAddress, ethEngine);
  }
}

export class BytomTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.Bytom.contractAddress, ethEngine);
  }
}