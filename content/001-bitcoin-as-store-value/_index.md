---
title: "Bitcoin as store of value"
date:
draft: false
weight: 10
menu: ''
url: '/bitcoin-as-store-value'
---
The Satoshi LIRA project is built upon the concept of assigning
intrinsic value to a cryptocurrency through Bitcoin. Bitcoin,
recognized as a robust store of value, plays a pivotal role in the
Satoshi LIRA protocol. As mentioned earlier, the protocol utilizes
Bitcoin as the store of value to generate the LIRA derivative at a
ratio of 1 Satoshi to 1 LIRA. This implies that for every new LIRA
token to be emitted, 0.00000001 BTC must enter the store of value.


**Smart Contract**

The process of generating and controlling
the LIRA derivative is managed through a smart contract. This contract
regulates the minting of LIRA tokens when Bitcoins are added to the
store of value and enforces the burning of LIRA to access the Bitcoin
reserve. By implementing these mechanisms, the smart contract prevents
unauthorized access or incorrect manipulation of the store of value.
It also ensures that malicious entities cannot create new supply
without maintaining the required counter value ratio.

**Dynamic Intrinsic Value**

Beginning from the second block of LIRA
minting the smart contract recalculates the intrinsic value of LIRA
based on the new ratio. This dynamic calculation takes into account
the amount of Bitcoin stored in the reserve. Consequently, the smart
contract mints LIRA tokens in accordance with the updated ratio,
reflecting the evolving intrinsic value.

**Burn Mechanism and Increasing Intrinsic Value**

With each minting of
new LIRA tokens, a portion of the tokens is burned through the burn
mechanism. However, the equivalent value in Bitcoin remains within the
smart contract's reserve. This ensures that the intrinsic value of
LIRA steadily increases over time, as the supply of LIRA decreases and
the amount of Bitcoin in the reserve continues to grow.

**Ethereum Blockchain and Derivatives**

To implement the Satoshi LIRA
protocol, smart contracts are developed and deployed on the Ethereum
blockchain and its derivatives. These blockchain platforms provide a
secure and reliable foundation for executing the protocol's
functionalities, ensuring transparency and immutability in the
generation and management of LIRA tokens.

---

The Satoshi LIRA project leverages Bitcoin's role as a
store of value to create a revolutionary cryptocurrency ecosystem. By
employing smart contracts on the Ethereum blockchain and derivatives,
the protocol establishes the intrinsic value of LIRA in Satoshi,
linking it to the underlying Bitcoin reserve. Through automated
control mechanisms, the protocol ensures the proper minting and
burning of LIRA tokens based on the corresponding amount of Bitcoin
stored. This process guarantees the increasing intrinsic value of LIRA
over time, empowering individuals to embrace economic and political
independence within the Satoshi LIRA ecosystem.

---



![The BTC Vault](/images/thebtcvaultfinale.png)




<h5>The LIRA/satoshi ratio can NEVER be less than 1. The burn mechanism is implemented to increase the BTC intrinsic value of LIRA over time.</h5>


![increasing value](/images/reth_rate.15a0870a.png)

*Graphical approximation of the increase in intrinsic value of LIRA over time*