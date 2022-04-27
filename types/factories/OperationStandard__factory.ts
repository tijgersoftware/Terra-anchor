/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  OperationStandard,
  OperationStandardInterface,
} from "../OperationStandard";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "initPayload",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class OperationStandard__factory {
  static readonly abi = _abi;
  static createInterface(): OperationStandardInterface {
    return new utils.Interface(_abi) as OperationStandardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OperationStandard {
    return new Contract(address, _abi, signerOrProvider) as OperationStandard;
  }
}