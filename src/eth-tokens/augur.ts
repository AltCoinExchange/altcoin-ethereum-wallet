/**
 * Augur token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class AugurTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.Augur.contractAddress, ethEngine);
  }
}

export class AugurTokenMainnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.Augur.contractAddress, ethEngine);
  }
}