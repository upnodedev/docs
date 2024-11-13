# Optimism Alt-DA
An Optimism Alt-DA server enables OP Stack chains to use third-party data availability providers with an on-chain translation system that converts Keccak256 commitments into provider-specific CIDs (content identifier hashes).

This Alt-DA server uses Keccak256 commitments instead of generic commitments, providing a security advantage. The challenging contract for Keccak256 commitments is well-implemented, audited, and battle-tested, whereas generic commitments often lack an approved challenging logic. This Keccak256 commitments approach is **approved for joining the Superchain**, as seen in the Redstone chain.

## Prerequisites

- Go version 1.22 or above

## Installation
Clone the repository
```bash
git clone https://github.com/upnodedev/op-alt-da
cd op-alt-da
```
Install
```bash
make install
```
## Features
- Configurable parameters of alt-da may be set using either environment variables or command line flags.
- Supports Celestia data availability solution.
- Supports FileStore to store the data.
- Supports IPFS to store the data.
- Supports ArWeave to store the data.

## Alt-DA can be run with the following data availability solutions.

### Run the Alt-DA using Celestia. 
```shell 
alt-da start --da=celestia --da-id=0x000c  --celestia.auth_token=<api_token> --celestia.namespace=<namespace> --celestia.rpc=<rpc_url> 
--evm-rpc-url=<evm_rpc_url> --chain-id=<chain_id> --key-file=<key_file> --passphrase=<passphrase> --alt-da-hub-addr=<alt-da-hub-address>
```

### Run the Alt-DA using FileStore. 
```shell
alt-da start --da=filestore --filestore.path=<path to store data>
```

### Run the Alt-DA using IPFS. 
```shell
alt-da start --da=ipfs --da-id=0x000e --ipfs.url=<ipfs node url>
--evm-rpc-url=<evm_rpc_url> --chain-id=<chain_id> --key-file=<key_file> --passphrase=<passphrase> --alt-da-hub-addr=<alt-da-hub-address>
```

### Run the Alt-DA using ArWeave. 
```shell
alt-da start --da=ar --da-id=0x000d --ar.client_url=http://localhost:8080 --ar.wallet_path=<path to wallet json file>
--evm-rpc-url=<evm_rpc_url> --chain-id=<chain_id> --key-file=<key_file> --passphrase=<passphrase> --alt-da-hub-addr=<alt-da-hub-address>
```