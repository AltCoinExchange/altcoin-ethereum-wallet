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
var GnosisTokenTestnet = (function (_super) {
    __extends(GnosisTokenTestnet, _super);
    function GnosisTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Gnosis.contractAddress, ethEngine) || this;
    }
    return GnosisTokenTestnet;
}(dex_1.DEX));
exports.GnosisTokenTestnet = GnosisTokenTestnet;
var GnosisTokenMainnet = (function (_super) {
    __extends(GnosisTokenMainnet, _super);
    function GnosisTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Gnosis.contractAddress, ethEngine) || this;
    }
    return GnosisTokenMainnet;
}(dex_1.DEX));
exports.GnosisTokenMainnet = GnosisTokenMainnet;
//# sourceMappingURL=gnosis.js.map