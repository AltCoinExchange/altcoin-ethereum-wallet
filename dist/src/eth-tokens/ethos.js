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
var EthosTokenTestnet = (function (_super) {
    __extends(EthosTokenTestnet, _super);
    function EthosTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Ethos.contractAddress, ethEngine) || this;
    }
    return EthosTokenTestnet;
}(dex_1.DEX));
exports.EthosTokenTestnet = EthosTokenTestnet;
var EthosTokenMainnet = (function (_super) {
    __extends(EthosTokenMainnet, _super);
    function EthosTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Ethos.contractAddress, ethEngine) || this;
    }
    return EthosTokenMainnet;
}(dex_1.DEX));
exports.EthosTokenMainnet = EthosTokenMainnet;
//# sourceMappingURL=ethos.js.map