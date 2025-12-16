// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FreshChain {
    // Minimal Ownable
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    // Roles
    mapping(address => bool) public isProducer;
    mapping(address => bool) public isTransporter;
    mapping(address => bool) public isDistributor;
    mapping(address => bool) public isRetailer;

    modifier onlyProducer() {
        require(isProducer[msg.sender], "Only producer");
        _;
    }
    modifier onlyTransporter() {
        require(isTransporter[msg.sender], "Only transporter");
        _;
    }
    modifier onlyDistributor() {
        require(isDistributor[msg.sender], "Only distributor");
        _;
    }
    modifier onlyRetailer() {
        require(isRetailer[msg.sender], "Only retailer");
        _;
    }

    // Stages / State
    enum Stage {
        NONE,               // not exists
        READY_FOR_PICKUP,   // created by producer, waiting transporter
        IN_TRANSIT,         // accepted by transporter
        AT_DISTRIBUTOR,     // owned by distributor
        AT_RETAILER,        // owned by retailer, waiting final inspection
        COMPLETED_PASS,     // retailer inspected OK
        COMPLETED_FAIL      // retailer inspected FAIL
    }

    // Data Structures
    struct Batch {
        uint256 batchId;
        string productName;
        uint256 quantityKg;

        address producer;
        address assignedTransporter; // the transporter address given by producer

        address currentOwner;
        Stage stage;

        uint256 createdAt;
        uint256 lastUpdatedAt;

        bool arrived;               // set at retailer final
        bool passedInspection;      // set at retailer final
    }

    struct SensorData {
        uint256 timestamp;
        int256 temperature; // [-10..40]
        int256 humidity;    // [0..40]
        string location;
        address recordedBy; // transporter
    }

    struct TransferRecord {
        uint256 timestamp;
        address from;
        address to;
    }

    // Storage
    uint256 private nextBatchId = 1;

    mapping(uint256 => Batch) private batches;
    mapping(uint256 => bool) private batchExists;

    mapping(uint256 => SensorData[]) private sensorLogs;
    mapping(uint256 => TransferRecord[]) private transferLogs;

    uint256[] private allBatchIds;

    // Events (for UI feed later)
    event ProducerRegistered(address indexed producer);
    event TransporterRegistered(address indexed transporter);
    event DistributorRegistered(address indexed distributor);
    event RetailerRegistered(address indexed retailer);

    event ProducerRevoked(address indexed producer);
    event TransporterRevoked(address indexed transporter);
    event DistributorRevoked(address indexed distributor);
    event RetailerRevoked(address indexed retailer);

    event BatchCreated(
        uint256 indexed batchId,
        address indexed producer,
        address indexed assignedTransporter,
        string productName,
        uint256 quantityKg,
        uint256 timestamp
    );

    event AssignedTransporterUpdated(
        uint256 indexed batchId,
        address indexed producer,
        address indexed newTransporter,
        uint256 timestamp
    );

    event PickupAccepted(
        uint256 indexed batchId,
        address indexed transporter,
        uint256 timestamp
    );

    event SensorLogged(
        uint256 indexed batchId,
        address indexed transporter,
        int256 temperature,
        int256 humidity,
        string location,
        uint256 timestamp
    );

    event OwnershipTransferred(
        uint256 indexed batchId,
        address indexed from,
        address indexed to,
        uint256 timestamp
    );

    event ArrivedAndInspected(
        uint256 indexed batchId,
        address indexed retailer,
        bool passedInspection,
        uint256 timestamp
    );

    // Constructor
    constructor() {
        owner = msg.sender;
    }

    // Admin: Register / Revoke Roles (Doc requirement)
    function registerProducer(address producer) external onlyOwner {
        require(producer != address(0), "Zero address");
        isProducer[producer] = true;
        emit ProducerRegistered(producer);
    }

    function registerTransporter(address transporter) external onlyOwner {
        require(transporter != address(0), "Zero address");
        isTransporter[transporter] = true;
        emit TransporterRegistered(transporter);
    }

    function registerDistributor(address distributor) external onlyOwner {
        require(distributor != address(0), "Zero address");
        isDistributor[distributor] = true;
        emit DistributorRegistered(distributor);
    }

    function registerRetailer(address retailer) external onlyOwner {
        require(retailer != address(0), "Zero address");
        isRetailer[retailer] = true;
        emit RetailerRegistered(retailer);
    }

    // Optional but useful for your admin panel
    function revokeProducer(address producer) external onlyOwner {
        isProducer[producer] = false;
        emit ProducerRevoked(producer);
    }

    function revokeTransporter(address transporter) external onlyOwner {
        isTransporter[transporter] = false;
        emit TransporterRevoked(transporter);
    }

    function revokeDistributor(address distributor) external onlyOwner {
        isDistributor[distributor] = false;
        emit DistributorRevoked(distributor);
    }

    function revokeRetailer(address retailer) external onlyOwner {
        isRetailer[retailer] = false;
        emit RetailerRevoked(retailer);
    }

    /// Doc-style createBatch(batchId, name, qty). We still require unique.
    function createBatch(
        uint256 batchId,
        string memory productName,
        uint256 quantityKg
    ) external onlyProducer {
        require(batchId != 0, "batchId must be > 0");
        _createBatchInternal(batchId, productName, quantityKg, address(0));
    }

    /// Your preferred: auto ID + assign transporter at creation
    function createBatchAuto(
        string memory productName,
        uint256 quantityKg,
        address assignedTransporter
    ) external onlyProducer returns (uint256 newBatchId) {
        newBatchId = nextBatchId++;
        _createBatchInternal(newBatchId, productName, quantityKg, assignedTransporter);
    }

    function _createBatchInternal(
        uint256 batchId,
        string memory productName,
        uint256 quantityKg,
        address assignedTransporter
    ) internal {
        require(!batchExists[batchId], "Batch already exists");
        require(bytes(productName).length > 0, "Empty productName");
        require(quantityKg > 0, "Quantity must be > 0");

        // If provided, transporter must be a registered transporter
        if (assignedTransporter != address(0)) {
            require(isTransporter[assignedTransporter], "Assigned is not transporter");
        }

        Batch memory b = Batch({
            batchId: batchId,
            productName: productName,
            quantityKg: quantityKg,
            producer: msg.sender,
            assignedTransporter: assignedTransporter,
            currentOwner: msg.sender, // producer initially
            stage: Stage.READY_FOR_PICKUP,
            createdAt: block.timestamp,
            lastUpdatedAt: block.timestamp,
            arrived: false,
            passedInspection: false
        });

        batches[batchId] = b;
        batchExists[batchId] = true;
        allBatchIds.push(batchId);

        emit BatchCreated(
            batchId,
            msg.sender,
            assignedTransporter,
            productName,
            quantityKg,
            block.timestamp
        );
    }

    /// Producer can change assigned transporter BEFORE pickup (your requirement #2)
    function updateAssignedTransporter(uint256 batchId, address newTransporter) external onlyProducer {
        require(batchExists[batchId], "Batch not found");
        Batch storage b = batches[batchId];

        require(b.producer == msg.sender, "Not your batch");
        require(b.stage == Stage.READY_FOR_PICKUP, "Only before pickup");
        require(newTransporter != address(0), "Zero address");
        require(isTransporter[newTransporter], "New is not transporter");

        b.assignedTransporter = newTransporter;
        b.lastUpdatedAt = block.timestamp;

        emit AssignedTransporterUpdated(batchId, msg.sender, newTransporter, block.timestamp);
    }

    // Transporter: Accept Pickup
    function acceptPickup(uint256 batchId) external onlyTransporter {
        require(batchExists[batchId], "Batch not found");
        Batch storage b = batches[batchId];

        require(b.stage == Stage.READY_FOR_PICKUP, "Not ready for pickup");
        require(b.assignedTransporter != address(0), "No assigned transporter");
        require(b.assignedTransporter == msg.sender, "Not assigned to you");

        // owner becomes transporter
        _pushTransfer(batchId, b.currentOwner, msg.sender);

        b.currentOwner = msg.sender;
        b.stage = Stage.IN_TRANSIT;
        b.lastUpdatedAt = block.timestamp;

        emit PickupAccepted(batchId, msg.sender, block.timestamp);
    }

    function addSensorData(
        uint256 batchId,
        int256 temperature,
        int256 humidity,
        string memory location
    ) external onlyTransporter {
        require(batchExists[batchId], "Batch not found");
        Batch storage b = batches[batchId];

        require(b.assignedTransporter != address(0), "No assigned transporter");
        require(b.assignedTransporter == msg.sender, "Not assigned to you");

        require(
            b.stage == Stage.READY_FOR_PICKUP || b.stage == Stage.IN_TRANSIT,
            "Sensor logs only before/while transit"
        );

        require(temperature >= -10 && temperature <= 40, "Temp out of range");
        require(humidity >= 0 && humidity <= 40, "Humidity out of range");
        require(bytes(location).length > 0, "Empty location");

        sensorLogs[batchId].push(
            SensorData({
                timestamp: block.timestamp,
                temperature: temperature,
                humidity: humidity,
                location: location,
                recordedBy: msg.sender
            })
        );

        b.lastUpdatedAt = block.timestamp;

        emit SensorLogged(batchId, msg.sender, temperature, humidity, location, block.timestamp);
    }

    function transferOwnership(uint256 batchId, address newOwner) external {
        require(batchExists[batchId], "Batch not found");
        require(newOwner != address(0), "Zero address");

        Batch storage b = batches[batchId];

        // Must be current owner
        require(msg.sender == b.currentOwner, "Not current owner");

        // Producer transfer is OPTIONAL: only to assigned transporter, only in READY_FOR_PICKUP
        if (isProducer[msg.sender]) {
            require(b.stage == Stage.READY_FOR_PICKUP, "Producer can only transfer before pickup");
            require(b.assignedTransporter != address(0), "No assigned transporter");
            require(newOwner == b.assignedTransporter, "Only to assigned transporter");
            require(isTransporter[newOwner], "New owner must be transporter");

            _pushTransfer(batchId, msg.sender, newOwner);

            b.currentOwner = newOwner;
            b.stage = Stage.IN_TRANSIT;
            b.lastUpdatedAt = block.timestamp;

            emit OwnershipTransferred(batchId, msg.sender, newOwner, block.timestamp);
            return;
        }

        // Transporter -> Distributor
        if (isTransporter[msg.sender]) {
            require(b.stage == Stage.IN_TRANSIT, "Transporter can transfer only in transit");
            require(isDistributor[newOwner], "New owner must be distributor");

            _pushTransfer(batchId, msg.sender, newOwner);

            b.currentOwner = newOwner;
            b.stage = Stage.AT_DISTRIBUTOR;
            b.lastUpdatedAt = block.timestamp;

            emit OwnershipTransferred(batchId, msg.sender, newOwner, block.timestamp);
            return;
        }

        // Distributor -> Retailer
        if (isDistributor[msg.sender]) {
            require(b.stage == Stage.AT_DISTRIBUTOR, "Distributor can transfer only at distributor");
            require(isRetailer[newOwner], "New owner must be retailer");

            _pushTransfer(batchId, msg.sender, newOwner);

            b.currentOwner = newOwner;
            b.stage = Stage.AT_RETAILER;
            b.lastUpdatedAt = block.timestamp;

            emit OwnershipTransferred(batchId, msg.sender, newOwner, block.timestamp);
            return;
        }

        revert("Sender role not allowed to transfer");
    }

    function _pushTransfer(uint256 batchId, address from, address to) internal {
        transferLogs[batchId].push(TransferRecord({
            timestamp: block.timestamp,
            from: from,
            to: to
        }));
    }

    function markAsArrived(uint256 batchId, bool passedInspection) external onlyRetailer {
        require(batchExists[batchId], "Batch not found");
        Batch storage b = batches[batchId];

        require(b.currentOwner == msg.sender, "Not current owner");
        require(b.stage == Stage.AT_RETAILER, "Not at retailer stage");
        require(!b.arrived, "Already finalized");

        b.arrived = true;
        b.passedInspection = passedInspection;
        b.stage = passedInspection ? Stage.COMPLETED_PASS : Stage.COMPLETED_FAIL;
        b.lastUpdatedAt = block.timestamp;

        emit ArrivedAndInspected(batchId, msg.sender, passedInspection, block.timestamp);
    }

    // Customer / Public View Functions
    function getBatch(uint256 batchId) public view returns (Batch memory) {
        require(batchExists[batchId], "Batch not found");
        return batches[batchId];
    }

    function getSensorLogs(uint256 batchId) public view returns (SensorData[] memory) {
        require(batchExists[batchId], "Batch not found");
        return sensorLogs[batchId];
    }

    function getTransferLogs(uint256 batchId) public view returns (TransferRecord[] memory) {
        require(batchExists[batchId], "Batch not found");
        return transferLogs[batchId];
    }

    /// Doc-required: customers can view history + measurements
    /// We return Batch + transfers + sensor logs (enough for QR consumer screen).
    function getBatchHistory(uint256 batchId)
        public
        view
        returns (
            Batch memory batch,
            TransferRecord[] memory transfers,
            SensorData[] memory sensors
        )
    {
        require(batchExists[batchId], "Batch not found");
        batch = batches[batchId];
        transfers = transferLogs[batchId];
        sensors = sensorLogs[batchId];
    }

    // Useful listing helpers (for UI later)
    function getAllBatchIds() external view returns (uint256[] memory) {
        return allBatchIds;
    }

    /// Batches assigned to a transporter (pickup waiting or in transit)
    function getBatchesAssignedTo(address transporter) external view returns (uint256[] memory ids) {
        uint256 n = allBatchIds.length;
        uint256 count = 0;

        for (uint256 i = 0; i < n; i++) {
            Batch storage b = batches[allBatchIds[i]];
            if (b.assignedTransporter == transporter &&
                (b.stage == Stage.READY_FOR_PICKUP || b.stage == Stage.IN_TRANSIT)) {
                count++;
            }
        }

        ids = new uint256[](count);
        uint256 k = 0;

        for (uint256 i = 0; i < n; i++) {
            Batch storage b = batches[allBatchIds[i]];
            if (b.assignedTransporter == transporter &&
                (b.stage == Stage.READY_FOR_PICKUP || b.stage == Stage.IN_TRANSIT)) {
                ids[k++] = b.batchId;
            }
        }
    }
}