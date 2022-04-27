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

interface OperationStoreInterface extends ethers.utils.Interface {
  functions: {
    "allocate(address)": FunctionFragment;
    "controller()": FunctionFragment;
    "deallocate(address)": FunctionFragment;
    "finish(address)": FunctionFragment;
    "flush(uint8,uint256)": FunctionFragment;
    "flushAll(uint256)": FunctionFragment;
    "getAvailableOperation()": FunctionFragment;
    "getQueueSizeOf(uint8)": FunctionFragment;
    "getQueuedOperationAt(uint8,uint256)": FunctionFragment;
    "getStatusOf(address)": FunctionFragment;
    "halt(address)": FunctionFragment;
    "init(bool)": FunctionFragment;
    "optStat(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "recover(address)": FunctionFragment;
    "router()": FunctionFragment;
    "transferController(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferRouter(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "allocate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "deallocate", values: [string]): string;
  encodeFunctionData(functionFragment: "finish", values: [string]): string;
  encodeFunctionData(
    functionFragment: "flush",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "flushAll",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAvailableOperation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getQueueSizeOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getQueuedOperationAt",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getStatusOf", values: [string]): string;
  encodeFunctionData(functionFragment: "halt", values: [string]): string;
  encodeFunctionData(functionFragment: "init", values: [boolean]): string;
  encodeFunctionData(functionFragment: "optStat", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "recover", values: [string]): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferRouter",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "allocate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deallocate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finish", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flush", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flushAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAvailableOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getQueueSizeOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getQueuedOperationAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStatusOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "halt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "optStat", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recover", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferRouter",
    data: BytesLike
  ): Result;

  events: {
    "OperationAllocated(address,address)": EventFragment;
    "OperationDeallocated(address,address)": EventFragment;
    "OperationFinished(address,address)": EventFragment;
    "OperationFlushed(address,address,uint8,uint8)": EventFragment;
    "OperationInitialized(address,address,bool)": EventFragment;
    "OperationRecovered(address,address)": EventFragment;
    "OperationStopped(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OperationAllocated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperationDeallocated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperationFinished"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperationFlushed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperationInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperationRecovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperationStopped"): EventFragment;
}

export type OperationAllocatedEvent = TypedEvent<
  [string, string] & { controller: string; operation: string }
>;

export type OperationDeallocatedEvent = TypedEvent<
  [string, string] & { controller: string; operation: string }
>;

export type OperationFinishedEvent = TypedEvent<
  [string, string] & { controller: string; operation: string }
>;

export type OperationFlushedEvent = TypedEvent<
  [string, string, number, number] & {
    controller: string;
    operation: string;
    from: number;
    to: number;
  }
>;

export type OperationInitializedEvent = TypedEvent<
  [string, string, boolean] & {
    controller: string;
    operation: string;
    autoFinish: boolean;
  }
>;

export type OperationRecoveredEvent = TypedEvent<
  [string, string] & { controller: string; operation: string }
>;

export type OperationStoppedEvent = TypedEvent<
  [string, string] & { controller: string; operation: string }
>;

export class OperationStore extends BaseContract {
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

  interface: OperationStoreInterface;

