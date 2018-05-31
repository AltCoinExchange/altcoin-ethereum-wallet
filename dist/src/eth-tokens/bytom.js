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
var BytomTokenTestnet = (function (_super) {
    __extends(BytomTokenTestnet, _super);
    function BytomTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Bytom.contractAddress, ethEngine) || this;
    }
    return BytomTokenTestnet;
}(dex_1.DEX));
exports.BytomTokenTestnet = BytomTokenTestnet;
var BytomTokenMainnet = (function (_super) {
    __extends(BytomTokenMainnet, _super);
    function BytomTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Bytom.contractAddress, ethEngine) || this;
    }
    return BytomTokenMainnet;
}(dex_1.DEX));
exports.BytomTokenMainnet = BytomTokenMainnet;
//# sourceMappingURL=bytom.js.map