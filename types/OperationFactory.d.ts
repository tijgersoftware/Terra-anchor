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

interface OperationFactoryInterface extends ethers.utils.Interface {
  functions: {
    "build(uint256)": FunctionFragment;
    "controller()": FunctionFragment;
    "fetchAddressBufferSize()": FunctionFragment;
    "fetchNextTerraAddress()": FunctionFragment;
    "owner()": FunctionFragment;
    "pushStandardOperation(address,address,address)": FunctionFragment;
    "pushTerraAddresses(bytes32[])": FunctionFragment;
    "router()": FunctionFragment;
    "standardIndex()": FunctionFragment;
    "standards(uint256)": FunctionFragment;
    "transferController(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferRouter(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "build", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fetchAddressBufferSize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fetchNextTerraAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pushStandardOperation",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pushTerraAddresses",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "standardIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "standards",
    values: [BigNumberish]
  ): string;
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

  decodeFunctionResult(functionFragment: "build", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fetchAddressBufferSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fetchNextTerraAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pushStandardOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushTerraAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "standardIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "standards", data: BytesLike): Result;
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
    "ContractDeployed(address,address,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractDeployed"): EventFragment;
}

export type ContractDeployedEvent = TypedEvent<
  [string, string, string] & {
    instance: string;
    controller: string;
    terraAddress: string;
  }
>;

export class OperationFactory extends BaseContract {
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

  interface: OperationFactoryInterface;

  functions: {
    build(
      _optId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    fetchAddressBufferSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    fetchNextTerraAddress(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pushStandardOperation(
      _router: string,
      _controller: string,
      _operation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushTerraAddresses(
      _addrs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    router(overrides?: CallOverrides): Promise<[string]>;

    standardIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    standards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        router: string;
        controller: string;
        operation: string;
      }
    >;

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

  build(
    _optId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  controller(overrides?: CallOverrides): Promise<string>;

  fetchAddressBufferSize(overrides?: CallOverrides): Promise<BigNumber>;

  fetchNextTerraAddress(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pushStandardOperation(
    _router: string,
    _controller: string,
    _operation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushTerraAddresses(
    _addrs: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  router(overrides?: CallOverrides): Promise<string>;

  standardIndex(overrides?: CallOverrides): Promise<BigNumber>;

  standards(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      router: string;
      controller: string;
      operation: string;
    }
  >;

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
    build(_optId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    controller(overrides?: CallOverrides): Promise<string>;

    fetchAddressBufferSize(overrides?: CallOverrides): Promise<BigNumber>;

    fetchNextTerraAddress(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pushStandardOperation(
      _router: string,
      _controller: string,
      _operation: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pushTerraAddresses(
      _addrs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    router(overrides?: CallOverrides): Promise<string>;

    standardIndex(overrides?: CallOverrides): Promise<BigNumber>;

    standards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        router: string;
        controller: string;
        operation: string;
      }
    >;

    transferController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(_owner: string, overrides?: CallOverrides): Promise<void>;

    transferRouter(_router: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ContractDeployed(address,address,bytes32)"(
      instance?: string | null,
      controller?: string | null,
      terraAddress?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { instance: string; controller: string; terraAddress: string }
    >;

    ContractDeployed(
      instance?: string | null,
      controller?: string | null,
      terraAddress?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { instance: string; controller: string; terraAddress: string }
    >;
  };

  estimateGas: {
    build(
      _optId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    fetchAddressBufferSize(overrides?: CallOverrides): Promise<BigNumber>;

    fetchNextTerraAddress(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pushStandardOperation(
      _router: string,
      _controller: string,
      _operation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushTerraAddresses(
      _addrs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    standardIndex(overrides?: CallOverrides): Promise<BigNumber>;

    standards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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
    build(
      _optId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fetchAddressBufferSize(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fetchNextTerraAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pushStandardOperation(
      _router: string,
      _controller: string,
      _operation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushTerraAddresses(
      _addrs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    standardIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    standards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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