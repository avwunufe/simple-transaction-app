// SPDX-License-Identifier: Unlicenced
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Transactions {

    address private owner;

    uint256 transactionCounts;

    mapping (address => uint) balanceOf;

    // mapping (uint => TransferStruct[]) useridToTransfers;

    mapping (address => TransferStruct[]) addressToTransactions;

    struct TransferStruct {

        address sender;

        address receiver;

        uint amount;

        string remark;

        uint256 timestamp;

    }

    TransferStruct[] transactions;

    event Transfer(address indexed sender, address indexed receiver, uint amount, string remark, uint256 timestamp);

    constructor() {
        owner = msg.sender;
        balanceOf[tx.origin] = msg.sender.balance;
    }

    function getOwner() public view returns(address) {
        return owner;
    }

    function sendMoney(address payable receiver, uint amount, string memory remark) public returns(bool) {
        console.log(balanceOf[msg.sender]);
        require(balanceOf[msg.sender] > amount, "Insufficient balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[receiver] += amount;
        TransferStruct memory currentTransaction = TransferStruct(msg.sender, receiver, amount, remark, block.timestamp);
        transactions.push(currentTransaction);
        // uint256 id = transactions.length -1;
        addressToTransactions[msg.sender].push(currentTransaction);
        transactionCounts += 1;
        emit Transfer(msg.sender, receiver, amount, remark, block.timestamp);
        return true;
    }

    function getBalance() public view returns(uint) {
        return balanceOf[msg.sender];
    }

    function getAllTransactions() public view returns(TransferStruct[] memory) {
        return transactions;
    }
    
    function getUsersTransactions() public view returns(TransferStruct[] memory) {
        return addressToTransactions[msg.sender];
    }

    

    function getTransactionsCount() public view returns(uint256) {
        return transactionCounts;
    }

}