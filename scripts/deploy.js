const web3 = require("web3");
const BigNumber = require('bignumber.js');

const main = async () => {
  const [deployer, person1] = await hre.ethers.getSigners();
    const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
    const transactions = await transactionsFactory.deploy();
    await transactions.deployed();
    console.log("Contract deployed to: 0x734C82aE517bd023Aa06c5997b525e87cb41345c", transactions.address);
    // const deployerBalance = await deployer.getBalance();
    // console.log("deployer balance:", deployerBalance.toString());
    // console.log("Contract deployed by:", deployer.address);

    // let contractBalance = await hre.ethers.provider.getBalance(
    //   transactions.address
    // );
    // console.log(
    //   "Contract balance:",
    //   hre.ethers.utils.formatEther(contractBalance)
    // );
    
    // let waveCount;
    // waveCount = await transactions.getTotalWaves();
    // const senderBalance = await transactions.getBalance();
    // console.log(senderBalance.toString());

    // const transferTxn = await transactions.sendMoney(person1.address, "5000000", "First transaction");  
    // await transferTxn.wait();

    // const senderBalance2 = await transactions.getBalance();
    // console.log("Balance after", senderBalance2.toString());
    
    // const receiverBalance = await transactions.connect(person1).getBalance();
    // console.log("Receiver balance", receiverBalance.toString());

  //   contractBalance = await hre.ethers.provider.getBalance(transactions.address);
  // console.log(
  //   "Contract balance:",
  //   hre.ethers.utils.formatEther(contractBalance)
  // );

    // const [_, randomPerson] = await hre.ethers.getSigners();
    // waveTxn = await transactions.connect(randomPerson).wave("Another message!");
    // await waveTxn.wait(); // Wait for the transaction to be mined

    // let allWaves = await transactions.getAllWaves();
    // console.log(allWaves);
  };

  const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };

  runMain();