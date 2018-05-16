import { EthEngine } from "../eth/eth-engine";
import { AragonTokenMainnet, AragonTokenTestnet } from "./aragon";
import { AugurTokenMainnet, AugurTokenTestnet } from "./augur";
import { BatTokenMainnet, BatTokenTestnet } from "./bat";
import { EosTokenMainnet, EosTokenTestnet } from "./eos";
import { GnosisTokenMainnet, GnosisTokenTestnet } from "./gnosis";
import { GolemTokenMainnet, GolemTokenTestnet } from "./golem";
import { SaltTokenMainnet, SaltTokenTestnet } from "./salt";
import { CivicTokenMainnet, CivicTokenTestnet } from "./civic";
import { OmiseGoTokenMainnet, OmiseGoTokenTestnet } from "./omisego";
import { District0xTokenMainnet, District0xTokenTestnet } from "./district0x";
import { StatusNetworkTokenMainnet, StatusNetworkTokenTestnet } from "./statusnetwork";
import { SubstratumTokenMainnet, SubstratumTokenTestnet } from "./substratum";
import { TronTokenMainnet, TronTokenTestnet } from "./tron";
import { BytomTokenMainnet, BytomTokenTestnet } from "./bytom";
import { DentTokenTestnet } from "./dent";
import { PopulousTokenTestnet } from "./populous";
import { MakerTokenTestnet } from "./maker";
import { DigixDAOTokenTestnet } from "./digixdao";
import { QASHTokenTestnet } from "./qash";
import { EthosTokenTestnet } from "./ethos";
import { FunFairTokenTestnet } from "./funfair";
import { RequestNetworkTokenTestnet } from "./requestnetwork";
import { EnjinCoinTokenTestnet } from "./enjincoin";
import { MonacoTokenTestnet } from "./monaco";
import { EdgelessTokenTestnet } from "./edgeless";
import { VeChainTokenTestnet } from "./vechain";
import { ICONTokenTestnet } from "./icon";
import { ZeroXTokenTestnet } from "./zerox";
import { BancorTokenTestnet } from "./bancor";
import { IconomiTokenTestnet } from "./iconomi";
import { TenXPayTokenTestnet } from "./tenxpay";
import { StorjTokenTestnet } from "./storj";
export declare enum TOKENS {
    AUGUR = 1,
    GOLEM = 2,
    GNOSIS = 3,
    BAT = 4,
    ARAGON = 5,
    EOS = 6,
    SALT = 7,
    CIVIC = 8,
    OMISEGO = 9,
    DISTRICT0X = 10,
    STATUSNETWORK = 11,
    SUBSTRATUM = 12,
    TRON = 13,
    BYTOM = 14,
    DENT = 15,
    POPULOUS = 16,
    MAKER = 17,
    DIGIXDAO = 18,
    QASH = 19,
    ETHOS = 20,
    FUNFAIR = 21,
    REQUESTNETWORK = 22,
    BANCOR = 23,
    ICONOMI = 24,
    TENXPAY = 25,
    STORJ = 26,
    ENJINCOIN = 27,
    MONACO = 28,
    EDGELESS = 29,
    VECHAIN = 30,
    ICON = 31,
    ZEROX = 32,
}
export declare class TokenFactory {
    static GetToken(token: TOKENS, engine: EthEngine, testnet?: boolean): AugurTokenTestnet | AugurTokenMainnet | GolemTokenMainnet | GnosisTokenMainnet | BatTokenMainnet | AragonTokenMainnet | EosTokenMainnet | SaltTokenMainnet | CivicTokenMainnet | OmiseGoTokenMainnet | District0xTokenMainnet | StatusNetworkTokenMainnet | SubstratumTokenMainnet | TronTokenMainnet | BytomTokenMainnet | DentTokenTestnet | PopulousTokenTestnet | MakerTokenTestnet | DigixDAOTokenTestnet | QASHTokenTestnet | EthosTokenTestnet | FunFairTokenTestnet | RequestNetworkTokenTestnet | BancorTokenTestnet | IconomiTokenTestnet | TenXPayTokenTestnet | StorjTokenTestnet | EnjinCoinTokenTestnet | MonacoTokenTestnet | EdgelessTokenTestnet | VeChainTokenTestnet | ICONTokenTestnet | ZeroXTokenTestnet | GolemTokenTestnet | GnosisTokenTestnet | BatTokenTestnet | AragonTokenTestnet | EosTokenTestnet | SaltTokenTestnet | CivicTokenTestnet | OmiseGoTokenTestnet | District0xTokenTestnet | StatusNetworkTokenTestnet | SubstratumTokenTestnet | TronTokenTestnet | BytomTokenTestnet;
    static GetTokenMain(token: TOKENS, engine: EthEngine): AugurTokenMainnet | GolemTokenMainnet | GnosisTokenMainnet | BatTokenMainnet | AragonTokenMainnet | EosTokenMainnet | SaltTokenMainnet | CivicTokenMainnet | OmiseGoTokenMainnet | District0xTokenMainnet | StatusNetworkTokenMainnet | SubstratumTokenMainnet | TronTokenMainnet | BytomTokenMainnet | DentTokenTestnet | PopulousTokenTestnet | MakerTokenTestnet | DigixDAOTokenTestnet | QASHTokenTestnet | EthosTokenTestnet | FunFairTokenTestnet | RequestNetworkTokenTestnet | BancorTokenTestnet | IconomiTokenTestnet | TenXPayTokenTestnet | StorjTokenTestnet | EnjinCoinTokenTestnet | MonacoTokenTestnet | EdgelessTokenTestnet | VeChainTokenTestnet | ICONTokenTestnet | ZeroXTokenTestnet;
}
