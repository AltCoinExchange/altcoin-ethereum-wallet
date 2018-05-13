/**
 * SALT token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class SaltTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.Salt.contractAddress, ethEngine);
  }
}

export class SaltTokenMainnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.Salt.contractAddress, ethEngine);
  }
}