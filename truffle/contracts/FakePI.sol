// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;
contract FakePI {
  struct Product 
  {
      string companyName;
      string productTitle;
      string description;
      uint256 mfgDate;
      uint256 expDate;
      string batchNumber;
      uint cost;
      uint quantity;
      uint distributorId;
  }

 struct Person
  { //struct for distributor
        uint id;
        string name;
        string add;
        string email;
        string phone;
        string assignRegion;
  }

    mapping(uint  => Person) private distributorStruct;
    uint public distributorCount=0;
    uint public assetCount=0;

    event RejectDistributor(string  name,string  add,string  email,string  phone);

    function insertDistributor(string memory name,string memory add,string memory email,string memory phone,string memory aRegion) public returns(bool)
    {
        for(uint i=0;i<distributorCount;i++){
                require(keccak256(abi.encodePacked((distributorStruct[i].email))) != keccak256(abi.encodePacked(("123@gmail.com"))),"Distributor already exists");
        }
        distributorStruct[distributorCount]=Person(distributorCount,name,add,email,phone,aRegion);
        distributorCount++;
        return true;
    }

    function getDistributorbyId(uint id)public view returns(string memory,string memory,string memory,string memory){
        return (distributorStruct[id].name,distributorStruct[id].add,distributorStruct[id].email,distributorStruct[id].phone);
    }

    function getAlldistributors()public view returns (Person[] memory){
      Person[]   memory id = new Person[](distributorCount);
      for (uint i = 0; i < distributorCount; i++) {
          Person storage member = distributorStruct[i];
          id[i] = member;
      }
      return id;
    }

    function balance(uint _amount) public pure returns(bool){
        require(_amount<20,"Balance need to be greater than 20");
        return true;
    }
//end of distributor

mapping(uint  => Product) private assetStore;
mapping(address => mapping(uint => bool)) private walletStore;

function createAsset(string memory companyName, string memory productTitle, string memory description, uint256 mfgDate, uint256 expDate,string memory batchNumber, uint cost, uint quantity,uint distributorId) public 
{    
      assetStore[assetCount] =Product(companyName, productTitle,description, mfgDate, expDate, batchNumber, cost, quantity, distributorId);
      walletStore[msg.sender][assetCount] = true;
      assetCount++;
    
}
 function getItemByUUID(uint i) public view returns(uint cost,uint quantity){
        require(i<=assetCount,"Asset does not exists");
        return (assetStore[i].cost,assetStore[i].quantity);
}

function isOwnerOf(address owner, uint i) public view returns (bool) {
 
    if(walletStore[owner][i]) {
        return true;
    }
    return false;
}

function getAllAssets() public view returns(Product[] memory){
    Product[]   memory x = new Product[](assetCount);
      for (uint i = 0; i < assetCount; i++) {
          Product storage member = assetStore[i];
          x[i] = member;
      }
      return x;
}

