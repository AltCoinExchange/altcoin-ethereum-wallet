import {EthEngine} from "../eth/eth-engine";
import {AragonTokenMainnet, AragonTokenTestnet} from "./aragon";
import {AugurTokenMainnet, AugurTokenTestnet} from "./augur";
import {BatTokenMainnet, BatTokenTestnet} from "./bat";
import {EosTokenMainnet, EosTokenTestnet} from "./eos";
import {GnosisTokenMainnet, GnosisTokenTestnet} from "./gnosis";
import {GolemTokenMainnet, GolemTokenTestnet} from "./golem";
import {SaltTokenMainnet, SaltTokenTestnet} from "./salt";
import {CivicTokenMainnet, CivicTokenTestnet} from "./civic";
import {OmiseGoTokenMainnet, OmiseGoTokenTestnet} from "./omisego";
import {District0xTokenMainnet, District0xTokenTestnet} from "./district0x";
import {StatusNetworkTokenMainnet, StatusNetworkTokenTestnet} from "./statusnetwork";
import {SubstratumTokenMainnet, SubstratumTokenTestnet} from "./substratum";
import {TronTokenMainnet, TronTokenTestnet} from "./tron";
import {BytomTokenMainnet, BytomTokenTestnet} from "./bytom";
import {DentTokenTestnet} from "./dent";
import {PopulousTokenTestnet} from "./populous";
import {MakerTokenTestnet} from "./maker";
import {DigixDAOTokenTestnet} from "./digixdao";
import {QASHTokenTestnet} from "./qash";
import {EthosTokenTestnet} from "./ethos";
import {FunFairTokenTestnet} from "./funfair";
import {RequestNetworkTokenTestnet} from "./requestnetwork";
import {EnjinCoinTokenTestnet} from "./enjincoin";
import {MonacoTokenTestnet} from "./monaco";
import {EdgelessTokenTestnet} from "./edgeless";
import {VeChainTokenTestnet} from "./vechain";
import {ICONTokenTestnet} from "./icon";
import {ZeroXTokenTestnet} from "./zerox";
import {BancorTokenTestnet} from "./bancor";
import {IconomiTokenTestnet} from "./iconomi";
import {TenXPayTokenTestnet} from "./tenxpay";
import {StorjTokenTestnet} from "./storj";

export enum TOKENS {
  AUGUR = 1,
  GOLEM,
  GNOSIS,
  BAT,
  ARAGON,
  EOS,
  SALT,
  CIVIC,
  OMISEGO,
  DISTRICT0X,
  STATUSNETWORK,
  SUBSTRATUM,
  TRON,
  BYTOM,
  DENT,
  POPULOUS,
  MAKER,
  DIGIXDAO,
  QASH,
  ETHOS,
  FUNFAIR,
  REQUESTNETWORK,
  BANCOR,
  ICONOMI,
  TENXPAY,
  STORJ,
  ENJINCOIN,
  MONACO,
  EDGELESS,
  VECHAIN,
  ICON,
  ZEROX
}

export class TokenFactory {
  public static GetToken(token: TOKENS, engine: EthEngine, testnet: boolean = true) {
    if (!testnet) {
      return this.GetTokenMain(token, engine);
    }

    switch (token) {
      case TOKENS.GOLEM: {
        return new GolemTokenTestnet(engine);
      }
      case TOKENS.AUGUR: {
        return new AugurTokenTestnet(engine);
      }
      case TOKENS.GNOSIS: {
        return new GnosisTokenTestnet(engine);
      }
      case TOKENS.BAT: {
        return new BatTokenTestnet(engine);
      }
      case TOKENS.ARAGON: {
        return new AragonTokenTestnet(engine);
      }
      case TOKENS.EOS: {
        return new EosTokenTestnet(engine);
      }
      case TOKENS.SALT: {
        return new SaltTokenTestnet(engine);
      }
      case TOKENS.CIVIC: {
        return new CivicTokenTestnet(engine);
      }
      case TOKENS.OMISEGO: {
        return new OmiseGoTokenTestnet(engine);
      }
      case TOKENS.DISTRICT0X: {
        return new District0xTokenTestnet(engine);
      }
      case TOKENS.STATUSNETWORK: {
        return new StatusNetworkTokenTestnet(engine);
      }
      case TOKENS.SUBSTRATUM: {
        return new SubstratumTokenTestnet(engine);
      }
      case TOKENS.TRON: {
        return new TronTokenTestnet(engine);
      }
      case TOKENS.BYTOM: {
        return new BytomTokenTestnet(engine);
      }
      case TOKENS.DENT: {
        return new DentTokenTestnet(engine);
      }
      case TOKENS.POPULOUS: {
        return new PopulousTokenTestnet(engine);
      }
      case TOKENS.MAKER: {
        return new MakerTokenTestnet(engine);
      }
      case TOKENS.DIGIXDAO: {
        return new DigixDAOTokenTestnet(engine);
      }
      case TOKENS.QASH: {
        return new QASHTokenTestnet(engine);
      }
      case TOKENS.ETHOS: {
        return new EthosTokenTestnet(engine);
      }
      case TOKENS.FUNFAIR: {
        return new FunFairTokenTestnet(engine);
      }
      case TOKENS.REQUESTNETWORK: {
        return new RequestNetworkTokenTestnet(engine);
      }
      case TOKENS.BANCOR: {
        return new BancorTokenTestnet(engine);
      }
      case TOKENS.ICONOMI: {
        return new IconomiTokenTestnet(engine);
      }
      case TOKENS.TENXPAY: {
        return new TenXPayTokenTestnet(engine);
      }
      case TOKENS.STORJ: {
        return new StorjTokenTestnet(engine);
      }
      case TOKENS.ENJINCOIN: {
        return new EnjinCoinTokenTestnet(engine);
      }
      case TOKENS.MONACO: {
        return new MonacoTokenTestnet(engine);
      }
      case TOKENS.EDGELESS: {
        return new EdgelessTokenTestnet(engine);
      }
      case TOKENS.VECHAIN: {
        return new VeChainTokenTestnet(engine);
      }
      case TOKENS.ICON: {
        return new ICONTokenTestnet(engine);
      }
      case TOKENS.ZEROX: {
        return new ZeroXTokenTestnet(engine);
      }
    }
  }

