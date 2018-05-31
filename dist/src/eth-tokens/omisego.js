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
var OmiseGoTokenTestnet = (function (_super) {
    __extends(OmiseGoTokenTestnet, _super);
    function OmiseGoTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.OmiseGo.contractAddress, ethEngine) || this;
    }
    return OmiseGoTokenTestnet;
}(dex_1.DEX));
exports.OmiseGoTokenTestnet = OmiseGoTokenTestnet;
var OmiseGoTokenMainnet = (function (_super) {
    __extends(OmiseGoTokenMainnet, _super);
    function OmiseGoTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.OmiseGo.contractAddress, ethEngine) || this;
    }
    return OmiseGoTokenMainnet;
}(dex_1.DEX));
exports.OmiseGoTokenMainnet = OmiseGoTokenMainnet;
//# sourceMappingURL=omisego.js.map