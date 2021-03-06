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

interface IOperationFactoryInterface extends ethers.utils.Interface {
  functions: {
    "build(uint256)": FunctionFragment;
    "fetchAddressBufferSize()": FunctionFragment;
    "fetchNextTerraAddress()": FunctionFragment;
    "pushTerraAddresses(bytes32[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "build", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "fetchAddressBufferSize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fetchNextTerraAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pushTerraAddresses",
    values: [BytesLike[]]
  ): string;

  decodeFunctionResult(functionFragment: "build", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fetchAddressBufferSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fetchNextTerraAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushTerraAddresses",
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

export class IOperationFactory extends BaseContract {
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

  interface: IOperationFactoryInterface;

  functions: {
    build(
      _optId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fetchAddressBufferSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    fetchNextTerraAddress(overrides?: CallOverrides): Promise<[string]>;

    pushTerraAddresses(
      _addrs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  build(
    _optId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fetchAddressBufferSize(overrides?: CallOverrides): Promise<BigNumber>;

  fetchNextTerraAddress(overrides?: CallOverrides): Promise<string>;

  pushTerraAddresses(
    _addrs: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    build(_optId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    fetchAddressBufferSize(overrides?: CallOverrides): Promise<BigNumber>;

    fetchNextTerraAddress(overrides?: CallOverrides): Promise<string>;

    pushTerraAddresses(
      _addrs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;
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

    fetchAddressBufferSize(overrides?: CallOverrides): Promise<BigNumber>;

    fetchNextTerraAddress(overrides?: CallOverrides): Promise<BigNumber>;

    pushTerraAddresses(
      _addrs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    build(
      _optId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fetchAddressBufferSize(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fetchNextTerraAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pushTerraAddresses(
      _addrs: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
