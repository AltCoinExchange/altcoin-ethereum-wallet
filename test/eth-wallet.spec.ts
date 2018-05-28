import "jest";
import {EthereumWallet} from "../src/eth";
import {TokenFactory, TOKENS} from "../src/eth-tokens";

describe("EthWallet", () => {
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

    // const token = TokenFactory.GetToken(TOKENS.AUGUR, ethWallet.engine);
    // const result = await token.balanceOf(account.address).then((balance) => {
    //   account = Object.assign({}, account, { balance, contractAddress: token.contractAddress, name: TOKENS[TOKENS.AUGUR].toString(), code: 'REP' });
    //   return account;
    // });

    // console.log(result);
    expect(true).toBeTruthy();
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
