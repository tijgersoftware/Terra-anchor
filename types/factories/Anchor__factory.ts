/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Anchor, AnchorInterface } from "../Anchor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "proxy_",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator_",
        type: "address",
      },
      {
        internalType: "address",
        name: "USTAddress_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "USTAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "approveUST",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositUST",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "initDepositStable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "operator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103963803806103968339818101604052606081101561003357600080fd5b5080516020820151604090920151600080546001600160a01b039384166001600160a01b03199182161790915560018054948416948216949094179093556002805492909116919092161790556103078061008f6000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063a008e89c11610050578063a008e89c146100ad578063a8a15a21146100ca578063ec556889146100e757610072565b80631137795e14610077578063418a467114610081578063570ca735146100a5575b600080fd5b61007f6100ef565b005b610089610172565b604080516001600160a01b039092168252519081900360200190f35b610089610181565b61007f600480360360208110156100c357600080fd5b5035610190565b61007f600480360360208110156100e057600080fd5b503561029c565b6100896102eb565b6002546040805163095ea7b360e01b8152306004820152600019602482015290516001600160a01b039092169163095ea7b3916044808201926020929091908290030181600087803b15801561014457600080fd5b505af1158015610158573d6000803e3d6000fd5b505050506040513d602081101561016e57600080fd5b5050565b6002546001600160a01b031681565b6001546001600160a01b031681565b6002546040805163095ea7b360e01b8152306004820152600019602482015290516001600160a01b039092169163095ea7b3916044808201926020929091908290030181600087803b1580156101e557600080fd5b505af11580156101f9573d6000803e3d6000fd5b505050506040513d602081101561020f57600080fd5b50506000805460015460408051633676206760e01b81526001600160a01b0392831660048201526024810186905290519190921692633676206792604480820193602093909283900390910190829087803b15801561026d57600080fd5b505af1158015610281573d6000803e3d6000fd5b505050506040513d602081101561029757600080fd5b505050565b600080546040805163a8a15a2160e01b81526004810185905290516001600160a01b039092169263a8a15a21926024808401936020939083900390910190829087803b15801561026d57600080fd5b6000546001600160a01b03168156fea164736f6c6343000705000a";

export class Anchor__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    proxy_: string,
    operator_: string,
    USTAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Anchor> {
    return super.deploy(
      proxy_,
      operator_,
      USTAddress_,
      overrides || {}
    ) as Promise<Anchor>;
  }
  getDeployTransaction(
    proxy_: string,
    operator_: string,
    USTAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      proxy_,
      operator_,
      USTAddress_,
      overrides || {}
    );
  }
  attach(address: string): Anchor {
    return super.attach(address) as Anchor;
  }
  connect(signer: Signer): Anchor__factory {
    return super.connect(signer) as Anchor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AnchorInterface {
    return new utils.Interface(_abi) as AnchorInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Anchor {
    return new Contract(address, _abi, signerOrProvider) as Anchor;
  }
}