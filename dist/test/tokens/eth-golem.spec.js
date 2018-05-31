"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("jest");
var golem_1 = require("../../src/eth-tokens/golem");
describe("EthGolemBalance", function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    it("Should pass sanity", function () {
        expect(typeof golem_1.GolemTokenTestnet).toBe("function");
    });
});
//# sourceMappingURL=eth-golem.spec.js.map