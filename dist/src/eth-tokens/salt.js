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
var SaltTokenTestnet = (function (_super) {
    __extends(SaltTokenTestnet, _super);
    function SaltTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Salt.contractAddress, ethEngine) || this;
    }
    return SaltTokenTestnet;
}(dex_1.DEX));
exports.SaltTokenTestnet = SaltTokenTestnet;
var SaltTokenMainnet = (function (_super) {
    __extends(SaltTokenMainnet, _super);
    function SaltTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Salt.contractAddress, ethEngine) || this;
    }
    return SaltTokenMainnet;
}(dex_1.DEX));
exports.SaltTokenMainnet = SaltTokenMainnet;
//# sourceMappingURL=salt.js.map