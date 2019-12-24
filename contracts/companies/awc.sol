pragma solidity ^0.5.0;

contract Awc {
  mapping(address => uint) pledges;
  uint sum;
  uint goal;
  bool campaingLive;
  address payable owner;
  address[] donors;
  uint totalMoney = 0;

  constructor(uint _goal) public {
    sum = 0;
    goal = _goal;
    campaingLive = true;
    owner = msg.sender;
  }


  function donateLarge2(address donor) external payable {
    // require(msg.value > 0 && donor != address(0) && campaingLive);
    sum += msg.value;
    pledges[donor] += msg.value;
    donors.push(msg.sender);
  }

  function getMoney(address payable beneficiary) payable external{
    // require(address(this).balance >= 5);
    // beneficiary.transfer(address(this).balance);
    beneficiary.send(5);
    // return 55;
    // return address(this).balance;
  }
}
