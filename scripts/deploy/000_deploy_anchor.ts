import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { CONTRACTS, USTAddress } from "../constants";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  //const proxy = "0x2ba0010394EB3E41454C7d79C0Fb6E0DEb67284b"; // implementation
  const proxy = "0x7537aC093cE1315BCE08bBF0bf6f9b86B7475008";
  const operator = deployer;
  await deploy(CONTRACTS.anchor, {
    from: deployer,
    args: [proxy, operator, USTAddress],
    log: true,
    skipIfAlreadyDeployed: true,
  });
};

export default func;
