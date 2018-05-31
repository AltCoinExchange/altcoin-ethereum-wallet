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
var QASHTokenTestnet = (function (_super) {
    __extends(QASHTokenTestnet, _super);
    function QASHTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.QASH.contractAddress, ethEngine) || this;
    }
    return QASHTokenTestnet;
}(dex_1.DEX));
exports.QASHTokenTestnet = QASHTokenTestnet;
var QASHTokenMainnet = (function (_super) {
    __extends(QASHTokenMainnet, _super);
    function QASHTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.QASH.contractAddress, ethEngine) || this;
    }
    return QASHTokenMainnet;
}(dex_1.DEX));
exports.QASHTokenMainnet = QASHTokenMainnet;
//# sourceMappingURL=qash.js.map