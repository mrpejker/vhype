# vHype - SBT-powered SMM tool for brands

## Overview

Current repository contains source code of vHype application compatible with Arbitrum Goerli. The project for ETH London Hackathon is a new SMM feature for vSelf application, which is a community-as-a-service platform.

The available fuctionality is to set up custom SBT giveaway, distribute SBT reward using claim link or QR code, check claim analytics.

Key new elements:

- Rewritten and redeployed smart contract for Artbitrum network (Events.sol)
- Lottery between three SBTs in SMM givewaway campaign
- Modified user story
- Support [MetaMask](https://metamask.io/) authorization
- Automated email with Resend for detailed minting

## Documentation

Here is the description of the main vSelf [SBT collection toolkit](https://vself-project.gitbook.io/vself-project-documentation/sbt-collection-toolkit) functionality, which is released on NEAR mainnet.

## SBT smart contract

This smart contract Events.sol allows you to set up giveaways with non-transferable NFT (Soul Bound Token), mints SBT reward to recipient account on successful checkin via claim link, and stores giveaway metadata and mint history.

Arbutrum Goerli address: 0xbC3d5766B724FD33299c90fAeD05592E50069d21
https://testnet.arbiscan.io/address/0xbC3d5766B724FD33299c90fAeD05592E50069d21

Each giveaway is uniquely identified by `eventId` and contains the single SBT available to claim.

## SBT set up 
Frontend is taken from vSelf.app, wallet and chain are updated for the hackathon.
https://github.com/mrpejker/vhype-back
https://vhype-back.vercel.app/
The modified version of the repository is stored here: 

<img width="855" alt="Screenshot 2023-10-29 at 09 57 50" src="https://github.com/mrpejker/vhype/assets/8280427/9eb3738f-628d-4b1f-96c9-117299d38e70">


## New SBT claim with lottery
A new frontend lottery that allows winning the three prizes.
Google-Cloud based app hosted on Firebase/GCP: https://vhype-1023.web.app
<img width="717" alt="Screenshot 2023-10-29 at 10 01 53" src="https://github.com/mrpejker/vhype/assets/8280427/e1f21eec-9acd-410c-aaf0-94be3f3aeab9">
