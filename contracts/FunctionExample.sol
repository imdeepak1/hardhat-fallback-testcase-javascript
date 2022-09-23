//SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract FunctionExample {
    
    uint256 balanceReceived;
    address public owner;
    event functionCall(address);

    constructor(){
        owner = msg.sender;
    }
    function receiveMoney() public payable {
        require(balanceReceived + msg.value >= msg.sender.balance);
        balanceReceived += msg.value;
    }

    receive() external payable {
       balanceReceived = address(this).balance;
       emit functionCall(address(this));

    }
    fallback() external payable{
      balanceReceived = address(this).balance;
      emit functionCall(address(this));
    }
}