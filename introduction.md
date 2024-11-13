# Introduction

## Upnode Deploy

 Upnode Deploy offers a simplified and automated deployment process for the OP stack chain, with flexibility for customization. It streamlines deployment, allowing developers to concentrate on their core development and research into OP stack customization rather than being bogged down by operational aspects of deployment.

 The chain deployment includes all essential components for operating the chain, plus a Grafana dashboard for monitoring.

 Once the chain has been launched, the tool also makes it easy to configure and launch the following associated services.
 - A Blockscout explorer.
 - Bridge indexer and UI.
 - Faucet

 In contrast to similar services (like Conduit, which is a paid, closed-source RaaS), Upnode Deploy is an open-source public good that helps developers customize and deploy their OP Stack chain on their own hardware.

## Signer Proxy

 Storing and transmitting private keys represents a security risk for mainnet operators. The Signer Proxy server provides a solution for securing signer keys using industry standard hardware sigers.

 Signer proxy is an RPC proxy signer server that is run alongside the chain. It performs transaction signing using the chosen hardware signer, allowing chain operators to seamlessly deploy Optimism stack chains using either YubiHSM2 or AWS KMS hardware signer solutions.
 
 The server listens for the eth_signTransaction [descriptive name for this] requests and performs the transaction using the chosen signer solution. Other requests are forwarded to the underlying RPC provider without modification. 

## Optimism Alt-DA

 OP Stack supports the use of PlasmaDA to enable chain operators to utilize third-party data availability solutions, including but not limited to Celestia, IPFS, and Arweave Currently none of these directly support PlasmaDA because they use different data lookup keys compared to those required by the PlasmaDA specification.

 The advantage of utilizing PlasmaDA includes its support from OP Labs and its inherent fault-proof capabilities out of the box. It also adheres to the "law of chains," facilitating opportunities for various chains to integrate into the superchain network.

 The Optimism Alt-DA server provides a translation layer that converts Keccak256 commitments supported by PlasmaDA into provider-specific content identifier hashes which are then used to access or store data on the chosen provider. It uses a smart contract on the Optimism network to map Keccak256 commitments to provider-specific keys, providing a mapping that is immutable and trustless with a low association cost.

 The following data availability solutions are supported.
 - Celestia
 - IPFS
 - ArWeave
 - File store

