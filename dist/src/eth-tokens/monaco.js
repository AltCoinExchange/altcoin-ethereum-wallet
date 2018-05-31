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
var MonacoTokenTestnet = (function (_super) {
    __extends(MonacoTokenTestnet, _super);
    function MonacoTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Monaco.contractAddress, ethEngine) || this;
    }
    return MonacoTokenTestnet;
}(dex_1.DEX));
exports.MonacoTokenTestnet = MonacoTokenTestnet;
var MonacoTokenMainnet = (function (_super) {
    __extends(MonacoTokenMainnet, _super);
    function MonacoTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Monaco.contractAddress, ethEngine) || this;
    }
    return MonacoTokenMainnet;
}(dex_1.DEX));
exports.MonacoTokenMainnet = MonacoTokenMainnet;
//# sourceMappingURL=monaco.js.map