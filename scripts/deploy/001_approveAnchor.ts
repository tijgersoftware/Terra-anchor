import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { waitFor } from "../txHelper";
import { CONTRACTS, USTAddress } from "../constants";
import { ERC20__factory } from "../../types";
import { any } from "hardhat/internal/core/params/argumentTypes";
import { Anchor__factory } from "../../types";

// TODO: Shouldn't run setup methods if the contracts weren't redeployed.
const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deployer } = await getNamedAccounts();
  const signer = await ethers.provider.getSigner(deployer);

  const AnchorDeployment = await deployments.get(CONTRACTS.anchor);

  const AnchorContract = await Anchor__factory.connect(
    AnchorDeployment.address,
    signer
  );

  const USTContract = await ERC20__factory.connect(USTAddress, signer);

  console.log("approve ...");

  await waitFor(
    USTContract.approve(
      AnchorContract.address,
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    )
  );

  console.log("approve underlying succesfull");
};
func.tags = ["setup"];
func.dependencies = [CONTRACTS.anchor];

export default func;
