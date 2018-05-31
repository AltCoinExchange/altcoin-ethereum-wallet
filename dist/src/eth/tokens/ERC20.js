"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var abiutil_1 = require("../../config/abi/util/abiutil");
var eth_engine_1 = require("../eth-engine");
var abiParams = abiutil_1.AbiUtil.abiParams;
var AbiType = abiutil_1.AbiUtil.AbiType;
var getAbiParams = abiutil_1.AbiUtil.getAbiParams;
var ERC20 = (function () {
    function ERC20(contractAddress, ethEngine) {
        this.contractAddress = contractAddress;
        this.ethEngine = ethEngine;
    }
    ERC20.prototype.totalSupply = function () {
        return 0;
    };
    ERC20.prototype.balanceOf = function (owner) {
        return __awaiter(this, void 0, void 0, function () {
            var abi, generalParams, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        abi = getAbiParams(this, "balanceOf");
                        generalParams = {
                            from: this.ethEngine.configuration.defaultWallet
                        };
                        return [4, this.ethEngine.callFunction("balanceOf", [owner], generalParams, eth_engine_1.EthConfirmation.STATIC, abi, this.contractAddress)];
                    case 1:
                        result = _a.sent();
                        return [2, this.ethEngine.fromWeiToEther(result)];
                }
            });
        });
    };
    ERC20.prototype.transfer = function (to, value) {
        return __awaiter(this, void 0, void 0, function () {
            var abi, configParams, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        abi = getAbiParams(this, "transfer");
                        configParams = {
                            from: this.ethEngine.configuration.defaultWallet
                        };
                        return [4, this.ethEngine.callFunction("transfer", [to, value], configParams, eth_engine_1.EthConfirmation.CONFIRMATION, abi, this.contractAddress)];
                    case 1:
                        result = _a.sent();
                        return [2, result];
                }
            });
        });
    };
    ERC20.prototype.transferFrom = function (from, to, value) {
        return __awaiter(this, void 0, void 0, function () {
            var abi, configParams, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        abi = getAbiParams(this, "transferFrom");
                        configParams = {
                            from: this.ethEngine.configuration.defaultWallet
                        };
                        return [4, this.ethEngine.callFunction("transferFrom", [from, to, value], configParams, eth_engine_1.EthConfirmation.CONFIRMATION, abi, this.contractAddress)];
                    case 1:
                        result = _a.sent();
                        return [2, result];
                }
            });
        });
    };
    ERC20.prototype.approve = function (spender, value) {
        return __awaiter(this, void 0, void 0, function () {
            var abi, configParams, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        abi = getAbiParams(this, "approve");
                        configParams = {
                            from: this.ethEngine.configuration.defaultWallet
                        };
                        return [4, this.ethEngine.callFunction("approve", [spender, value], configParams, eth_engine_1.EthConfirmation.CONFIRMATION, abi, this.contractAddress)];
                    case 1:
                        result = _a.sent();
                        return [2, result];
                }
            });
        });
    };
    ERC20.prototype.allowance = function (owner, spender) {
        return __awaiter(this, void 0, void 0, function () {
            var abi, configParams, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        abi = getAbiParams(this, "allowance");
                        configParams = {
                            from: this.ethEngine.configuration.defaultWallet
                        };
                        return [4, this.ethEngine.callFunction("allowance", [owner, spender], configParams, eth_engine_1.EthConfirmation.STATIC, abi, this.contractAddress)];
                    case 1:
                        result = _a.sent();
                        return [2, result];
                }
            });
        });
    };
    ERC20.prototype.faucet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var abi, configParams, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        abi = getAbiParams(this, "faucet");
                        configParams = {
                            from: this.ethEngine.configuration.defaultWallet
                        };
                        return [4, this.ethEngine.callFunction("faucet", [], configParams, eth_engine_1.EthConfirmation.CONFIRMATION, abi, this.contractAddress)];
                    case 1:
                        result = _a.sent();
                        return [2, result];
                }
            });
        });
    };
    __decorate([
        abiParams({}, { "": AbiType.uint256 }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], ERC20.prototype, "totalSupply", null);
    __decorate([
        abiParams({}, { "balance": AbiType.uint256 }, { "_owner": AbiType.address }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], ERC20.prototype, "balanceOf", null);
    __decorate([
        abiParams({ stateMutability: "payable" }, { "": AbiType.bool }, { "_to": AbiType.address }, { "_value": AbiType.uint256 }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", Promise)
    ], ERC20.prototype, "transfer", null);
    __decorate([
        abiParams({ stateMutability: "payable" }, { "": AbiType.bool }, { "_from": AbiType.uint256 }, { "_to": AbiType.address }, { "_value": AbiType.uint256 }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Number]),
        __metadata("design:returntype", Promise)
    ], ERC20.prototype, "transferFrom", null);
    __decorate([
        abiParams({ stateMutability: "payable" }, { "": AbiType.bool }, { "_spender": AbiType.address }, { "_value": AbiType.uint256 }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", Promise)
    ], ERC20.prototype, "approve", null);
    __decorate([
        abiParams({}, { "": AbiType.uint256 }, { "_owner": AbiType.address }, { "_spender": AbiType.address }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], ERC20.prototype, "allowance", null);
    __decorate([
        abiParams({ stateMutability: "payable" }, {}, {}),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ERC20.prototype, "faucet", null);
    return ERC20;
}());
exports.ERC20 = ERC20;
//# sourceMappingURL=ERC20.js.map