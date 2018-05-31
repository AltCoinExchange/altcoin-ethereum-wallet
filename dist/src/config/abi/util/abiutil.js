"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AbiUtil;
(function (AbiUtil) {
    var AbiType;
    (function (AbiType) {
        AbiType[AbiType["uint"] = 0] = "uint";
        AbiType[AbiType["uint256"] = 1] = "uint256";
        AbiType[AbiType["address"] = 2] = "address";
        AbiType[AbiType["bool"] = 3] = "bool";
        AbiType[AbiType["bytes32"] = 4] = "bytes32";
        AbiType[AbiType["bytes20"] = 5] = "bytes20";
        AbiType[AbiType["uint8"] = 6] = "uint8";
    })(AbiType = AbiUtil.AbiType || (AbiUtil.AbiType = {}));
    AbiUtil.abiParams = function (functionData, returnType) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        return function (target, functionName, descriptor) {
            var root = {};
            root.inputs = [];
            root.constant = functionData.constant === undefined ? false : functionData.constant;
            root.outputs = [];
            root.name = functionName;
            root.type = functionData.type === undefined ? "function" : functionData.type;
            root.payable = functionData.payable === undefined ? false : functionData.payable;
            root.stateMutability = functionData.stateMutability === undefined ? "nonpayable" : functionData.stateMutability;
            if (params) {
                params.forEach(function (v) {
                    for (var ret in v) {
                        if (v.hasOwnProperty(ret)) {
                            root.inputs.push({ "name": ret, "type": AbiType[v[ret]] });
                        }
                    }
                });
            }
            for (var ret in returnType) {
                if (returnType.hasOwnProperty(ret)) {
                    root.outputs.push({ "name": ret, "type": AbiType[returnType[ret]] });
                }
            }
            var rootData = [];
            rootData.push(root);
            Reflect.defineMetadata("abiParams", rootData, target, functionName);
        };
    };
    AbiUtil.getAbiParams = function (target, propertyKey) {
        return Reflect.getMetadata("abiParams", target, propertyKey);
    };
})(AbiUtil = exports.AbiUtil || (exports.AbiUtil = {}));
//# sourceMappingURL=abiutil.js.map