
const hre = require("hardhat");

async function main() {

    const deployer = await (await hre.ethers.getSigner()).address
    console.log("Deployer is - ", deployer)

    const WAVAX = "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7";
    const Treasury = "0x2F87A9550f19666cEF5De29c5F613966cf164BE6";
    const Factory = "0x20dCD990dEe8A48CF46992DA70F76E2173E04676"

    // // Deploy the DEX Factory
    // const Factory = await hre.ethers.getContractFactory("RuggyFactory");
    // console.log("Deploying Factory...")
    // const factory = await Factory.deploy(deployer);

    // await factory.deployed()

    // console.log('Ruggy Factory address is - ',factory.address)


    //Deploy the DEX Router

    const Router = await hre.ethers.getContractFactory("RuggyRouter");
    console.log("Deploying Router...")
    const router = await Router.deploy(Factory, WAVAX)

    await router.deployed()

    console.log('Ruggy Router address is - ', router.address)

    await factory.setFeeTo(Treasury);
    const dexFeeReceiver = await factory.feeTo().toString();

    console.log('The following address receives the fees - ', dexFeeReceiver)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });