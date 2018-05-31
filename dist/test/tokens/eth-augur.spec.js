"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("jest");
var augur_1 = require("../../src/eth-tokens/augur");
describe("EthAugurBalance", function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    it("Should pass sanity", function () {
        expect(typeof augur_1.AugurTokenTestnet).toBe("function");
    });
});
//# sourceMappingURL=eth-augur.spec.js.map