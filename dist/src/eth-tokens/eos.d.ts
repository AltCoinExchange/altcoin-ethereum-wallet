import { EthEngine } from "../eth/eth-engine";
import { DEX } from "../eth/tokens/dex";
export declare class EosTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine);
}
export declare class EosTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine);
}
