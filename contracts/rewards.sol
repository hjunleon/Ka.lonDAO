// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";

contract kalonDAO is
    Initializable,
    ERC1155Upgradeable,
    AccessControlUpgradeable
{
    using SafeMathUpgradeable for uint256;
    using CountersUpgradeable for CountersUpgradeable.Counter;

    address public admin;
    bytes32 public constant NORMAL_USER = keccak256("NORMAL_USER");
    bytes32 public constant PREMIUM_USER = keccak256("PREMIUM_USER");

    struct kalonCoin {
        uint256 coinId;
        uint8 coinTypeId;
        address issuedBy;
        address issuedTo;
        uint256 value;
    }

    struct Roles {
        bool isAdmin;
        bool isNormalUser;
        bool isPremiumUser;
    }

    struct Image {
        string ipfsHash;
        string title;
        string description;
        uint256 uploadTime;
    }

    struct UserDetails {
        address userAddress;
        uint256 userID;
        string userName;
    }

    modifier onlyAdmin() {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "admin only");
        _;
    }

    // Introduce only access privileges by account modifier to certain functions
    modifier accessPrivilegesByAccount(address account) {
        require(
            hasRole(PREMIUM_USER, msg.sender) || account == msg.sender,
            "require elevated priviledge"
        );
        _;
    }

    mapping(address => uint256[]) internal userOwnedCoins;
    mapping(address => UserDetails) internal _userDetails;
    mapping(uint8 => mapping(address => uint256)) internal _accountBalance;
    mapping(uint256 => kalonCoin) internal _coinDetails;
    // map owner to the image nft stored on ipfs
    mapping(address => Image[]) public ownerMapImage;
    mapping(address => bool) internal normalUserExist;
    mapping(address => bool) internal premiumUserExist;

    event ImageUploaded(
        address indexed _owner,
        string _ipfsHash,
        string _title,
        string _description,
        uint256 _uploadTime
    );

    event RegisteredNormalUser(
        address indexed account,
        uint256 userID,
        string username
    );
    event DeregisteredNormalUser(
        address indexed account,
        uint256 userID,
        string username
    );
    event RegisteredPremiumUser(
        address indexed account,
        uint256 userID,
        string username
    );
    event DeregisteredPremiumUser(
        address indexed account,
        uint256 userID,
        string username
    );

    event CoinsCreatedBatch(
        uint256[] ids,
        uint8 coinTypeId,
        address indexed issuedBy,
        address indexed issuedTo,
        uint256[] fungibleCoins
    );

    event CoinTransferredBatch(
        address indexed from,
        address indexed to,
        uint256[] coinIds,
        uint256[] amount
    );

    event CoinRetiredBatch(
        address indexed from,
        uint256[] coinIds,
        uint256[] amount
    );

    /**
     * @dev Initializes the contract
     * @param _admin admin hexademical address
     * Input hexadecimal address, initializes the contract, and auto assigns the high-level access roles for admin address
     */
    function initialize(address _admin) public initializer {
        // Trigger ERC1155 constructor

        __ERC1155_init("");

        _setRoleAdmin(NORMAL_USER, PREMIUM_USER);
        _setupRole(DEFAULT_ADMIN_ROLE, _admin);
        _setupRole(PREMIUM_USER, _admin);
        admin = _admin;
    }

    /**
     * @dev Derived contract to overrirde interface support
     * @param interfaceId bytes4 id for current interface
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC1155Upgradeable, AccessControlUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function uploadImage(
        string memory _ipfsHash,
        string memory _title,
        string memory _description,
        string memory _tags
    ) external returns (bool _succeed) {
        require(bytes(_ipfsHash).length == 46);
        require(bytes(_title).length > 0 && bytes(_title).length <= 256);
        require(bytes(_description).length < 1024);
        require(bytes(_title).length > 0 && bytes(_tags).length <= 256);
        uint256 uploadTime = block.timestamp;
        Image memory image = Image(_ipfsHash, _title, _description, uploadTime);
        ownerMapImage[msg.sender].push(image);
        emit ImageUploaded(
            msg.sender,
            _ipfsHash,
            _title,
            _description,
            uploadTime
        );
        _succeed = true;
    }

    CountersUpgradeable.Counter internal _numOfUniqueCoins;
    CountersUpgradeable.Counter internal _numOfUniqueUsers;

    /**
     * @dev To check if the token exists on the contract
     * @param coinId unique token ID assigned to the certificate
     * Check via internal counter. If counter is higher than coinId, then yes coinId exists
     */
    function coinExists(uint256 coinId) internal view returns (bool) {
        if (_numOfUniqueCoins.current() >= coinId) return true;
        return false;
    }

    function registerNormalUser(address account, string memory _username)
        external
        onlyAdmin
    {
        require(!normalUserExist[account], "account exists");
        grantRole(NORMAL_USER, account);
        _numOfUniqueUsers.increment();
        uint256 id = _numOfUniqueUsers.current();

        UserDetails storage userInfo = _userDetails[account];
        userInfo.userAddress = account;
        userInfo.userID = id;
        userInfo.userName = _username;

        normalUserExist[account] = true;
        emit RegisteredNormalUser(account, id, _username);
    }

    function upgradePremiumUser(address account) external onlyAdmin {
        require(normalUserExist[account], "account inactive");
        require(!premiumUserExist[account], "account exists");
        grantRole(PREMIUM_USER, account);
        UserDetails storage userInfo = _userDetails[account];

        premiumUserExist[account] = true;
        emit RegisteredPremiumUser(account, userInfo.userID, userInfo.userName);
    }

    function deregisterNormalUser(address account) external onlyAdmin {
        require(normalUserExist[account], "account inactive");
        UserDetails storage userInfo = _userDetails[account];
        super.revokeRole(NORMAL_USER, account);
        normalUserExist[account] = false;
        emit DeregisteredNormalUser(
            account,
            userInfo.userID,
            userInfo.userName
        );
    }

    function deregisterPremiumUser(address account) external onlyAdmin {
        require(premiumUserExist[account], "account inactive");
        UserDetails storage userInfo = _userDetails[account];
        super.revokeRole(PREMIUM_USER, account);
        premiumUserExist[account] = false;
        emit DeregisteredPremiumUser(
            account,
            userInfo.userID,
            userInfo.userName
        );
    }

    function _batchIssue(
        address _issuedBy,
        address _issuedTo,
        uint8 _coinTypeId,
        uint256[] memory _fungibleCoins
    ) internal returns (uint256[] memory ids) {
        require(
            hasRole(NORMAL_USER, _issuedTo) || hasRole(PREMIUM_USER, _issuedTo),
            "account unregistered"
        );
        ids = new uint256[](_fungibleCoins.length);
        for (uint256 i = 0; i <= _fungibleCoins.length - 1; i++) {
            _numOfUniqueCoins.increment();
            ids[i] = _numOfUniqueCoins.current();
        }
        super._mintBatch(_issuedTo, ids, _fungibleCoins, "");
        for (uint256 i = 0; i <= _fungibleCoins.length - 1; i++) {
            userOwnedCoins[_issuedTo].push(ids[i]);
            _coinDetails[ids[i]] = kalonCoin({
                coinId: ids[i],
                coinTypeId: _coinTypeId,
                issuedBy: _issuedBy,
                issuedTo: _issuedTo,
                value: _fungibleCoins[i]
            });
            _accountBalance[_coinTypeId][_issuedTo] = _accountBalance[
                _coinTypeId
            ][_issuedTo].add(_fungibleCoins[i]);
        }

        return ids;
    }

    function batchIssue(
        address issuedTo,
        uint8 coinTypeId,
        uint256[] memory fungibleCoins
    ) external onlyAdmin returns (uint256[] memory ids) {
        ids = _batchIssue(msg.sender, issuedTo, coinTypeId, fungibleCoins);
        emit CoinsCreatedBatch(
            ids,
            coinTypeId,
            msg.sender,
            issuedTo,
            fungibleCoins
        );
    }

    function batchTransfer(
        address from,
        address to,
        uint256[] memory coinId,
        uint8 coinTypeId,
        uint256[] memory amount
    ) external {
        require(to != address(0x0), "null address");
        require(from != address(0x0), "null address");
        require(coinId.length == amount.length, "DE:1");
        require(
            from == msg.sender || super.isApprovedForAll(from, msg.sender),
            "PE:1"
        );
        for (uint256 i = 0; i <= amount.length - 1; i++) {
            require(coinExists(coinId[i]), "BE:2");
            require(super.balanceOf(from, coinId[i]) >= amount[i], "BE:1");
        }
        if (from != to) {
            super.safeBatchTransferFrom(from, to, coinId, amount, "0x00");
        }
        for (uint256 i = 0; i <= amount.length - 1; i++) {
            kalonCoin storage coinInfo = _coinDetails[coinId[i]];
            coinInfo.issuedBy = from;
            coinInfo.issuedTo = to;
            _accountBalance[coinTypeId][from] = _accountBalance[coinTypeId][
                from
            ].sub(amount[i]);
            _accountBalance[coinTypeId][to] = _accountBalance[coinTypeId][to]
                .add(amount[i]);
        }
        emit CoinTransferredBatch(from, to, coinId, amount);
    }

    function _burnBatch(
        address _address,
        uint256[] memory _coinId,
        uint8 _coinTypeId,
        uint256[] memory _quantity
    ) internal {
        require(_coinId.length == _quantity.length, "mismatch");
        require(_address != address(0x0), "null address");
        super._burnBatch(_address, _coinId, _quantity);
        emit CoinRetiredBatch(_address, _coinId, _quantity);
        for (uint256 i = 0; i <= _coinId.length - 1; i++) {
            _accountBalance[_coinTypeId][_address] = _accountBalance[
                _coinTypeId
            ][_address].sub(_quantity[i]);
        }
    }

    function burnBatch(
        address _address,
        uint256[] memory coinId,
        uint8 coinTypeId,
        uint256[] memory quantity
    ) external {
        // message sender must have operator rights over any operations wrt to retirement account
        require(
            _address == msg.sender ||
                super.isApprovedForAll(_address, msg.sender),
            "PE:1"
        );
        _burnBatch(_address, coinId, coinTypeId, quantity);
    }

    function getUserDetails(address userAddress)
        external
        view
        returns (UserDetails memory)
    {
        return _userDetails[userAddress];
    }

    function getTotalNumberOfTokens() external view returns (uint256) {
        return _numOfUniqueCoins.current();
    }

    function getTokenOwnedBy(address coinOwner)
        external
        view
        returns (uint256[] memory coinIds, uint256[] memory coinAmountInIds)
    {
        coinIds = userOwnedCoins[coinOwner];

        coinAmountInIds = new uint256[](coinIds.length);

        for (uint256 i = 0; i <= coinIds.length - 1; i++) {
            coinAmountInIds[i] = super.balanceOf(coinOwner, coinIds[i]);
        }
    }

    function getTotalAccountBalance(uint8 coinTypeId, address account)
        external
        view
        returns (uint256)
    {
        return _accountBalance[coinTypeId][account];
    }

    function queryRoles(address account) external view returns (Roles memory) {
        Roles memory roles;
        roles.isAdmin = hasRole(DEFAULT_ADMIN_ROLE, account);
        roles.isNormalUser = hasRole(NORMAL_USER, account);
        roles.isPremiumUser = hasRole(PREMIUM_USER, account);
        return roles;
    }
}
