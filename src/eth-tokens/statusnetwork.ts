/**
 * ARAGON token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class StatusNetworkTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.StatusNetwork.contractAddress, ethEngine);
  }
}

export class StatusNetworkTokenMainnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.StatusNetwork.contractAddress, ethEngine);
  }
}