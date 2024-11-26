# Upnode Deploy

Upnode Deploy is an open-source Docker Compose and UI tool for deploying an OP Stack chain.

Unlike Conduit, which is a paid, closed-source RaaS, Upnode Deploy is an open-source public good that helps developers customize and deploy their OP Stack chain.

## Prerequisites

- Docker v20.10+
- Docker-compose 2.x.x+

## Getting Started

Clone the repository: https://github.com/upnodedev/opstack-compose

Copy the .env.example file to .env.

Edit the following sections in the .env file:

```
##################################################
#                 Accounts Info                  #
##################################################

# Admin account
ADMIN_PRIVATE_KEY=

# Batcher account
BATCHER_PRIVATE_KEY=

# Proposer account
PROPOSER_PRIVATE_KEY=

# Sequencer account
SEQUENCER_PRIVATE_KEY=

# Contract deployer account
DEPLOYER_PRIVATE_KEY=$ADMIN_PRIVATE_KEY

##################################################
#                 L1 RPC Info                    #
##################################################

# The kind of RPC provider, used to inform optimal transaction receipts
# fetching. Valid options: alchemy, quicknode, infura, parity, nethermind,
# debug_geth, erigon, basic, any.
L1_RPC_KIND=basic

# RPC URL for the L1 network to interact with
L1_RPC_URL=<Tenderly Fraxtal RPC Endpoint>

##################################################
#               Deployment Info                  #
##################################################

# The chain identifier for the L2 network
L2_CHAIN_ID=<Chain ID>
```

You can use the same private key for Admin, Batcher, Proposer, and Sequencer for ease of testing. However, this practice is not recommended on the mainnet.

After editing the .env file, deploy the chain using Docker Compose by running the following command:

```
docker compose --profile sequencer up -d --build
```

Wait for it to deploy the OP Stack chain as a Fraxtal L3.

Once the deployment is complete, your Fraxtal L3 will be accessible at:

* **RPC:** http://YOURIPADDRESS:8545
* **WS:** ws://YOURIPADDRESS:8545


## Blockscout Explorer

To deploy the Blockscout explorer for your Fraxtal L3 chain, navigate to the 'blockscout' folder, then set any environment variables you need to change from the defaults. You should consider changing at least the following variables in common-blockscout.env

```
CHAIN_ID - set to the l2 chain ID
SUBNETWORK - set to the chain name
```
and optionally

```
LOGO
FOOTER_LOGO
```
and these ones in common-frontend.env

```
NEXT_PUBLIC_NETWORK_NAME= - the chain name (longer form)
NEXT_PUBLIC_NETWORK_SHORT_NAME= - the chain name (shorter form)
NEXT_PUBLIC_NETWORK_ID= - the l2 chain ID
```
and if you don't want the defaults (Ether, ETH and 18).
```
NEXT_PUBLIC_NETWORK_CURRENCY_NAME= - the currency name
NEXT_PUBLIC_NETWORK_CURRENCY_SYMBOL= - the currency symbol
NEXT_PUBLIC_NETWORK_CURRENCY_DECIMALS= - the currency decimals
```

The full list of configurable environment variables can be found in the following files.

- common-blockscout.env
- common-frontend.env
- common-smart-contract-verifier.env
- common-stats.env
- common-visualizer.env

For complete explanations of these settings, pleas refer to the BlockScout documentation at https://docs.blockscout.com/setup/env-variables.

Once the settings have been configured, you are ready to run:

```
docker compose -f geth.yml up -d --build
```

## Bridge

...

### Indexer

Copy .env.example to .env and modify the environment variables. You will likely want to change moset of the variables to conform to the properties of your chain.

Only one RPC is required for each layer, with the others being backups in case the first one fails.

Launch the indexer with

```
docker compose -f geth.yml up -d --build
```
### UI

...

## Faucet

To run a faucet, navigate to the 'faucet' folder and create a '.env' file with the following variables
```
export FAUCET_NAME= - usually set to the chain name
export FAUCET_AMOUNT= - the amount to be delivered by the faucet (in the principal denomination - eg ETH)
export FAUCET_INTERVAL= - the cooldown time in minutes between uses of the faucet by a given account

export WEB3_PROVIDER= - the URL of an l2 RPC
export PRIVATE_KEY= - the private key of an account holding the faucet funds
```
...
Then start the faucet with
```
docker compose up -d
```

## Further Actions

If you want to point a domain name to these endpoints or introduce a rate limit, you can use a reverse proxy such as Nginx or Traefik to handle this job.

Span batch activated by default!
