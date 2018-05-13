/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class TronTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.Tron.contractAddress, ethEngine);
  }
}

export class TronTokenMainnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.Tron.contractAddress, ethEngine);
  }
}