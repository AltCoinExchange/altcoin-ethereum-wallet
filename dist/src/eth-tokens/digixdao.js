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
var DigixDAOTokenTestnet = (function (_super) {
    __extends(DigixDAOTokenTestnet, _super);
    function DigixDAOTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.DigixDAO.contractAddress, ethEngine) || this;
    }
    return DigixDAOTokenTestnet;
}(dex_1.DEX));
exports.DigixDAOTokenTestnet = DigixDAOTokenTestnet;
var DigixDAOTokenMainnet = (function (_super) {
    __extends(DigixDAOTokenMainnet, _super);
    function DigixDAOTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.DigixDAO.contractAddress, ethEngine) || this;
    }
    return DigixDAOTokenMainnet;
}(dex_1.DEX));
exports.DigixDAOTokenMainnet = DigixDAOTokenMainnet;
//# sourceMappingURL=digixdao.js.map