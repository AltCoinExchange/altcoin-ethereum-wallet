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
var bip39 = require("bip39");
exports.generateMnemonic = function () {
    return bip39.generateMnemonic();
};
var EXTERNAL_CHAIN = 0;
var INTERNAL_CHAIN = 1;
var Bip44Wallet = (function () {
    function Bip44Wallet(mnemonic) {
        this.account = 0;
        this.interalAddressIndex = 0;
        this.externalAddressIndex = 0;
        if (!mnemonic) {
            mnemonic = exports.generateMnemonic();
        }
        var seed = bip39.mnemonicToSeed(mnemonic);
    }
    return Bip44Wallet;
}());
exports.Bip44Wallet = Bip44Wallet;
var EthBip44Wallet = (function (_super) {
    __extends(EthBip44Wallet, _super);
    function EthBip44Wallet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coin = 60;
        return _this;
    }
    return EthBip44Wallet;
}(Bip44Wallet));
exports.EthBip44Wallet = EthBip44Wallet;
//# sourceMappingURL=seed.js.map