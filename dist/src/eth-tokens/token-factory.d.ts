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
import { WETHTokenTestnet, WETHTokenMainnet } from "./weth";
import { BloomTokenTestnet, BloomTokenMainnet } from "./bloom";
import { LunyrTokenTestnet, LunyrTokenMainnet } from "./lunyr";
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
    BLOOM = 34,
    LUNYR = 35
}
export declare class TokenFactory {
    static GetToken(token: TOKENS, engine: EthEngine, testnet?: boolean): GolemTokenMainnet | AugurTokenMainnet | GnosisTokenMainnet | BatTokenMainnet | AragonTokenMainnet | EosTokenMainnet | SaltTokenMainnet | CivicTokenMainnet | OmiseGoTokenMainnet | District0xTokenMainnet | StatusNetworkTokenMainnet | SubstratumTokenMainnet | TronTokenMainnet | BytomTokenMainnet | DentTokenTestnet | PopulousTokenTestnet | MakerTokenTestnet | DigixDAOTokenTestnet | QASHTokenTestnet | EthosTokenTestnet | FunFairTokenTestnet | RequestNetworkTokenTestnet | BancorTokenTestnet | IconomiTokenTestnet | TenXPayTokenTestnet | StorjTokenTestnet | EnjinCoinTokenTestnet | MonacoTokenTestnet | EdgelessTokenTestnet | VeChainTokenTestnet | ICONTokenTestnet | ZeroXTokenTestnet | WETHTokenMainnet | BloomTokenMainnet | LunyrTokenMainnet | GolemTokenTestnet | AugurTokenTestnet | GnosisTokenTestnet | BatTokenTestnet | AragonTokenTestnet | EosTokenTestnet | SaltTokenTestnet | CivicTokenTestnet | OmiseGoTokenTestnet | District0xTokenTestnet | StatusNetworkTokenTestnet | SubstratumTokenTestnet | TronTokenTestnet | BytomTokenTestnet | WETHTokenTestnet | BloomTokenTestnet | LunyrTokenTestnet;
    static GetTokenMain(token: TOKENS, engine: EthEngine): GolemTokenMainnet | AugurTokenMainnet | GnosisTokenMainnet | BatTokenMainnet | AragonTokenMainnet | EosTokenMainnet | SaltTokenMainnet | CivicTokenMainnet | OmiseGoTokenMainnet | District0xTokenMainnet | StatusNetworkTokenMainnet | SubstratumTokenMainnet | TronTokenMainnet | BytomTokenMainnet | DentTokenTestnet | PopulousTokenTestnet | MakerTokenTestnet | DigixDAOTokenTestnet | QASHTokenTestnet | EthosTokenTestnet | FunFairTokenTestnet | RequestNetworkTokenTestnet | BancorTokenTestnet | IconomiTokenTestnet | TenXPayTokenTestnet | StorjTokenTestnet | EnjinCoinTokenTestnet | MonacoTokenTestnet | EdgelessTokenTestnet | VeChainTokenTestnet | ICONTokenTestnet | ZeroXTokenTestnet | WETHTokenMainnet | BloomTokenMainnet | LunyrTokenMainnet;
}
