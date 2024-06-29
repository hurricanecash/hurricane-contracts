/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Hurricane, HurricaneInterface } from "../../contracts/Hurricane";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "TransferAmountTooLow",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_fee",
        type: "uint8",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040526000805461ffff60a01b1916607d60a21b17905534801561002457600080fd5b5061002e33610033565b610083565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6104d7806100926000396000f3fe6080604052600436106100745760003560e01c80638da5cb5b1161004e5780638da5cb5b146100bf578063cb122a09146100ec578063ddca3f431461010c578063f2fde38b1461014157600080fd5b80631a695230146100805780633ccfd60b14610095578063715018a6146100aa57600080fd5b3661007b57005b600080fd5b61009361008e3660046103e6565b610161565b005b3480156100a157600080fd5b50610093610245565b3480156100b657600080fd5b5061009361028a565b3480156100cb57600080fd5b506000546040516001600160a01b0390911681526020015b60405180910390f35b3480156100f857600080fd5b50610093610107366004610416565b61029e565b34801561011857600080fd5b5060005461012e90600160a01b900461ffff1681565b60405161ffff90911681526020016100e3565b34801561014d57600080fd5b5061009361015c3660046103e6565b6102c6565b670de0b6b3a76400003410156101da57604051639b3b06fd60e01b815260206004820152603260248201527f487572726963616e653a207472616e7366657220616d6f756e74206d7573742060448201527162652031206574686572206f72206d6f726560701b60648201526084015b60405180910390fd5b6000546001600160a01b038216906108fc906127109061020590600160a01b900461ffff163461044f565b61020f919061046c565b610219903461048e565b6040518115909202916000818181858888f19350505050158015610241573d6000803e3d6000fd5b5050565b61024d61033c565b600080546040516001600160a01b03909116914780156108fc02929091818181858888f19350505050158015610287573d6000803e3d6000fd5b50565b61029261033c565b61029c6000610396565b565b6102a661033c565b6000805461ffff60a01b191660ff92909216600160a01b02919091179055565b6102ce61033c565b6001600160a01b0381166103335760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101d1565b61028781610396565b6000546001600160a01b0316331461029c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101d1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156103f857600080fd5b81356001600160a01b038116811461040f57600080fd5b9392505050565b60006020828403121561042857600080fd5b813560ff8116811461040f57600080fd5b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761046657610466610439565b92915050565b60008261048957634e487b7160e01b600052601260045260246000fd5b500490565b818103818111156104665761046661043956fea26469706673582212204c0e3c23442707269458ac475dad6eb059dd8d7a5a186e112bcfc846fe5def7564736f6c63430008130033";

type HurricaneConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HurricaneConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Hurricane__factory extends ContractFactory {
  constructor(...args: HurricaneConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Hurricane> {
    return super.deploy(overrides || {}) as Promise<Hurricane>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Hurricane {
    return super.attach(address) as Hurricane;
  }
  override connect(signer: Signer): Hurricane__factory {
    return super.connect(signer) as Hurricane__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HurricaneInterface {
    return new utils.Interface(_abi) as HurricaneInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Hurricane {
    return new Contract(address, _abi, signerOrProvider) as Hurricane;
  }
}
