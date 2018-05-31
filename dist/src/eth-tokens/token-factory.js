"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aragon_1 = require("./aragon");
var augur_1 = require("./augur");
var bat_1 = require("./bat");
var eos_1 = require("./eos");
var gnosis_1 = require("./gnosis");
var golem_1 = require("./golem");
var salt_1 = require("./salt");
var civic_1 = require("./civic");
var omisego_1 = require("./omisego");
var district0x_1 = require("./district0x");
var statusnetwork_1 = require("./statusnetwork");
var substratum_1 = require("./substratum");
var tron_1 = require("./tron");
var bytom_1 = require("./bytom");
var dent_1 = require("./dent");
var populous_1 = require("./populous");
var maker_1 = require("./maker");
var digixdao_1 = require("./digixdao");
var qash_1 = require("./qash");
var ethos_1 = require("./ethos");
var funfair_1 = require("./funfair");
var requestnetwork_1 = require("./requestnetwork");
var enjincoin_1 = require("./enjincoin");
var monaco_1 = require("./monaco");
var edgeless_1 = require("./edgeless");
var vechain_1 = require("./vechain");
var icon_1 = require("./icon");
var zerox_1 = require("./zerox");
var bancor_1 = require("./bancor");
var iconomi_1 = require("./iconomi");
var tenxpay_1 = require("./tenxpay");
var storj_1 = require("./storj");
var TOKENS;
(function (TOKENS) {
    TOKENS[TOKENS["AUGUR"] = 1] = "AUGUR";
    TOKENS[TOKENS["GOLEM"] = 2] = "GOLEM";
    TOKENS[TOKENS["GNOSIS"] = 3] = "GNOSIS";
    TOKENS[TOKENS["BAT"] = 4] = "BAT";
    TOKENS[TOKENS["ARAGON"] = 5] = "ARAGON";
    TOKENS[TOKENS["EOS"] = 6] = "EOS";
    TOKENS[TOKENS["SALT"] = 7] = "SALT";
    TOKENS[TOKENS["CIVIC"] = 8] = "CIVIC";
    TOKENS[TOKENS["OMISEGO"] = 9] = "OMISEGO";
    TOKENS[TOKENS["DISTRICT0X"] = 10] = "DISTRICT0X";
    TOKENS[TOKENS["STATUSNETWORK"] = 11] = "STATUSNETWORK";
    TOKENS[TOKENS["SUBSTRATUM"] = 12] = "SUBSTRATUM";
    TOKENS[TOKENS["TRON"] = 13] = "TRON";
    TOKENS[TOKENS["BYTOM"] = 14] = "BYTOM";
    TOKENS[TOKENS["DENT"] = 15] = "DENT";
    TOKENS[TOKENS["POPULOUS"] = 16] = "POPULOUS";
    TOKENS[TOKENS["MAKER"] = 17] = "MAKER";
    TOKENS[TOKENS["DIGIXDAO"] = 18] = "DIGIXDAO";
    TOKENS[TOKENS["QASH"] = 19] = "QASH";
    TOKENS[TOKENS["ETHOS"] = 20] = "ETHOS";
    TOKENS[TOKENS["FUNFAIR"] = 21] = "FUNFAIR";
    TOKENS[TOKENS["REQUESTNETWORK"] = 22] = "REQUESTNETWORK";
    TOKENS[TOKENS["BANCOR"] = 23] = "BANCOR";
    TOKENS[TOKENS["ICONOMI"] = 24] = "ICONOMI";
    TOKENS[TOKENS["TENXPAY"] = 25] = "TENXPAY";
    TOKENS[TOKENS["STORJ"] = 26] = "STORJ";
    TOKENS[TOKENS["ENJINCOIN"] = 27] = "ENJINCOIN";
    TOKENS[TOKENS["MONACO"] = 28] = "MONACO";
    TOKENS[TOKENS["EDGELESS"] = 29] = "EDGELESS";
    TOKENS[TOKENS["VECHAIN"] = 30] = "VECHAIN";
    TOKENS[TOKENS["ICON"] = 31] = "ICON";
    TOKENS[TOKENS["ZEROX"] = 32] = "ZEROX";
})(TOKENS = exports.TOKENS || (exports.TOKENS = {}));
var TokenFactory = (function () {
    function TokenFactory() {
    }
    TokenFactory.GetToken = function (token, engine, testnet) {
        if (testnet === void 0) { testnet = true; }
        if (!testnet) {
            return this.GetTokenMain(token, engine);
        }
        switch (token) {
            case TOKENS.GOLEM: {
                return new golem_1.GolemTokenTestnet(engine);
            }
            case TOKENS.AUGUR: {
                return new augur_1.AugurTokenTestnet(engine);
            }
            case TOKENS.GNOSIS: {
                return new gnosis_1.GnosisTokenTestnet(engine);
            }
            case TOKENS.BAT: {
                return new bat_1.BatTokenTestnet(engine);
            }
            case TOKENS.ARAGON: {
                return new aragon_1.AragonTokenTestnet(engine);
            }
            case TOKENS.EOS: {
                return new eos_1.EosTokenTestnet(engine);
            }
            case TOKENS.SALT: {
                return new salt_1.SaltTokenTestnet(engine);
            }
            case TOKENS.CIVIC: {
                return new civic_1.CivicTokenTestnet(engine);
            }
            case TOKENS.OMISEGO: {
                return new omisego_1.OmiseGoTokenTestnet(engine);
            }
            case TOKENS.DISTRICT0X: {
                return new district0x_1.District0xTokenTestnet(engine);
            }
            case TOKENS.STATUSNETWORK: {
                return new statusnetwork_1.StatusNetworkTokenTestnet(engine);
            }
            case TOKENS.SUBSTRATUM: {
                return new substratum_1.SubstratumTokenTestnet(engine);
            }
            case TOKENS.TRON: {
                return new tron_1.TronTokenTestnet(engine);
            }
            case TOKENS.BYTOM: {
                return new bytom_1.BytomTokenTestnet(engine);
            }
            case TOKENS.DENT: {
                return new dent_1.DentTokenTestnet(engine);
            }
            case TOKENS.POPULOUS: {
                return new populous_1.PopulousTokenTestnet(engine);
            }
            case TOKENS.MAKER: {
                return new maker_1.MakerTokenTestnet(engine);
            }
            case TOKENS.DIGIXDAO: {
                return new digixdao_1.DigixDAOTokenTestnet(engine);
            }
            case TOKENS.QASH: {
                return new qash_1.QASHTokenTestnet(engine);
            }
            case TOKENS.ETHOS: {
                return new ethos_1.EthosTokenTestnet(engine);
            }
            case TOKENS.FUNFAIR: {
                return new funfair_1.FunFairTokenTestnet(engine);
            }
            case TOKENS.REQUESTNETWORK: {
                return new requestnetwork_1.RequestNetworkTokenTestnet(engine);
            }
            case TOKENS.BANCOR: {
                return new bancor_1.BancorTokenTestnet(engine);
            }
            case TOKENS.ICONOMI: {
                return new iconomi_1.IconomiTokenTestnet(engine);
            }
            case TOKENS.TENXPAY: {
                return new tenxpay_1.TenXPayTokenTestnet(engine);
            }
            case TOKENS.STORJ: {
                return new storj_1.StorjTokenTestnet(engine);
            }
            case TOKENS.ENJINCOIN: {
                return new enjincoin_1.EnjinCoinTokenTestnet(engine);
            }
            case TOKENS.MONACO: {
                return new monaco_1.MonacoTokenTestnet(engine);
            }
            case TOKENS.EDGELESS: {
                return new edgeless_1.EdgelessTokenTestnet(engine);
            }
            case TOKENS.VECHAIN: {
                return new vechain_1.VeChainTokenTestnet(engine);
            }
            case TOKENS.ICON: {
                return new icon_1.ICONTokenTestnet(engine);
            }
            case TOKENS.ZEROX: {
                return new zerox_1.ZeroXTokenTestnet(engine);
            }
        }
    };
    TokenFactory.GetTokenMain = function (token, engine) {
        switch (token) {
            case TOKENS.GOLEM: {
                return new golem_1.GolemTokenMainnet(engine);
            }
            case TOKENS.AUGUR: {
                return new augur_1.AugurTokenMainnet(engine);
            }
            case TOKENS.GNOSIS: {
                return new gnosis_1.GnosisTokenMainnet(engine);
            }
            case TOKENS.BAT: {
                return new bat_1.BatTokenMainnet(engine);
            }
            case TOKENS.ARAGON: {
                return new aragon_1.AragonTokenMainnet(engine);
            }
            case TOKENS.EOS: {
                return new eos_1.EosTokenMainnet(engine);
            }
            case TOKENS.SALT: {
                return new salt_1.SaltTokenMainnet(engine);
            }
            case TOKENS.CIVIC: {
                return new civic_1.CivicTokenMainnet(engine);
            }
            case TOKENS.OMISEGO: {
                return new omisego_1.OmiseGoTokenMainnet(engine);
            }
            case TOKENS.DISTRICT0X: {
                return new district0x_1.District0xTokenMainnet(engine);
            }
            case TOKENS.STATUSNETWORK: {
                return new statusnetwork_1.StatusNetworkTokenMainnet(engine);
            }
            case TOKENS.SUBSTRATUM: {
                return new substratum_1.SubstratumTokenMainnet(engine);
            }
            case TOKENS.TRON: {
                return new tron_1.TronTokenMainnet(engine);
            }
            case TOKENS.BYTOM: {
                return new bytom_1.BytomTokenMainnet(engine);
            }
            case TOKENS.DENT: {
                return new dent_1.DentTokenTestnet(engine);
            }
            case TOKENS.POPULOUS: {
                return new populous_1.PopulousTokenTestnet(engine);
            }
            case TOKENS.MAKER: {
                return new maker_1.MakerTokenTestnet(engine);
            }
            case TOKENS.DIGIXDAO: {
                return new digixdao_1.DigixDAOTokenTestnet(engine);
            }
            case TOKENS.QASH: {
                return new qash_1.QASHTokenTestnet(engine);
            }
            case TOKENS.ETHOS: {
                return new ethos_1.EthosTokenTestnet(engine);
            }
            case TOKENS.FUNFAIR: {
                return new funfair_1.FunFairTokenTestnet(engine);
            }
            case TOKENS.REQUESTNETWORK: {
                return new requestnetwork_1.RequestNetworkTokenTestnet(engine);
            }
            case TOKENS.BANCOR: {
                return new bancor_1.BancorTokenTestnet(engine);
            }
            case TOKENS.ICONOMI: {
                return new iconomi_1.IconomiTokenTestnet(engine);
            }
            case TOKENS.TENXPAY: {
                return new tenxpay_1.TenXPayTokenTestnet(engine);
            }
            case TOKENS.STORJ: {
                return new storj_1.StorjTokenTestnet(engine);
            }
            case TOKENS.ENJINCOIN: {
                return new enjincoin_1.EnjinCoinTokenTestnet(engine);
            }
            case TOKENS.MONACO: {
                return new monaco_1.MonacoTokenTestnet(engine);
            }
            case TOKENS.EDGELESS: {
                return new edgeless_1.EdgelessTokenTestnet(engine);
            }
            case TOKENS.VECHAIN: {
                return new vechain_1.VeChainTokenTestnet(engine);
            }
            case TOKENS.ICON: {
                return new icon_1.ICONTokenTestnet(engine);
            }
            case TOKENS.ZEROX: {
                return new zerox_1.ZeroXTokenTestnet(engine);
            }
        }
    };
    return TokenFactory;
}());
exports.TokenFactory = TokenFactory;
//# sourceMappingURL=token-factory.js.map