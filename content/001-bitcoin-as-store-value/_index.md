---
title: "Bitcoin as store of value"
date:
draft: false
weight: 10
menu: ''
url: '/bitcoin-as-store-value'
---

The name Satoshi LIRA comes out from the idea to give to a cryptocurrency an intrinsic value in bitcoin.
As anticipated in the introduction, the store of value in bitcoin is used by the protocol to generate the LIRA derivative on a 1 Satoshi / 1 LIRA starting ratio, this means that 0.00000001 BTC has to enter the store of value to let the emission of 1 new LIRA possible.

This process is automatically controlled by a smart contract, which authorizes the mint of LIRA when bitcoins are put in the store of value, following the current LIRA/SATOSHI ratio, and forces the burn of LIRA to access the bitcoin reserve. 

Starting from the second minted block of LIRA, the smart contract will calculate the new intrinsic value and mint tokens based on the new ratio.



A smart contract designed this way prevents unhautorized or incorrect access to the store of value or that malicious third party entities could create new supply without maintaining the counter value ratio.

![The BTC Vault](/images/thebtcvaultfinale.png)




Every time new LIRA are minted, a portion is burned through the burn mechanism, but the equivalent in BTC remains within the contract. This ensure that the intrinsic value of LIRA steadily increases over time.


Every user can burn their LIRA at any time and receive back the equivalent of its intrinsic value in BTC.
This allows every LIRA holder to have the mathematical certainty that, in a completely passive manner, regardless of their activities within the Satoshi LIRA ecosystem, the intrinsic value of their LIRA will constantly grow over time.




<h5>The LIRA/satoshi ratio can NEVER be less than 1. The burn mechanism is implemented to increase the BTC intrinsic value of LIRA over time.</h5>


![increasing value](/images/reth_rate.15a0870a.png)

*Graphical approximation of the increase in intrinsic value of LIRA over time*