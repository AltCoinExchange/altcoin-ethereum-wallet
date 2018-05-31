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
var MakerTokenTestnet = (function (_super) {
    __extends(MakerTokenTestnet, _super);
    function MakerTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Maker.contractAddress, ethEngine) || this;
    }
    return MakerTokenTestnet;
}(dex_1.DEX));
exports.MakerTokenTestnet = MakerTokenTestnet;
var MakerTokenMainnet = (function (_super) {
    __extends(MakerTokenMainnet, _super);
    function MakerTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Maker.contractAddress, ethEngine) || this;
    }
    return MakerTokenMainnet;
}(dex_1.DEX));
exports.MakerTokenMainnet = MakerTokenMainnet;
//# sourceMappingURL=maker.js.map