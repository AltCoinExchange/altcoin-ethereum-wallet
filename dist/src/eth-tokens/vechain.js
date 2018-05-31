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
var VeChainTokenTestnet = (function (_super) {
    __extends(VeChainTokenTestnet, _super);
    function VeChainTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.VeChain.contractAddress, ethEngine) || this;
    }
    return VeChainTokenTestnet;
}(dex_1.DEX));
exports.VeChainTokenTestnet = VeChainTokenTestnet;
var VeChainTokenMainnet = (function (_super) {
    __extends(VeChainTokenMainnet, _super);
    function VeChainTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.VeChain.contractAddress, ethEngine) || this;
    }
    return VeChainTokenMainnet;
}(dex_1.DEX));
exports.VeChainTokenMainnet = VeChainTokenMainnet;
//# sourceMappingURL=vechain.js.map