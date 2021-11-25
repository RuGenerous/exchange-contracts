# Ruggy Smart Contracts
This repo contains all of the smart contracts used to run [Ruggy](ruggy.exchange).

## Deployed Contracts
Factory address: `not set`

Router address: `not set`

## Running
These contracts are compiled and deployed using [Hardhat](https://hardhat.org/). They can also be run using the Remix IDE. A tutorial for using Remix is located [here](https://docs.avax.network/build/tutorials/platform/deploy-a-smart-contract-on-avalanche-using-remix-and-metamask).

To prepare the dev environment, run `yarn install`. To compile the contracts, run `yarn compile`. Yarn is available to install [here](https://classic.yarnpkg.com/en/docs/install/#debian-stable) if you need it.

## Accessing the ABI
If you need to use any of the contract ABIs, you can install this repo as an npm package with `npm install --dev @rugenerous/exchange-contracts`. Then import the ABI like so: `import { abi as IRuggyPairABI } from '@rugenerous/exchange-contracts/artifacts/contracts/ruggy-core/interfaces/IRuggyPair.sol/IRuggyPair.json'`.

- The packages have not been published to NPM yet...

## Attribution
These contracts were adapted from these Uniswap repos: [uniswap-v2-core](https://github.com/Uniswap/uniswap-v2-core), [uniswap-v2-periphery](https://github.com/Uniswap/uniswap-v2-core), and [uniswap-lib](https://github.com/Uniswap/uniswap-lib).


by @camdengrieh
