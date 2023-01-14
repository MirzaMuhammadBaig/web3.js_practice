// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract data {
    struct Data {
        string name;
        uint age;
        uint cnic;
        string nationality;
    }

    mapping(address => Data) public checkData;

    function setData(
        string memory _name,
        uint _age,
        uint _cnic,
        string memory _nationality
    ) public {
        require(
            (keccak256(abi.encodePacked(checkData[msg.sender].name))) !=
                (keccak256(abi.encodePacked(_name))) ||
                checkData[msg.sender].age != _age ||
                checkData[msg.sender].cnic != _cnic ||
                (
                    keccak256(
                        abi.encodePacked(checkData[msg.sender].nationality)
                    )
                ) !=
                (keccak256(abi.encodePacked(_nationality))),
            "You have already submited this info"
        );
        checkData[msg.sender].name = _name;
        checkData[msg.sender].age = _age;
        checkData[msg.sender].cnic = _cnic;
        checkData[msg.sender].nationality = _nationality;
    }
}
