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
var District0xTokenTestnet = (function (_super) {
    __extends(District0xTokenTestnet, _super);
    function District0xTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.District0x.contractAddress, ethEngine) || this;
    }
    return District0xTokenTestnet;
}(dex_1.DEX));
exports.District0xTokenTestnet = District0xTokenTestnet;
var District0xTokenMainnet = (function (_super) {
    __extends(District0xTokenMainnet, _super);
    function District0xTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.District0x.contractAddress, ethEngine) || this;
    }
    return District0xTokenMainnet;
}(dex_1.DEX));
exports.District0xTokenMainnet = District0xTokenMainnet;
//# sourceMappingURL=district0x.js.map