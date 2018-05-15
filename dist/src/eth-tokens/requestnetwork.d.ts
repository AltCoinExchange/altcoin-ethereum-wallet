import { EthEngine } from "../eth/eth-engine";
import { DEX } from "../eth/tokens/dex";
export declare class RequestNetworkTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine);
}
export declare class RequestNetworkTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine);
}
