import Web3 from "web3";
import * as AppConfig from "../config/config-eth";
import wyreJSON from "./abi/wyre-abi.json";

export class WyreVerify {
    protected web3: any;
    private contract;
    private config = AppConfig.EthConfiguration.hosts[0];
    private contractAddress = "0xB14fA2276D8bD26713A6D98871b2d63Da9eefE6f";

    constructor() {
        const wsProvider = new Web3.providers.WebsocketProvider(this.config.wshost);
        this.web3 = new Web3(wsProvider);
    }

    public checkUserStatus(address) {
        this.contract  = new this.web3.eth.Contract(wyreJSON.abi, this.contractAddress);
        return this.contract.methods.balanceOf(address).call().then((balance) => balance.c[0]).catch((err) => err);
    }
}