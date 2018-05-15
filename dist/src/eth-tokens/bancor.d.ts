import { EthEngine } from "../eth/eth-engine";
import { DEX } from "../eth/tokens/dex";
export declare class BancorTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine);
}
export declare class BancorTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine);
}
