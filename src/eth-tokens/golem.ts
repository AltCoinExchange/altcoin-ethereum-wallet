/**
 * Golem token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class GolemTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.Golem.contractAddress, ethEngine);
  }
}

export class GolemTokenMainnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.Golem.contractAddress, ethEngine);
  }
}