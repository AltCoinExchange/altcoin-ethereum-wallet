/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class District0xTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.District0x.contractAddress, ethEngine);
  }
}

export class District0xTokenMainnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.District0x.contractAddress, ethEngine);
  }
}