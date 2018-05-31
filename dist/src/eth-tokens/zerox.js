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
var ZeroXTokenTestnet = (function (_super) {
    __extends(ZeroXTokenTestnet, _super);
    function ZeroXTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.ZeroX.contractAddress, ethEngine) || this;
    }
    return ZeroXTokenTestnet;
}(dex_1.DEX));
exports.ZeroXTokenTestnet = ZeroXTokenTestnet;
var ZeroXTokenMainnet = (function (_super) {
    __extends(ZeroXTokenMainnet, _super);
    function ZeroXTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.ZeroX.contractAddress, ethEngine) || this;
    }
    return ZeroXTokenMainnet;
}(dex_1.DEX));
exports.ZeroXTokenMainnet = ZeroXTokenMainnet;
//# sourceMappingURL=zerox.js.map