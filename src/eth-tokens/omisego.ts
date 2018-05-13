/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class OmiseGoTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.OmiseGo.contractAddress, ethEngine);
  }
}

export class OmiseGoTokenMainnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.OmiseGo.contractAddress, ethEngine);
  }
}