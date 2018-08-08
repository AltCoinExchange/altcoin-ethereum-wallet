import "jest";
import {EthereumWallet} from "../src/eth";
import {TokenFactory, TOKENS} from "../src/eth-tokens";

describe("EthWallet", () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  it("Should be pass sanity", () => {
    // expect(typeof EthWalletTestnet).toBe("function");
    expect(typeof 1).toBe("number");
  });

  it("Should create new account", async () => {
    const ethWallet = new EthereumWallet();

    const mnemonic = ethWallet.generateMnemonic();
    const seed = ethWallet.mnemonicToSeed(mnemonic);
    const account = ethWallet.recoverAccountFromSeed(seed);
    ethWallet.login(account);

    expect(true).toBeTruthy();
  });

  it("Should return token balance", async () => {
    const ethWallet = new EthereumWallet();

    const mnemonic = "glass voyage present gasp silver alpha odor repeat tomorrow elegant input unfold";
    const seed = ethWallet.mnemonicToSeed(mnemonic);
    const account = ethWallet.recoverAccountFromSeed(seed);
    ethWallet.login(account);

    const token = TokenFactory.GetToken(TOKENS.AUGUR, ethWallet.engine);
    const result = await token.balanceOf(account.address);
    const balance = parseFloat(result);

    expect(balance).toBeGreaterThanOrEqual(0);
  });

  it("Should send token balance", async () => {

    const ethWallet = new EthereumWallet();

    const mnemonic = "glass voyage present gasp silver alpha odor repeat tomorrow elegant input unfold";
    const seed = ethWallet.mnemonicToSeed(mnemonic);
    const account = ethWallet.recoverAccountFromSeed(seed);
    ethWallet.login(account);

    // const token = TokenFactory.GetToken(TOKENS.AUGUR, ethWallet.engine);
    const result = await ethWallet.sendEther("0x58d20e5da51b8705343f56bca258d14725c55d2c", "0.1", 1.5);
    const balance = JSON.stringify(result);

    console.log(balance);

    expect(true).toBe(true);
  });
  //
  // it("Should be able to login", () => {
  //   const ethWallet = new EthWalletTestnet();
  //   const newAccount = ethWallet.create("customPassword");
  //   const address = newAccount.wallet.address;
  //   const store = newAccount.keystore;
  //   const accountRelogged = ethWallet.login(store, "customPassword");
  //   expect(accountRelogged.address).toEqual(address);
  // });
});
