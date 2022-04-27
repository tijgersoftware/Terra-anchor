# Anchor

## configuration

fill in .env file


## installing dependencies

Node 16

```
yarn
```
## deploying and calling the functions
run for deploying the contract and calling the functions. Remove the files from the deploy function when you don't want them to be called. Change the numbers to change the order of excecution. the functions are located at  Terra-anchor/scripts/deploy

```
yarn deploy:ropsten
```



# How can I do a proxy call on anchor protocol terra ethereum transfer. error: UNPREDICTABLE_GAS_LIMIT

I want to make a smart contract that deposits UST on the eth anchor protocol, by using the deposit function. Here you can find the docs of this function I try to call. https://docs.anchorprotocol.com/ethanchor/ethanchor-contracts/router . The function gets called trough a proxy contract. I found the implementation address by reading the proxy contract on etherscan.

TestContracts on Ropsten testnet:

proxy: 0x7537aC093cE1315BCE08bBF0bf6f9b86B7475008

etherscan: https://ropsten.etherscan.io/address/0x7537aC093cE1315BCE08bBF0bf6f9b86B7475008

implementation (ROUTERV2): 0x2ba0010394eb3e41454c7d79c0fb6e0deb67284b

etherscan: https://ropsten.etherscan.io/address/0x2ba0010394eb3e41454c7d79c0fb6e0deb67284b

I imported the ROUTERV2 contract for calling the proxy with the abi of the implementation. 
my execution order is:
1) deploying the contract
2) approving the contract for spending the tokens from the sender using ethers.
3) approveUST function on smart contract (I am not sure if this is necessary)
4) calling the depositStable function.

I get following error when calling the depositStale function  UNPREDICTABLE_GAS_LIMIT;

below You see the contract I try to make. It should take the UST of the user and deposit it on eth anchor.

Here is a github link to the hardhat repo of the contract so you can simulate the bug and hopefully help me solving this issue. You are also allowed to push your solution to the repo. 

I thank you for taking the time to read my question!
```
contract Anchor {
    address public proxy;
    address public operator;
    address public USTAddress;

    constructor(
        address proxy_,
        address operator_,
        address USTAddress_
    ) public {
        proxy = proxy_;
        operator = operator_;
        USTAddress = USTAddress_;
    }

    function approveUST() public {
        ERC20(USTAddress).approve(
            address(this),
            0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        );
    }

    function initDepositStable(uint256 amount) public {
        RouterV2(proxy).initDepositStable(amount);
    }

    function depositUST(uint256 amount) public {
        // InterfaceOfImplementationContract(proxyAddress).MethodBeingCalled(
        //     parameter,
        //     parameter,
        //     parameter
        // );

        ERC20(USTAddress).approve(
            address(this),
            0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        );
        RouterV2(proxy).depositStable(operator, amount);
    }
}
```

tags: solidity, smart contracts, ethereum, anchor protocol, terra, brdige trasfer.