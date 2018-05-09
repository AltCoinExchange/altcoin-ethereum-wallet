/**
 * EOS token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class EosTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.Eos.contractAddress, ethEngine);
  }
}

export class EosTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.Eos.contractAddress, ethEngine);
  }
}