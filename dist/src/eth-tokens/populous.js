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
var PopulousTokenTestnet = (function (_super) {
    __extends(PopulousTokenTestnet, _super);
    function PopulousTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Populous.contractAddress, ethEngine) || this;
    }
    return PopulousTokenTestnet;
}(dex_1.DEX));
exports.PopulousTokenTestnet = PopulousTokenTestnet;
var PopulousTokenMainnet = (function (_super) {
    __extends(PopulousTokenMainnet, _super);
    function PopulousTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Populous.contractAddress, ethEngine) || this;
    }
    return PopulousTokenMainnet;
}(dex_1.DEX));
exports.PopulousTokenMainnet = PopulousTokenMainnet;
//# sourceMappingURL=populous.js.map