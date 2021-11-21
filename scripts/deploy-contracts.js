
const hre = require("hardhat");

async function main() {

    const WAVAX = "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7";
    const Treasury = "0x2F87A9550f19666cEF5De29c5F613966cf164BE6";

    const Factory = await hre.ethers.getContractFactory("RuggyFactory");
    const factory = await Factory.deploy();

    const Router = await hre.ethers.getContractFactory("RuggyRouter");
    const roiter = router.deploy()


}