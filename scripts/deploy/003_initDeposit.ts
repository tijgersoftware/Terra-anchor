import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { waitFor } from "../txHelper";
import { CONTRACTS } from "../constants";
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

  console.log("init approving");

  await waitFor(AnchorContract.approveUST());

  console.log("initdepositing ...");

  await waitFor(AnchorContract.initDepositStable(5));

  console.log("initdepositing succesfull");
};

func.tags = ["setup"];
func.dependencies = [CONTRACTS.anchor];

export default func;
