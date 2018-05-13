/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class SubstratumTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.Substratum.contractAddress, ethEngine);
  }
}

export class SubstratumTokenMainnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.Substratum.contractAddress, ethEngine);
  }
}