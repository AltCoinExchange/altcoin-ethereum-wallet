export declare const generateMnemonic: () => any;
export declare abstract class Bip44Wallet<T> {
    protected abstract coin: any;
    private root;
    private account;
    private interalAddressIndex;
    private externalAddressIndex;
    constructor(mnemonic?: string);
}
export declare class EthBip44Wallet extends Bip44Wallet<EthBip44Wallet> {
    protected coin: number;
}
