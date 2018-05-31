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
var GolemTokenTestnet = (function (_super) {
    __extends(GolemTokenTestnet, _super);
    function GolemTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Golem.contractAddress, ethEngine) || this;
    }
    return GolemTokenTestnet;
}(dex_1.DEX));
exports.GolemTokenTestnet = GolemTokenTestnet;
var GolemTokenMainnet = (function (_super) {
    __extends(GolemTokenMainnet, _super);
    function GolemTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Golem.contractAddress, ethEngine) || this;
    }
    return GolemTokenMainnet;
}(dex_1.DEX));
exports.GolemTokenMainnet = GolemTokenMainnet;
//# sourceMappingURL=golem.js.map