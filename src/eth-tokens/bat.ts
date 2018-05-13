/**
 * BAT token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class BatTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.Bat.contractAddress, ethEngine);
  }
}

export class BatTokenMainnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.Bat.contractAddress, ethEngine);
  }
}