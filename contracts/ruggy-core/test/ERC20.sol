pragma solidity =0.5.16;

import '../RuggyERC20.sol';

contract ERC20 is RuggyERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
