pragma solidity ^0.5.0;

contract Slurm {
  mapping(address => uint) pledges;
  uint sum;
  uint goal;
  bool campaingLive;
  address payable owner;
  address[] donors;
  uint totalMoney = 0;

  constructor(uint _goal) payable public {
    sum = 0;
    goal = _goal;
    campaingLive = true;
    owner = msg.sender;
  }


  function donateLarge4(address donor) external payable {
    // require(msg.value > 0 && donor != address(0) && campaingLive);
    sum += msg.value;
    pledges[donor] += msg.value;
    donors.push(msg.sender);
  }

  function getMoney(address payable beneficiary) payable external{
    // require(address(this).balance >= 5);
    beneficiary.transfer(5 ether);
    // return 55;
    // return address(this).balance;
  }

    function getMoney2(address payable beneficiary) external returns (uint){
    // require(address(this).balance >= 5);
    beneficiary.send(5);
    return 55;
    // return address(this).balance;
  }

}
