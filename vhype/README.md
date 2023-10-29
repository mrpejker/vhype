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

This smart contract Events.sol allows to set up giveaway with non-transferable NFT (Soul Bound Token), mints SBT reward to recipient account on successful checkin via claim link, and stores giveaway metadata and mint history.

Arbutrum Goerli address: 0xbC3d5766B724FD33299c90fAeD05592E50069d21

Each giveaway is uniquely identified by `eventId` and contains the single SBT available to claim.

## New SBT claim with lottery
