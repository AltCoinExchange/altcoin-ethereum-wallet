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
var TronTokenTestnet = (function (_super) {
    __extends(TronTokenTestnet, _super);
    function TronTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Tron.contractAddress, ethEngine) || this;
    }
    return TronTokenTestnet;
}(dex_1.DEX));
exports.TronTokenTestnet = TronTokenTestnet;
var TronTokenMainnet = (function (_super) {
    __extends(TronTokenMainnet, _super);
    function TronTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Tron.contractAddress, ethEngine) || this;
    }
    return TronTokenMainnet;
}(dex_1.DEX));
exports.TronTokenMainnet = TronTokenMainnet;
//# sourceMappingURL=tron.js.map