"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tokenconfig_1 = require("../config/tokens/tokenconfig");
var tokenconfigmain_1 = require("../config/tokens/tokenconfigmain");
var dex_1 = require("../eth/tokens/dex");
var EnjinCoinTokenTestnet = (function (_super) {
    __extends(EnjinCoinTokenTestnet, _super);
    function EnjinCoinTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.EnjinCoin.contractAddress, ethEngine) || this;
    }
    return EnjinCoinTokenTestnet;
}(dex_1.DEX));
exports.EnjinCoinTokenTestnet = EnjinCoinTokenTestnet;
var EnjinCoinTokenMainnet = (function (_super) {
    __extends(EnjinCoinTokenMainnet, _super);
    function EnjinCoinTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.EnjinCoin.contractAddress, ethEngine) || this;
    }
    return EnjinCoinTokenMainnet;
}(dex_1.DEX));
exports.EnjinCoinTokenMainnet = EnjinCoinTokenMainnet;
//# sourceMappingURL=enjincoin.js.map