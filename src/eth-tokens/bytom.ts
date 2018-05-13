/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class BytomTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.Bytom.contractAddress, ethEngine);
  }
}

export class BytomTokenMainnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.Bytom.contractAddress, ethEngine);
  }
}