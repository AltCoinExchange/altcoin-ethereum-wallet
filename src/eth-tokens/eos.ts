/**
 * EOS token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class EosTokenTestnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfig.Eos.contractAddress, ethEngine);
  }
}

export class EosTokenMainnet extends DEX {
  constructor(ethEngine: EthEngine) {
    super(TokenConfigMain.Eos.contractAddress, ethEngine);
  }
}