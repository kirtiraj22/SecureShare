# SecureShare

## Contents
- Summary
- Problem Statement
- Project Description
- Features
- Tech Stacks
- Run Locally


## Summary

SecureShare is a secure and decentralized file storing and sharing platform built on the Ethereum blockchain. It provides users with a reliable and private solution to store and share their files while leveraging the power of blockchain technology.

## Problem Statement

Traditional file storing and sharing platforms often lack robust security measures and are susceptible to data breaches and privacy concerns. SecureShare aims to address these issues by offering a decentralized and encrypted solution where users have complete control over their files.

## Project Description

SecureShare allows users to securely store and share their files in a decentralized manner. With end-to-end encryption and decentralized storage, users can be confident that their files are protected and accessible only to authorized individuals.
The platform provides a user-friendly interface for uploading and managing files. Users can easily grant access to others by specifying their wallet addresses, ensuring secure and controlled file sharing.

SecureShare also emphasizes user control and ownership. By leveraging blockchain technology, users have full control over their files and can easily manage permissions and access rights.

Whether it's for personal or professional use, SecureShare offers a reliable and secure file storage and sharing solution. Say goodbye to centralized platforms and embrace the power of decentralization with SecureShare.

## Features

- Decentralized Storage: Securely store files using the IPFS (InterPlanetary File System) protocol, ensuring data integrity and availability.
- File Sharing: Share files with others by granting access through wallet addresses, enabling secure and controlled sharing.
- Data Privacy: Encrypt files to maintain privacy and prevent unauthorized access.
- Smart Contract Integration: Utilize Ethereum smart contracts to enable secure interactions, access control, and incentivization.
- Revenue Model: Introduce a cryptocurrency-based revenue model, allowing users to pay for additional storage space or premium features using Ether (ETH) or other tokens.

## Tech Stacks

- Ethereum: Leveraging the Ethereum blockchain for smart contract functionality and secure transactions.
- IPFS: Utilizing the InterPlanetary File System for decentralized file storage and retrieval.
- React.js: Building the user interface and front-end components.
- Hardhat: Developing and testing smart contracts using the Hardhat development environment.
- Ethers.js: Interacting with Ethereum and smart contracts programmatically.
- Tailwind CSS: Styling and design framework for creating modern and responsive UI.

## Run Locally

**1.** Fork [this](https://github.com/zkBOYss/SecureShare.git) repository.

**2.** Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/SecureShare.git
```

**3.** Navigate to the project directory in your local system.

```
cd SecureShare
```

**4.** Run Frontend part :

```
cd client
npm install
npm run dev

```

**5.** Run Backend:

```
cd backend
npm install --save-dev hardhat
```

**6.** Run hardhat node in seperate terminal(don't terminate the terminal):

```
    npx hardhat node
```

**7.** Deploy locally

```
    npx hardhat run --network localhost scripts/deploy.js
```
