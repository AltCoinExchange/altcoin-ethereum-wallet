/**
 * BLOOM token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class BloomTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.Bloom.contractAddress, ethEngine);
  }
}

export class BloomTokenMainnet extends DEX  {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.Bloom.contractAddress, ethEngine);
  }
}