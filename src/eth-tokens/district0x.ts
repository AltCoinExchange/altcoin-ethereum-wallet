/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class District0xTokenTestnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfig.District0x.contractAddress, ethEngine);
  }
}

export class District0xTokenMainnet {
  constructor(ethEngine: EthEngine) {
    // super(TokenConfigMain.District0x.contractAddress, ethEngine);
  }
}