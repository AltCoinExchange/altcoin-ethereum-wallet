/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class DentTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.Dent.contractAddress, ethEngine);
  }
}

export class DentTokenMainnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.Dent.contractAddress, ethEngine);
  }
}