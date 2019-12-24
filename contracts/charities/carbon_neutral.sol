pragma solidity ^0.5.0;

contract carbon_neutral {
  mapping(address => uint) pledges;
  address[] donors;


  function donate(address donor) external payable {
    pledges[donor] += msg.value;
    donors.push(msg.sender);
  }

  function buyBack(address) external payable {
    // special function to automatically sell coins to companies
    return;
  }
}
