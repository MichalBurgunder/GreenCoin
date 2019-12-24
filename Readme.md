# An Attempt at Novelty in Blockchain

With the stupidly common talk about blockchain, novel ideas with the technology are hard to come by. While working on my Masters degree, I have come up with an idea on how to use it in a way that, although I don't believe a first, at least one of few people to suggest it, and implemented a basic prototype.

## The Problem

There are three issues that the use would like to solve:

- Use of cryptocurrencies seems far-fetched or downright dangerous.
- Companies would like to market themselves are tech savvy
- Users would like to contribute for charitable causes Each of these problems sound unrelated to one another, but they find harmony in using blockchain for charity.

## The Model

If companies would like to show their technical wizardry, a simple blockchain application that gives out free coins sounds like a scam. But this is exactly the whole point: It seems too good to be true. But we have to remember, that each "GreenCoin", as I have called it here, is only worth as much as people think it's worth. Now, let's take company A, who decides that they are going to be giving out this free money, and even gives instructions on how to do it. Then, because blockchain is its own marketing tool, people would of course be interested to get some free cryptocoins.

But what to do with these coins? Seeing that companies like to give to give to charity to make themselves look good, then a coin life cycle that goes from the company to charity is a good thing. A business can make a contract (through solidity or otherwise) that says that the charities can **sell** the greenCoin back to the companies who are giving them out for free. Therrefore, if a comapny has many charities with whom they have contracts, users are free to spend their "money" for any charitiy of their choice, from the list. This convinces (and rightfully so) that the user is directly contributing to society, while charities get money, and companies pay for this strategy. It's a win for virtually everyone.

The only downside, is that companies would have to pay for the GreenCoin, as well as the engineering.

![The life cycle for any GreenCoin](https://github.com/MichalBurgunder/GreenCoin/edit/master/blockchain_model.png=100x20 "2")

## The Prototype

For this prototype, I have given each of the charities an environmental theme, while the companies are purely invented. The code is very very basic, and is even missing bits and pieces from it. But the application works as a general overview of how such an application might look like.
