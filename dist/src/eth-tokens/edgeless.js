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
var EdgelessTokenTestnet = (function (_super) {
    __extends(EdgelessTokenTestnet, _super);
    function EdgelessTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Edgeless.contractAddress, ethEngine) || this;
    }
    return EdgelessTokenTestnet;
}(dex_1.DEX));
exports.EdgelessTokenTestnet = EdgelessTokenTestnet;
var EdgelessTokenMainnet = (function (_super) {
    __extends(EdgelessTokenMainnet, _super);
    function EdgelessTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Edgeless.contractAddress, ethEngine) || this;
    }
    return EdgelessTokenMainnet;
}(dex_1.DEX));
exports.EdgelessTokenMainnet = EdgelessTokenMainnet;
//# sourceMappingURL=edgeless.js.map