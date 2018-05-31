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
var SubstratumTokenTestnet = (function (_super) {
    __extends(SubstratumTokenTestnet, _super);
    function SubstratumTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Substratum.contractAddress, ethEngine) || this;
    }
    return SubstratumTokenTestnet;
}(dex_1.DEX));
exports.SubstratumTokenTestnet = SubstratumTokenTestnet;
var SubstratumTokenMainnet = (function (_super) {
    __extends(SubstratumTokenMainnet, _super);
    function SubstratumTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Substratum.contractAddress, ethEngine) || this;
    }
    return SubstratumTokenMainnet;
}(dex_1.DEX));
exports.SubstratumTokenMainnet = SubstratumTokenMainnet;
//# sourceMappingURL=substratum.js.map