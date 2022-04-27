/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISwapper, ISwapperInterface } from "../ISwapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "swapToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISwapper__factory {
  static readonly abi = _abi;
  static createInterface(): ISwapperInterface {
    return new utils.Interface(_abi) as ISwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISwapper {
    return new Contract(address, _abi, signerOrProvider) as ISwapper;
  }
}