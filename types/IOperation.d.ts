/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IOperationInterface extends ethers.utils.Interface {
  functions: {
    "emergencyWithdraw(address,address)": FunctionFragment;
    "finish(uint256)": FunctionFragment;
    "finishDepositStable()": FunctionFragment;
    "finishRedeemStable()": FunctionFragment;
    "getCurrentStatus()": FunctionFragment;
    "halt()": FunctionFragment;
    "initDepositStable(address,uint256,address,address,bool)": FunctionFragment;
    "initRedeemStable(address,uint256,address,address,bool)": FunctionFragment;
    "recover()": FunctionFragment;
    "terraAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "finish",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finishDepositStable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finishRedeemStable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentStatus",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "halt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initDepositStable",
    values: [string, BigNumberish, string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "initRedeemStable",
    values: [string, BigNumberish, string, string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "recover", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "terraAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finish", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finishDepositStable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finishRedeemStable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "halt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initDepositStable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initRedeemStable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "recover", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "terraAddress",
    data: BytesLike
  ): Result;

  events: {
    "AutoFinishEnabled(address)": EventFragment;
    "EmergencyWithdrawActivated(address,uint256)": EventFragment;
    "FinishDeposit(address,uint256)": EventFragment;
    "FinishRedemption(address,uint256)": EventFragment;
    "InitDeposit(address,uint256,bytes32)": EventFragment;
    "InitRedemption(address,uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AutoFinishEnabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdrawActivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FinishDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FinishRedemption"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InitDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InitRedemption"): EventFragment;
}

export type AutoFinishEnabledEvent = TypedEvent<
  [string] & { operation: string }
>;

export type EmergencyWithdrawActivatedEvent = TypedEvent<
  [string, BigNumber] & { token: string; amount: BigNumber }
>;

export type FinishDepositEvent = TypedEvent<
  [string, BigNumber] & { operator: string; amount: BigNumber }
>;

export type FinishRedemptionEvent = TypedEvent<
  [string, BigNumber] & { operator: string; amount: BigNumber }
>;

export type InitDepositEvent = TypedEvent<
  [string, BigNumber, string] & {
    operator: string;
    amount: BigNumber;
    to: string;
  }
>;

export type InitRedemptionEvent = TypedEvent<
  [string, BigNumber, string] & {
    operator: string;
    amount: BigNumber;
    to: string;
  }
>;

export class IOperation extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IOperationInterface;

  functions: {
    "emergencyWithdraw(address,address)"(
      _token: string,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "emergencyWithdraw(address)"(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "finish(uint256)"(
      _minAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "finish()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finishDepositStable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finishRedeemStable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCurrentStatus(
      overrides?: CallOverrides
    ): Promise<
      [
        [number, number, string, BigNumber, string, string, string, string] & {
          status: number;
          typ: number;
          operator: string;
          amount: BigNumber;
          input: string;
          output: string;
          swapper: string;
          swapDest: string;
        }
      ]
    >;

    halt(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initDepositStable(
      _operator: string,
      _amount: BigNumberish,
      _swapper: string,
      _swapDest: string,
      _autoFinish: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initRedeemStable(
      _operator: string,
      _amount: BigNumberish,
      _swapper: string,
      _swapDest: string,
      _autoFinish: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    recover(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    terraAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  "emergencyWithdraw(address,address)"(
    _token: string,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "emergencyWithdraw(address)"(
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "finish(uint256)"(
    _minAmountOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "finish()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finishDepositStable(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finishRedeemStable(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCurrentStatus(
    overrides?: CallOverrides
  ): Promise<
    [number, number, string, BigNumber, string, string, string, string] & {
      status: number;
      typ: number;
      operator: string;
      amount: BigNumber;
      input: string;
      output: string;
      swapper: string;
      swapDest: string;
    }
  >;

  halt(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initDepositStable(
    _operator: string,
    _amount: BigNumberish,
    _swapper: string,
    _swapDest: string,
    _autoFinish: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initRedeemStable(
    _operator: string,
    _amount: BigNumberish,
    _swapper: string,
    _swapDest: string,
    _autoFinish: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  recover(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  terraAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    "emergencyWithdraw(address,address)"(
      _token: string,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "emergencyWithdraw(address)"(
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "finish(uint256)"(
      _minAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "finish()"(overrides?: CallOverrides): Promise<void>;

    finishDepositStable(overrides?: CallOverrides): Promise<void>;

    finishRedeemStable(overrides?: CallOverrides): Promise<void>;

    getCurrentStatus(
      overrides?: CallOverrides
    ): Promise<
      [number, number, string, BigNumber, string, string, string, string] & {
        status: number;
        typ: number;
        operator: string;
        amount: BigNumber;
        input: string;
        output: string;
        swapper: string;
        swapDest: string;
      }
    >;

    halt(overrides?: CallOverrides): Promise<void>;

    initDepositStable(
      _operator: string,
      _amount: BigNumberish,
      _swapper: string,
      _swapDest: string,
      _autoFinish: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    initRedeemStable(
      _operator: string,
      _amount: BigNumberish,
      _swapper: string,
      _swapDest: string,
      _autoFinish: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    recover(overrides?: CallOverrides): Promise<void>;

    terraAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AutoFinishEnabled(address)"(
      operation?: string | null
    ): TypedEventFilter<[string], { operation: string }>;

    AutoFinishEnabled(
      operation?: string | null
    ): TypedEventFilter<[string], { operation: string }>;

    "EmergencyWithdrawActivated(address,uint256)"(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    EmergencyWithdrawActivated(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    "FinishDeposit(address,uint256)"(
      operator?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { operator: string; amount: BigNumber }
    >;

    FinishDeposit(
      operator?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { operator: string; amount: BigNumber }
    >;

    "FinishRedemption(address,uint256)"(
      operator?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { operator: string; amount: BigNumber }
    >;

    FinishRedemption(
      operator?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { operator: string; amount: BigNumber }
    >;

    "InitDeposit(address,uint256,bytes32)"(
      operator?: string | null,
      amount?: null,
      to?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { operator: string; amount: BigNumber; to: string }
    >;

    InitDeposit(
      operator?: string | null,
      amount?: null,
      to?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { operator: string; amount: BigNumber; to: string }
    >;

    "InitRedemption(address,uint256,bytes32)"(
      operator?: string | null,
      amount?: null,
      to?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { operator: string; amount: BigNumber; to: string }
    >;

    InitRedemption(
      operator?: string | null,
      amount?: null,
      to?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { operator: string; amount: BigNumber; to: string }
    >;
  };

  estimateGas: {
    "emergencyWithdraw(address,address)"(
      _token: string,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "emergencyWithdraw(address)"(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "finish(uint256)"(
      _minAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "finish()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finishDepositStable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finishRedeemStable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCurrentStatus(overrides?: CallOverrides): Promise<BigNumber>;

    halt(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initDepositStable(
      _operator: string,
      _amount: BigNumberish,
      _swapper: string,
      _swapDest: string,
      _autoFinish: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initRedeemStable(
      _operator: string,
      _amount: BigNumberish,
      _swapper: string,
      _swapDest: string,
      _autoFinish: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    recover(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    terraAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    "emergencyWithdraw(address,address)"(
      _token: string,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "emergencyWithdraw(address)"(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "finish(uint256)"(
      _minAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "finish()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finishDepositStable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finishRedeemStable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCurrentStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    halt(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initDepositStable(
      _operator: string,
      _amount: BigNumberish,
      _swapper: string,
      _swapDest: string,
      _autoFinish: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initRedeemStable(
      _operator: string,
      _amount: BigNumberish,
      _swapper: string,
      _swapDest: string,
      _autoFinish: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    recover(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    terraAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
