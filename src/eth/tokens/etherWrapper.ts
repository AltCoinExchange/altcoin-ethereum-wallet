/* tslint:disable */
import {AbiUtil} from "../../config/abi/util/abiutil";
import {EthEngine, EthConfirmation} from "../eth-engine";
import abiParams = AbiUtil.abiParams;
import AbiType = AbiUtil.AbiType;
import getAbiParams = AbiUtil.getAbiParams;

export class EtherWrapper {

  ethEngine: EthEngine;
  public contractAddress: string;

  public constructor(ethEngine: EthEngine) {
    this.ethEngine = ethEngine;
    this.contractAddress = '0x58d20e5da51b8705343f56bca258d14725c55d2c';
  }

  @abiParams({}, {"": AbiType.uint256})
  public totalSupply(): number {
    return 0;
  }

  @abiParams({}, {"balance": AbiType.uint256}, {"_owner": AbiType.address})
  public async balanceOf(owner: string): Promise<any> {

    const abi = getAbiParams(this, "balanceOf");

    const generalParams = {
      from: this.ethEngine.configuration.defaultWallet
    };

    const result: any = await this.ethEngine.callFunction("balanceOf", [owner], generalParams, EthConfirmation.STATIC, abi, this.contractAddress);
    return this.ethEngine.fromWeiToEther(result);
//return result / Math.pow(10, getAbiParams(this, "decimals") - 1);
  }

  @abiParams({stateMutability: "payable"}, {"": AbiType.bool}, {"_to": AbiType.address}, {"_value": AbiType.uint256})
  public async transfer(to: string, value: number): Promise<any> {
    const abi = getAbiParams(this, "transfer");

    const configParams = {
      from: this.ethEngine.configuration.defaultWallet
    };

// const amount = this.ethEngine.toWei(value.toString(), "ether");

    const result: any = await this.ethEngine.callFunction("transfer", [to, value], configParams, EthConfirmation.CONFIRMATION, abi, this.contractAddress);
    return result;
  }

  @abiParams({stateMutability: "payable"}, {"": AbiType.bool},
    {"_from": AbiType.uint256}, {"_to": AbiType.address}, {"_value": AbiType.uint256})
  public async transferFrom(from: string, to: string, value: number): Promise<any> {
    const abi = getAbiParams(this, "transferFrom");

    const configParams = {
      from: this.ethEngine.configuration.defaultWallet
    };

// const amount = this.ethEngine.toWei(value.toString(), "ether");

    const result: any = await this.ethEngine.callFunction("transferFrom", [from, to, value], configParams, EthConfirmation.CONFIRMATION, abi, this.contractAddress);
    return result;
  }

  @abiParams({stateMutability: "payable"}, {"": AbiType.bool}, {"_spender": AbiType.address}, {"_value": AbiType.uint256})
  public async approve(spender: string, value: number): Promise<any> {
    const abi = getAbiParams(this, "approve");

    const configParams = {
      from: this.ethEngine.configuration.defaultWallet
    };

    const amount = this.ethEngine.toWei(value.toString(), "ether");

    const result: any = await this.ethEngine.callFunction("approve", [spender, amount], configParams, EthConfirmation.CONFIRMATION, abi, this.contractAddress);
    return result;
  }

  @abiParams({}, {"": AbiType.uint256}, {"_owner": AbiType.address}, {"_spender": AbiType.address})
  public async allowance(owner: string, spender: string): Promise<any> {
    const abi = getAbiParams(this, "allowance");

    const configParams = {
      from: this.ethEngine.configuration.defaultWallet
    };

    const result: any = await this.ethEngine.callFunction("allowance", [owner, spender], configParams, EthConfirmation.STATIC, abi, this.contractAddress);
    return result;
  }

  @abiParams({stateMutability: "payable"}, {}, {})
  public async faucet(): Promise<any> {
    const abi = getAbiParams(this, "faucet");

    const configParams = {
      from: this.ethEngine.configuration.defaultWallet
    };

    const result: any = await this.ethEngine.callFunction("faucet", [], configParams, EthConfirmation.CONFIRMATION, abi, this.contractAddress);
    return result;
  }

  @abiParams({"_wad": AbiType.uint256},{})
  public async withdraw(wad: number): Promise<any> {
    const abi = getAbiParams(this, "withdraw");

    const configParams = {
      from: this.ethEngine.configuration.defaultWallet
    };

    const result: any = await this.ethEngine.callFunction("withdraw", [wad], configParams, EthConfirmation.STATIC, abi, this.contractAddress);
    return result;
  }

// TODO: Add events
// event Transfer(address indexed _from, address indexed _to, uint _value);
// event Approval(address indexed _owner, address indexed _spender, uint _value);
}