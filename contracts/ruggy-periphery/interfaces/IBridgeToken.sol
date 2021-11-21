pragma solidity >=0.5.0;

import "../../ruggy-core/interfaces/IRuggyERC20.sol";

interface IBridgeToken is IRuggyERC20 {
    function swap(address token, uint256 amount) external;
    function swapSupply(address token) external view returns (uint256);
}