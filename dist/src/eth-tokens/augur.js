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
var AugurTokenTestnet = (function (_super) {
    __extends(AugurTokenTestnet, _super);
    function AugurTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Augur.contractAddress, ethEngine) || this;
    }
    return AugurTokenTestnet;
}(dex_1.DEX));
exports.AugurTokenTestnet = AugurTokenTestnet;
var AugurTokenMainnet = (function (_super) {
    __extends(AugurTokenMainnet, _super);
    function AugurTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Augur.contractAddress, ethEngine) || this;
    }
    return AugurTokenMainnet;
}(dex_1.DEX));
exports.AugurTokenMainnet = AugurTokenMainnet;
//# sourceMappingURL=augur.js.map