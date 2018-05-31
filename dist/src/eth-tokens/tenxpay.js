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
var TenXPayTokenTestnet = (function (_super) {
    __extends(TenXPayTokenTestnet, _super);
    function TenXPayTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.TenXPay.contractAddress, ethEngine) || this;
    }
    return TenXPayTokenTestnet;
}(dex_1.DEX));
exports.TenXPayTokenTestnet = TenXPayTokenTestnet;
var TenXPayTokenMainnet = (function (_super) {
    __extends(TenXPayTokenMainnet, _super);
    function TenXPayTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.TenXPay.contractAddress, ethEngine) || this;
    }
    return TenXPayTokenMainnet;
}(dex_1.DEX));
exports.TenXPayTokenMainnet = TenXPayTokenMainnet;
//# sourceMappingURL=tenxpay.js.map