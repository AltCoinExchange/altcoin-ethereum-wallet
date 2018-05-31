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
var CivicTokenTestnet = (function (_super) {
    __extends(CivicTokenTestnet, _super);
    function CivicTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Civic.contractAddress, ethEngine) || this;
    }
    return CivicTokenTestnet;
}(dex_1.DEX));
exports.CivicTokenTestnet = CivicTokenTestnet;
var CivicTokenMainnet = (function (_super) {
    __extends(CivicTokenMainnet, _super);
    function CivicTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Civic.contractAddress, ethEngine) || this;
    }
    return CivicTokenMainnet;
}(dex_1.DEX));
exports.CivicTokenMainnet = CivicTokenMainnet;
//# sourceMappingURL=civic.js.map