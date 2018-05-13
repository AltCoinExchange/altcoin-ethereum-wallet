/* tslint:disable */
import {AbiUtil} from "../../config/abi/util/abiutil";
import abiParams = AbiUtil.abiParams;
import AbiType = AbiUtil.AbiType;
import getAbiParams = AbiUtil.getAbiParams;
import {EthConfirmation, EthEngine} from "../eth-engine";
import {ERC20} from "./ERC20";
import {TokenConfig} from "../../config/tokens/tokenconfig";


export class DEX extends ERC20 {

  public constructor(contractAddress: string, ethEngine: EthEngine) {
    super(contractAddress, ethEngine);
  }

  @abiParams({stateMutability: "view"}, {"": AbiType.uint256})
  public async currentDepositNonce(): Promise<any> {

    const abi = getAbiParams(this, "currentDepositNonce");

    const generalParams = {
      from: this.ethEngine.configuration.defaultWallet
    };

    const result: any = await this.ethEngine.callFunction("currentDepositNonce", {}, generalParams, EthConfirmation.STATIC, abi, TokenConfig.DEX.contractAddress);
    return result;
  }

  @abiParams({stateMutability: "payable"}, {"": AbiType.uint256}, {"token": AbiType.address}, {"amount": AbiType.uint256})
  public async DepositToken(token: string, amount: number): Promise<any> {
    const abi = getAbiParams(this, "DepositToken");

    const configParams = {
      from: this.ethEngine.configuration.defaultWallet
    };

    const result: any = await this.ethEngine.callFunction("DepositToken", [token, amount], configParams, EthConfirmation.CONFIRMATION, abi, TokenConfig.DEX.contractAddress);
    return result;
  }


  @abiParams({stateMutability: "payable"}, {"": AbiType.bool}, {"token": AbiType.address},
    {"amount": AbiType.uint256}, {"nonce": AbiType.uint256}, {"v": AbiType.uint8}, {"r": AbiType.bytes32}, {"s": AbiType.bytes32})
  public async withdraw(token: string, amount: number, nonce: number, v: string, r: string, s: string): Promise<any> {
    const abi = getAbiParams(this, "withdraw");

    const configParams = {
      from: this.ethEngine.configuration.defaultWallet
    };

    const result: any = await this.ethEngine.callFunction("withdraw", [token, amount], configParams, EthConfirmation.CONFIRMATION, abi, TokenConfig.DEX.contractAddress);
    return result;
  }

  // TODO: Add events
  // event Transfer(address indexed _from, address indexed _to, uint _value);
  // event Approval(address indexed _owner, address indexed _spender, uint _value);
}