  public static GetTokenMain(token: TOKENS, engine: EthEngine) {
    switch (token) {
      case TOKENS.GOLEM: {
        return new GolemTokenMainnet(engine);
      }
      case TOKENS.AUGUR: {
        return new AugurTokenMainnet(engine);
      }
      case TOKENS.GNOSIS: {
        return new GnosisTokenMainnet(engine);
      }
      case TOKENS.BAT: {
        return new BatTokenMainnet(engine);
      }
      case TOKENS.ARAGON: {
        return new AragonTokenMainnet(engine);
      }
      case TOKENS.EOS: {
        return new EosTokenMainnet(engine);
      }
      case TOKENS.SALT: {
        return new SaltTokenMainnet(engine);
      }
      case TOKENS.CIVIC: {
        return new CivicTokenMainnet(engine);
      }
      case TOKENS.OMISEGO: {
        return new OmiseGoTokenMainnet(engine);
      }
      case TOKENS.DISTRICT0X: {
        return new District0xTokenMainnet(engine);
      }
      case TOKENS.STATUSNETWORK: {
        return new StatusNetworkTokenMainnet(engine);
      }
      case TOKENS.SUBSTRATUM: {
        return new SubstratumTokenMainnet(engine);
      }
      case TOKENS.TRON: {
        return new TronTokenMainnet(engine);
      }
      case TOKENS.BYTOM: {
        return new BytomTokenMainnet(engine);
      }
      case TOKENS.DENT: {
        return new DentTokenTestnet(engine);
      }
      case TOKENS.POPULOUS: {
        return new PopulousTokenTestnet(engine);
      }
      case TOKENS.MAKER: {
        return new MakerTokenTestnet(engine);
      }
      case TOKENS.DIGIXDAO: {
        return new DigixDAOTokenTestnet(engine);
      }
      case TOKENS.QASH: {
        return new QASHTokenTestnet(engine);
      }
      case TOKENS.ETHOS: {
        return new EthosTokenTestnet(engine);
      }
      case TOKENS.FUNFAIR: {
        return new FunFairTokenTestnet(engine);
      }
      case TOKENS.REQUESTNETWORK: {
        return new RequestNetworkTokenTestnet(engine);
      }
      case TOKENS.BANCOR: {
        return new BancorTokenTestnet(engine);
      }
      case TOKENS.ICONOMI: {
        return new IconomiTokenTestnet(engine);
      }
      case TOKENS.TENXPAY: {
        return new TenXPayTokenTestnet(engine);
      }
      case TOKENS.STORJ: {
        return new StorjTokenTestnet(engine);
      }
      case TOKENS.ENJINCOIN: {
        return new EnjinCoinTokenTestnet(engine);
      }
      case TOKENS.MONACO: {
        return new MonacoTokenTestnet(engine);
      }
      case TOKENS.EDGELESS: {
        return new EdgelessTokenTestnet(engine);
      }
      case TOKENS.VECHAIN: {
        return new VeChainTokenTestnet(engine);
      }
      case TOKENS.ICON: {
        return new ICONTokenTestnet(engine);
      }
      case TOKENS.ZEROX: {
        return new ZeroXTokenTestnet(engine);
      }
    }
  }
}
