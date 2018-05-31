"use strict";
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
var Web3 = require("web3/src");
var hdkey = require("hdkey");
var walletN = 256;
var EthConfirmation;
(function (EthConfirmation) {
    EthConfirmation[EthConfirmation["RECEIPT"] = 0] = "RECEIPT";
    EthConfirmation[EthConfirmation["CONFIRMATION"] = 1] = "CONFIRMATION";
    EthConfirmation[EthConfirmation["STATIC"] = 2] = "STATIC";
})(EthConfirmation = exports.EthConfirmation || (exports.EthConfirmation = {}));
var EthEngine = (function () {
    function EthEngine(abiConfiguration, configuration, bin) {
        this.abiConfiguration = abiConfiguration;
        this.configuration = configuration;
        this.bin = bin;
        this.maxThreads = 20;
        this.firstBlockNumber = 1909000;
        var wsProvider = new Web3.providers.WebsocketProvider(configuration.wshost);
        this.web3 = new Web3(wsProvider);
        this.web3.defaultAccount = configuration.defaultWallet;
        if (abiConfiguration) {
            this.contract = new this.web3.eth.Contract(abiConfiguration, configuration.contractAddress);
        }
    }
    EthEngine.prototype.isListening = function () {
        return this.web3.currentProvider.connection.readyState === 0 ||
            this.web3.currentProvider.connection.readyState === 1;
    };
    EthEngine.prototype.createAccount = function (password) {
        var accounts = this.web3.eth.accounts;
        var acc = accounts.create();
        var keystore = acc.encrypt(password, { n: walletN });
        return {
            wallet: acc,
            keystore: keystore,
        };
    };
    EthEngine.prototype.login = function (keystore) {
        this.configuration.defaultWallet = keystore.address;
        this.web3.eth.accounts.wallet.add(keystore);
        this.web3.eth.defaultAccount = keystore.address;
        return keystore;
    };
    EthEngine.prototype.getBalance = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.web3.eth.getBalance(address)];
                    case 1:
                        balance = _a.sent();
                        return [2, this.web3.utils.fromWei(balance, "ether")];
                }
            });
        });
    };
    EthEngine.prototype.sendAllEther = function (privateKey, toAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var currentBalance, currentGasPrice, estimateGas, signedTx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getBalance(this.web3.eth.defaultAccount)];
                    case 1:
                        currentBalance = _a.sent();
                        return [4, this.web3.eth.getGasPrice()];
                    case 2:
                        currentGasPrice = _a.sent();
                        return [4, this.web3.eth.estimateGas({
                                from: this.web3.eth.defaultAccount,
                                to: toAddress,
                                amount: currentBalance,
                            })];
                    case 3:
                        estimateGas = _a.sent();
                        return [4, this.web3.eth.signTransaction({
                                from: this.web3.eth.defaultAccount,
                                gasPrice: currentGasPrice,
                                gas: estimateGas,
                                gasLimit: estimateGas * 2,
                                to: toAddress,
                                value: currentBalance - estimateGas * currentGasPrice * 2,
                                data: "",
                            }, privateKey)];
                    case 4:
                        signedTx = _a.sent();
                        return [2, this.web3.eth.sendSignedTransaction(signedTx.rawTransaction)];
                }
            });
        });
    };
    EthEngine.prototype.sendEther = function (toAddress, balance) {
        return __awaiter(this, void 0, void 0, function () {
            var weiBalance, currentGasPrice, estimateGas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        weiBalance = this.web3.utils.toWei(balance, "ether");
                        return [4, this.web3.eth.getGasPrice()];
                    case 1:
                        currentGasPrice = _a.sent();
                        return [4, this.web3.eth.estimateGas({
                                from: this.web3.eth.defaultAccount,
                                to: toAddress,
                                amount: weiBalance,
                            })];
                    case 2:
                        estimateGas = _a.sent();
                        return [4, this.web3.eth.sendTransaction({
                                from: this.web3.eth.defaultAccount,
                                gasPrice: currentGasPrice,
                                gas: estimateGas,
                                gasLimit: estimateGas * 2,
                                to: toAddress,
                                value: weiBalance,
                            })];
                    case 3: return [2, _a.sent()];
                }
            });
        });
    };
    EthEngine.prototype.getContractCode = function (contractAddress) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.web3.eth.getCode(contractAddress)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    EthEngine.prototype.callFunction = function (name, params, generalParams, confirmation, abi, contractAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var contract, code, defaultWallet, payable, ets, method, GAS_PRICE, GAS, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        confirmation = confirmation === undefined ? 0 : confirmation;
                        contract = null;
                        code = null;
                        defaultWallet = null;
                        payable = this.isMethodPayable(name, abi === undefined ? this.abiConfiguration : abi);
                        if (!(abi && contractAddress)) return [3, 3];
                        if (!payable) return [3, 2];
                        return [4, this.getContractCode(contractAddress)];
                    case 1:
                        code = _b.sent();
                        _b.label = 2;
                    case 2:
                        contract = new this.web3.eth.Contract(abi, contractAddress);
                        defaultWallet = this.configuration.defaultWallet;
                        return [3, 4];
                    case 3:
                        defaultWallet = this.abiConfiguration.defaultWallet;
                        code = this.bin.code;
                        contract = new this.web3.eth.Contract(this.abiConfiguration, this.configuration.contractAddress);
                        _b.label = 4;
                    case 4:
                        if (!(generalParams.gas === undefined && payable)) return [3, 6];
                        return [4, this.web3.eth.estimateGas({ data: code, to: defaultWallet })];
                    case 5:
                        ets = _b.sent();
                        generalParams.gas = ets;
                        generalParams.gasLimit = ets * 2;
                        _b.label = 6;
                    case 6:
                        method = (_a = contract.methods)[name].apply(_a, params);
                        return [4, this.web3.eth.getGasPrice()];
                    case 7:
                        GAS_PRICE = _b.sent();
                        return [4, method.estimateGas(generalParams)];
                    case 8:
                        GAS = _b.sent();
                        generalParams.gas = GAS;
                        generalParams.gasLimit = GAS * 2;
                        generalParams.gasPrice = GAS_PRICE;
                        return [2, new Promise(function (resolve, reject) {
                                try {
                                    switch (confirmation) {
                                        case EthConfirmation.RECEIPT: {
                                            method.send(generalParams).on("receipt", function (rec) {
                                                resolve(rec);
                                            }).catch(function (err) {
                                                reject(err);
                                            });
                                            break;
                                        }
                                        case EthConfirmation.CONFIRMATION: {
                                            method.send(generalParams).on("confirmation", function (confNumber, receipt) {
                                                receipt.confNumber = confNumber;
                                                resolve(receipt);
                                            }).catch(function (err) {
                                                reject(err);
                                            });
                                            break;
                                        }
                                        case EthConfirmation.STATIC: {
                                            method.call(generalParams, function (err, result) {
                                                if (err) {
                                                    reject(err);
                                                }
                                                else {
                                                    resolve(result);
                                                }
                                            });
                                            break;
                                        }
                                    }
                                }
                                catch (e) {
                                    reject(e);
                                }
                            })];
                }
            });
        });
    };
    EthEngine.prototype.recoverAccountFromSeed = function (pkSeed) {
        var HDKey = new hdkey.fromMasterSeed(pkSeed);
        var hdnode = HDKey.derive("m/44'/60'/0'/0/0");
        var privKey = hdnode._privateKey.toString("hex");
        var accounts = this.web3.eth.accounts;
        var account = accounts.privateKeyToAccount("0x" + privKey);
        this.configuration.defaultWallet = account.address;
        this.web3.eth.defaultAccount = account.address;
        return account;
    };
    EthEngine.prototype.recoverAccount = function (pKey) {
        var accounts = this.web3.eth.accounts;
        return accounts.privateKeyToAccount("0x" + pKey);
    };
    EthEngine.prototype.toWei = function (amount, conversion) {
        return this.web3.utils.toWei(amount, conversion);
    };
    EthEngine.prototype.fromWeiToEther = function (weiValue) {
        var ether = this.web3.utils.fromWei(weiValue, "ether");
        return ether;
    };
    EthEngine.prototype.isMethodPayable = function (name, abi) {
        for (var i in abi) {
            if (abi[i].name === name) {
                return abi[i].stateMutability !== "nonpayable";
            }
        }
        return false;
    };
    EthEngine.prototype.scanBlockRange = function (startingBlock, stoppingBlock, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var that, results;
            return __generator(this, function (_a) {
                that = this;
                results = [];
                return [2, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        function getPercentComplete(bn) {
                            var t = stoppingBlock - startingBlock;
                            var n = bn - startingBlock;
                            return Math.floor(n / t * 100);
                        }
                        function scanTransactionCallback(txn, block) {
                            if (txn.to === that.web3.defaultAccount) {
                                var ether = that.web3.utils.fromWei(txn.value, "ether");
                                var message = "\r" + block.timestamp + " +" + ether + " from " + txn.from;
                                results.push(message);
                            }
                            else if (txn.from === that.web3.defaultAccount) {
                                var ether = that.web3.utils.fromWei(txn.value, "ether");
                                var message = "\r" + block.timestamp + " -" + ether + " to " + txn.to;
                                results.push(message);
                            }
                        }
                        function exitThread() {
                            if (--numThreads === 0) {
                                var numBlocksScanned = 1 + stoppingBlock - startingBlock;
                                var stopTime = new Date();
                                var duration = (stopTime.getTime() - startTime.getTime()) / 1000;
                                var blocksPerSec = Math.floor(numBlocksScanned / duration);
                                var msg = "Scanned to block " + stoppingBlock + " (" + numBlocksScanned + " in " + duration + " seconds; " + blocksPerSec + " blocks/sec).";
                                var len = msg.length;
                                var numSpaces = process.stdout.columns - len;
                                var spaces = Array(1 + numSpaces).join(" ");
                                process.stdout.write("\r" + msg + spaces + "\n");
                                if (callback) {
                                    callback(gotError, stoppingBlock);
                                }
                            }
                            resolve(results);
                            return numThreads;
                        }
                        function scanBlockCallback(block) {
                            if (block.transactions) {
                                for (var _i = 0, _a = block.transactions; _i < _a.length; _i++) {
                                    var i = _a[_i];
                                    var txn = i;
                                    scanTransactionCallback(txn, block);
                                }
                            }
                        }
                        function asyncScanNextBlock() {
                            if (gotError) {
                                return exitThread();
                            }
                            if (blockNumber > stoppingBlock) {
                                return exitThread();
                            }
                            var myBlockNumber = blockNumber++;
                            if (myBlockNumber % that.maxThreads === 0 || myBlockNumber === stoppingBlock) {
                                var pctDone = getPercentComplete(myBlockNumber);
                                process.stdout.write("\rScanning block " + myBlockNumber + " - " + pctDone + " %");
                            }
                            that.web3.eth.getBlock(myBlockNumber, true, function (error, block) {
                                if (error) {
                                    gotError = true;
                                }
                                else {
                                    scanBlockCallback(block);
                                    asyncScanNextBlock();
                                }
                            });
                        }
                        var blockNumber, gotError, numThreads, startTime, nt;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!!stoppingBlock) return [3, 2];
                                    return [4, that.web3.eth.getBlockNumber()];
                                case 1:
                                    stoppingBlock = _a.sent();
                                    _a.label = 2;
                                case 2:
                                    if (!startingBlock) {
                                        startingBlock = stoppingBlock - 10;
                                    }
                                    if (startingBlock > stoppingBlock) {
                                        return [2, -1];
                                    }
                                    blockNumber = startingBlock;
                                    gotError = false;
                                    numThreads = 0;
                                    startTime = new Date();
                                    for (nt = 0; nt < that.maxThreads && startingBlock + nt <= stoppingBlock; nt++) {
                                        numThreads++;
                                        asyncScanNextBlock();
                                    }
                                    return [2, nt];
                            }
                        });
                    }); })];
            });
        });
    };
    return EthEngine;
}());
exports.EthEngine = EthEngine;
//# sourceMappingURL=eth-engine.js.map