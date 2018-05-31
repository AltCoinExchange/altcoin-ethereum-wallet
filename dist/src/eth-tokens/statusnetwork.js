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
var StatusNetworkTokenTestnet = (function (_super) {
    __extends(StatusNetworkTokenTestnet, _super);
    function StatusNetworkTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.StatusNetwork.contractAddress, ethEngine) || this;
    }
    return StatusNetworkTokenTestnet;
}(dex_1.DEX));
exports.StatusNetworkTokenTestnet = StatusNetworkTokenTestnet;
var StatusNetworkTokenMainnet = (function (_super) {
    __extends(StatusNetworkTokenMainnet, _super);
    function StatusNetworkTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.StatusNetwork.contractAddress, ethEngine) || this;
    }
    return StatusNetworkTokenMainnet;
}(dex_1.DEX));
exports.StatusNetworkTokenMainnet = StatusNetworkTokenMainnet;
//# sourceMappingURL=statusnetwork.js.map