  functions: {
    allocate(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    deallocate(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finish(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    flush(
      _queue: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    flushAll(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAvailableOperation(overrides?: CallOverrides): Promise<[string]>;

    getQueueSizeOf(
      _queue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getQueuedOperationAt(
      _queue: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getStatusOf(_opt: string, overrides?: CallOverrides): Promise<[number]>;

    halt(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    init(
      _autoFinish: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    optStat(arg0: string, overrides?: CallOverrides): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    recover(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    router(overrides?: CallOverrides): Promise<[string]>;

    transferController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferRouter(
      _router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allocate(
    _opt: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  controller(overrides?: CallOverrides): Promise<string>;

  deallocate(
    _opt: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finish(
    _opt: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  flush(
    _queue: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  flushAll(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAvailableOperation(overrides?: CallOverrides): Promise<string>;

  getQueueSizeOf(
    _queue: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getQueuedOperationAt(
    _queue: BigNumberish,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getStatusOf(_opt: string, overrides?: CallOverrides): Promise<number>;

  halt(
    _opt: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  init(
    _autoFinish: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  optStat(arg0: string, overrides?: CallOverrides): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  recover(
    _opt: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  router(overrides?: CallOverrides): Promise<string>;

  transferController(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferRouter(
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allocate(_opt: string, overrides?: CallOverrides): Promise<void>;

    controller(overrides?: CallOverrides): Promise<string>;

    deallocate(_opt: string, overrides?: CallOverrides): Promise<void>;

    finish(_opt: string, overrides?: CallOverrides): Promise<void>;

    flush(
      _queue: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    flushAll(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getAvailableOperation(overrides?: CallOverrides): Promise<string>;

    getQueueSizeOf(
      _queue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getQueuedOperationAt(
      _queue: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getStatusOf(_opt: string, overrides?: CallOverrides): Promise<number>;

    halt(_opt: string, overrides?: CallOverrides): Promise<void>;

    init(_autoFinish: boolean, overrides?: CallOverrides): Promise<string>;

    optStat(arg0: string, overrides?: CallOverrides): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    recover(_opt: string, overrides?: CallOverrides): Promise<void>;

    router(overrides?: CallOverrides): Promise<string>;

    transferController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(_owner: string, overrides?: CallOverrides): Promise<void>;

    transferRouter(_router: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OperationAllocated(address,address)"(
      controller?: string | null,
      operation?: string | null
    ): TypedEventFilter<
      [string, string],
      { controller: string; operation: string }
    >;

    OperationAllocated(
      controller?: string | null,
      operation?: string | null
    ): TypedEventFilter<
      [string, string],
      { controller: string; operation: string }
    >;

    "OperationDeallocated(address,address)"(
      controller?: string | null,
      operation?: string | null
    ): TypedEventFilter<
      [string, string],
      { controller: string; operation: string }
    >;

    OperationDeallocated(
      controller?: string | null,
      operation?: string | null
    ): TypedEventFilter<
      [string, string],
      { controller: string; operation: string }
    >;

    "OperationFinished(address,address)"(
      controller?: string | null,
      operation?: string | null
    ): TypedEventFilter<
      [string, string],
      { controller: string; operation: string }
    >;

    OperationFinished(
      controller?: string | null,
      operation?: string | null
    ): TypedEventFilter<
      [string, string],
      { controller: string; operation: string }
    >;

    "OperationFlushed(address,address,uint8,uint8)"(
      controller?: string | null,
      operation?: string | null,
      from?: null,
      to?: null
    ): TypedEventFilter<
      [string, string, number, number],
      { controller: string; operation: string; from: number; to: number }
    >;

    OperationFlushed(
      controller?: string | null,
      operation?: string | null,
      from?: null,
      to?: null
    ): TypedEventFilter<
      [string, string, number, number],
      { controller: string; operation: string; from: number; to: number }
    >;

    "OperationInitialized(address,address,bool)"(
      controller?: string | null,
      operation?: string | null,
      autoFinish?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { controller: string; operation: string; autoFinish: boolean }
    >;

    OperationInitialized(
      controller?: string | null,
      operation?: string | null,
      autoFinish?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { controller: string; operation: string; autoFinish: boolean }
    >;

    "OperationRecovered(address,address)"(
      controller?: string | null,
      operation?: string | null
    ): TypedEventFilter<
      [string, string],
      { controller: string; operation: string }
    >;

    OperationRecovered(
      controller?: string | null,
      operation?: string | null
    ): TypedEventFilter<
      [string, string],
      { controller: string; operation: string }
    >;

    "OperationStopped(address,address)"(
      controller?: string | null,
      operation?: string | null
    ): TypedEventFilter<
      [string, string],
      { controller: string; operation: string }
    >;

    OperationStopped(
      controller?: string | null,
      operation?: string | null
    ): TypedEventFilter<
      [string, string],
      { controller: string; operation: string }
    >;
  };

  estimateGas: {
    allocate(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    deallocate(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finish(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    flush(
      _queue: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    flushAll(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAvailableOperation(overrides?: CallOverrides): Promise<BigNumber>;

    getQueueSizeOf(
      _queue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getQueuedOperationAt(
      _queue: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStatusOf(_opt: string, overrides?: CallOverrides): Promise<BigNumber>;

    halt(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    init(
      _autoFinish: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    optStat(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    recover(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    transferController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferRouter(
      _router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allocate(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deallocate(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finish(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    flush(
      _queue: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    flushAll(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAvailableOperation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getQueueSizeOf(
      _queue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getQueuedOperationAt(
      _queue: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStatusOf(
      _opt: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    halt(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    init(
      _autoFinish: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    optStat(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recover(
      _opt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferRouter(
      _router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}