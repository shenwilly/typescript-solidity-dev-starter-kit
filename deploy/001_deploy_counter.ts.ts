import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deploy} = hre.deployments;

  const [ deployer ] = await hre.getUnnamedAccounts();
  console.log(deployer);

  const deployResult = await deploy('Counter', {
    from: deployer,
    log: true,
    deterministicDeployment: true,
  });
};
export default func;
func.tags = ['Counter'];
