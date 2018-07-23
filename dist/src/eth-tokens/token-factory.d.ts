import { EthEngine } from "../eth/eth-engine";
import { GolemTokenMainnet } from "./golem";
export declare enum TOKENS {
    WETH = 1,
    AUGUR = 2,
    GOLEM = 3,
    GNOSIS = 4,
    BAT = 5,
    ARAGON = 6,
    EOS = 7,
    SALT = 8,
    CIVIC = 9,
    OMISEGO = 10,
    DISTRICT0X = 11,
    STATUSNETWORK = 12,
    SUBSTRATUM = 13,
    TRON = 14,
    BYTOM = 15,
    DENT = 16,
    POPULOUS = 17,
    MAKER = 18,
    DIGIXDAO = 19,
    QASH = 20,
    ETHOS = 21,
    FUNFAIR = 22,
    REQUESTNETWORK = 23,
    BANCOR = 24,
    ICONOMI = 25,
    TENXPAY = 26,
    STORJ = 27,
    ENJINCOIN = 28,
    MONACO = 29,
    EDGELESS = 30,
    VECHAIN = 31,
    ICON = 32,
    ZEROX = 33,
}
export declare class TokenFactory {
    static GetToken(token: TOKENS, engine: EthEngine, testnet?: boolean): GolemTokenMainnet;
    static GetTokenMain(token: TOKENS, engine: EthEngine): GolemTokenMainnet;
}
