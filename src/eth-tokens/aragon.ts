/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class AragonTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.Aragon.contractAddress, ethEngine);
  }
}

export class AragonTokenMainnet extends DEX  {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.Aragon.contractAddress, ethEngine);
  }
}