// 7200, "0x" + secret.hashedSecret, AppConfig.hosts[1].defaultWallet, 10, 2000000
import "reflect-metadata";
import "jest";
import {AugurTokenTestnet} from "../../src/eth-tokens/augur";
import {EthEngine, TokenConfig} from "../../src/eth";
import {EthConfiguration} from "../../src/config/config-eth";

describe("EthAugurBalance", () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    it("Should pass sanity", () => {
        expect(typeof AugurTokenTestnet).toBe("function");
    });

    it("Should pass Augur (ERC20) approve", async () => {
      expect.assertions(1);

      const ethEngine = new EthEngine(null, EthConfiguration.hosts[0], null);
      const erc20Token = new AugurTokenTestnet(ethEngine);

      const privKey = "3be65d9ccb1850ee6bbb90adfa3fcb9f3cffb590c81859f550ab83b66b4b7aa2";
      const ks = ethEngine.recoverAccount(privKey);
      ethEngine.login(ks);

      try {
        // const balance = await erc20Token.balanceOf(TokenConfig.DEX.contractAddress);
        const result = await erc20Token.approve(TokenConfig.DEX.contractAddress, 1);
        const result2 = await erc20Token.DepositToken(1);
        expect(1).toEqual(1);
      } catch (e) {
        expect(e.message).toEqual(0);
      }
    });
});
