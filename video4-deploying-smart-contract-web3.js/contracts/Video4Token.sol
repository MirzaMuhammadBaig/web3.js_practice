// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Video4Token is ERC20 {
    constructor() ERC20("Video4Token", "V4T") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }
}