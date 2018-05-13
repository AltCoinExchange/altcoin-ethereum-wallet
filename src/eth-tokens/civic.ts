/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class CivicTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.Civic.contractAddress, ethEngine);
  }
}

export class CivicTokenMainnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.Civic.contractAddress, ethEngine);
  }
}