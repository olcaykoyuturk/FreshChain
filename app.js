const CONTRACT_ADDRESS = "0x1fc8aBF77339CEee6D165a6F0aBcB6f043197BAe";

const ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
    ],
    name: "acceptPickup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "temperature",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "humidity",
        type: "int256",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
    ],
    name: "addSensorData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "retailer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "passedInspection",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "ArrivedAndInspected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "producer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newTransporter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AssignedTransporterUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "producer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "assignedTransporter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantityKg",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "BatchCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "quantityKg",
        type: "uint256",
      },
    ],
    name: "createBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "quantityKg",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "assignedTransporter",
        type: "address",
      },
    ],
    name: "createBatchAuto",
    outputs: [
      {
        internalType: "uint256",
        name: "newBatchId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    name: "DistributorRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    name: "DistributorRevoked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "passedInspection",
        type: "bool",
      },
    ],
    name: "markAsArrived",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "transporter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "PickupAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "producer",
        type: "address",
      },
    ],
    name: "ProducerRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "producer",
        type: "address",
      },
    ],
    name: "ProducerRevoked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    name: "registerDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "producer",
        type: "address",
      },
    ],
    name: "registerProducer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "retailer",
        type: "address",
      },
    ],
    name: "registerRetailer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "transporter",
        type: "address",
      },
    ],
    name: "registerTransporter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "retailer",
        type: "address",
      },
    ],
    name: "RetailerRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "retailer",
        type: "address",
      },
    ],
    name: "RetailerRevoked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    name: "revokeDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "producer",
        type: "address",
      },
    ],
    name: "revokeProducer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "retailer",
        type: "address",
      },
    ],
    name: "revokeRetailer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "transporter",
        type: "address",
      },
    ],
    name: "revokeTransporter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "transporter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "temperature",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "humidity",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "SensorLogged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "transporter",
        type: "address",
      },
    ],
    name: "TransporterRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "transporter",
        type: "address",
      },
    ],
    name: "TransporterRevoked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newTransporter",
        type: "address",
      },
    ],
    name: "updateAssignedTransporter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllBatchIds",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
    ],
    name: "getBatch",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "batchId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "productName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantityKg",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "producer",
            type: "address",
          },
          {
            internalType: "address",
            name: "assignedTransporter",
            type: "address",
          },
          {
            internalType: "address",
            name: "currentOwner",
            type: "address",
          },
          {
            internalType: "enum FreshChain.Stage",
            name: "stage",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "arrived",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "passedInspection",
            type: "bool",
          },
        ],
        internalType: "struct FreshChain.Batch",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "transporter",
        type: "address",
      },
    ],
    name: "getBatchesAssignedTo",
    outputs: [
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
    ],
    name: "getBatchHistory",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "batchId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "productName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantityKg",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "producer",
            type: "address",
          },
          {
            internalType: "address",
            name: "assignedTransporter",
            type: "address",
          },
          {
            internalType: "address",
            name: "currentOwner",
            type: "address",
          },
          {
            internalType: "enum FreshChain.Stage",
            name: "stage",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "arrived",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "passedInspection",
            type: "bool",
          },
        ],
        internalType: "struct FreshChain.Batch",
        name: "batch",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
        ],
        internalType: "struct FreshChain.TransferRecord[]",
        name: "transfers",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "temperature",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "humidity",
            type: "int256",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
          {
            internalType: "address",
            name: "recordedBy",
            type: "address",
          },
        ],
        internalType: "struct FreshChain.SensorData[]",
        name: "sensors",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
    ],
    name: "getSensorLogs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "temperature",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "humidity",
            type: "int256",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
          {
            internalType: "address",
            name: "recordedBy",
            type: "address",
          },
        ],
        internalType: "struct FreshChain.SensorData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
    ],
    name: "getTransferLogs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
        ],
        internalType: "struct FreshChain.TransferRecord[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isDistributor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isProducer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isRetailer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isTransporter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const CONTRACT_ABI = [
  {
    inputs: [{ internalType: "uint256", name: "batchId", type: "uint256" }],
    name: "acceptPickup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "batchId", type: "uint256" },
      { internalType: "int256", name: "temperature", type: "int256" },
      { internalType: "int256", name: "humidity", type: "int256" },
      { internalType: "string", name: "location", type: "string" },
    ],
    name: "addSensorData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "retailer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "passedInspection",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "ArrivedAndInspected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "producer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newTransporter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AssignedTransporterUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "producer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "assignedTransporter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantityKg",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "BatchCreated",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "batchId", type: "uint256" },
      { internalType: "string", name: "productName", type: "string" },
      { internalType: "uint256", name: "quantityKg", type: "uint256" },
    ],
    name: "createBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "productName", type: "string" },
      { internalType: "uint256", name: "quantityKg", type: "uint256" },
      { internalType: "address", name: "assignedTransporter", type: "address" },
    ],
    name: "createBatchAuto",
    outputs: [{ internalType: "uint256", name: "newBatchId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    name: "DistributorRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    name: "DistributorRevoked",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "batchId", type: "uint256" },
      { internalType: "bool", name: "passedInspection", type: "bool" },
    ],
    name: "markAsArrived",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "transporter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "PickupAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "producer",
        type: "address",
      },
    ],
    name: "ProducerRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "producer",
        type: "address",
      },
    ],
    name: "ProducerRevoked",
    type: "event",
  },
  {
    inputs: [{ internalType: "address", name: "distributor", type: "address" }],
    name: "registerDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "producer", type: "address" }],
    name: "registerProducer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "retailer", type: "address" }],
    name: "registerRetailer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "transporter", type: "address" }],
    name: "registerTransporter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "retailer",
        type: "address",
      },
    ],
    name: "RetailerRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "retailer",
        type: "address",
      },
    ],
    name: "RetailerRevoked",
    type: "event",
  },
  {
    inputs: [{ internalType: "address", name: "distributor", type: "address" }],
    name: "revokeDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "producer", type: "address" }],
    name: "revokeProducer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "retailer", type: "address" }],
    name: "revokeRetailer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "transporter", type: "address" }],
    name: "revokeTransporter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "transporter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "temperature",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "humidity",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "SensorLogged",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "batchId", type: "uint256" },
      { internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "transporter",
        type: "address",
      },
    ],
    name: "TransporterRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "transporter",
        type: "address",
      },
    ],
    name: "TransporterRevoked",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "batchId", type: "uint256" },
      { internalType: "address", name: "newTransporter", type: "address" },
    ],
    name: "updateAssignedTransporter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllBatchIds",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "batchId", type: "uint256" }],
    name: "getBatch",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "batchId", type: "uint256" },
          { internalType: "string", name: "productName", type: "string" },
          { internalType: "uint256", name: "quantityKg", type: "uint256" },
          { internalType: "address", name: "producer", type: "address" },
          {
            internalType: "address",
            name: "assignedTransporter",
            type: "address",
          },
          { internalType: "address", name: "currentOwner", type: "address" },
          {
            internalType: "enum FreshChain.Stage",
            name: "stage",
            type: "uint8",
          },
          { internalType: "uint256", name: "createdAt", type: "uint256" },
          { internalType: "uint256", name: "lastUpdatedAt", type: "uint256" },
          { internalType: "bool", name: "arrived", type: "bool" },
          { internalType: "bool", name: "passedInspection", type: "bool" },
        ],
        internalType: "struct FreshChain.Batch",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "transporter", type: "address" }],
    name: "getBatchesAssignedTo",
    outputs: [{ internalType: "uint256[]", name: "ids", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "batchId", type: "uint256" }],
    name: "getBatchHistory",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "batchId", type: "uint256" },
          { internalType: "string", name: "productName", type: "string" },
          { internalType: "uint256", name: "quantityKg", type: "uint256" },
          { internalType: "address", name: "producer", type: "address" },
          {
            internalType: "address",
            name: "assignedTransporter",
            type: "address",
          },
          { internalType: "address", name: "currentOwner", type: "address" },
          {
            internalType: "enum FreshChain.Stage",
            name: "stage",
            type: "uint8",
          },
          { internalType: "uint256", name: "createdAt", type: "uint256" },
          { internalType: "uint256", name: "lastUpdatedAt", type: "uint256" },
          { internalType: "bool", name: "arrived", type: "bool" },
          { internalType: "bool", name: "passedInspection", type: "bool" },
        ],
        internalType: "struct FreshChain.Batch",
        name: "batch",
        type: "tuple",
      },
      {
        components: [
          { internalType: "uint256", name: "timestamp", type: "uint256" },
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
        ],
        internalType: "struct FreshChain.TransferRecord[]",
        name: "transfers",
        type: "tuple[]",
      },
      {
        components: [
          { internalType: "uint256", name: "timestamp", type: "uint256" },
          { internalType: "int256", name: "temperature", type: "int256" },
          { internalType: "int256", name: "humidity", type: "int256" },
          { internalType: "string", name: "location", type: "string" },
          { internalType: "address", name: "recordedBy", type: "address" },
        ],
        internalType: "struct FreshChain.SensorData[]",
        name: "sensors",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "batchId", type: "uint256" }],
    name: "getSensorLogs",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "timestamp", type: "uint256" },
          { internalType: "int256", name: "temperature", type: "int256" },
          { internalType: "int256", name: "humidity", type: "int256" },
          { internalType: "string", name: "location", type: "string" },
          { internalType: "address", name: "recordedBy", type: "address" },
        ],
        internalType: "struct FreshChain.SensorData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "batchId", type: "uint256" }],
    name: "getTransferLogs",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "timestamp", type: "uint256" },
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
        ],
        internalType: "struct FreshChain.TransferRecord[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "isDistributor",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "isProducer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "isRetailer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "isTransporter",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];

/** ========= Global State ========= */
let provider = null;      // MetaMask provider (write + read)
let signer = null;
let contract = null;      // write contract (signer connected)

let readProvider = null;  // public read-only RPC provider
let readContract = null;  // public read-only contract

let userAddress = null;
let chainId = null;

const DEFAULT_PUBLIC_RPC = "https://ethereum-sepolia.publicnode.com";
const RPC_STORAGE_KEY = "freshchain_public_rpc";

function getPublicRpcUrl() {
  try {
    const v = (localStorage.getItem(RPC_STORAGE_KEY) || "").trim();
    return v || DEFAULT_PUBLIC_RPC;
  } catch (_) {
    return DEFAULT_PUBLIC_RPC;
  }
}

function getViewContract() {
  return contract || readContract || null;
}

function getLogProvider() {
  return provider || readProvider || null;
}

function initReadOnly() {
  if (typeof ethers === "undefined") return;
  const url = getPublicRpcUrl();
  try {
    readProvider = new ethers.providers.JsonRpcProvider(url);
    readContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, readProvider);
    if (typeof $ === "function" && $("sRpc")) $("sRpc").value = url;
  } catch (e) {
    console.warn("Read-only init failed", e);
    readProvider = null;
    readContract = null;
  }
}
let roles = {
  admin: false,
  producer: false,
  transporter: false,
  distributor: false,
  retailer: false,
};

const StageMap = {
  0: "NONE",
  1: "READY_FOR_PICKUP",
  2: "IN_TRANSIT",
  3: "AT_DISTRIBUTOR",
  4: "AT_RETAILER",
  5: "COMPLETED_PASS",
  6: "COMPLETED_FAIL",
};

/** ========= Stage Guards ========= */
const STAGE = {
  NONE: 0,
  READY_FOR_PICKUP: 1,
  IN_TRANSIT: 2,
  AT_DISTRIBUTOR: 3,
  AT_RETAILER: 4,
  COMPLETED_PASS: 5,
  COMPLETED_FAIL: 6,
};

async function getBatchStage(batchId) {
  const vc = getViewContract();
  if (!vc) return null;
  try {
    const b = await vc.getBatch(batchId);
    return Number(b.stage);
  } catch (e) {
    return null;
  }
}

function setDisabled(id, disabled) {
  const el = $(id);
  if (el) el.disabled = !!disabled;
}

async function refreshDistributorActionLocks() {
  if (!contract || typeof ethers === "undefined") {
    setDisabled("btnToRetailer", true);
    return;
  }
  const idStr = $("dBatchId")?.value?.trim();
  if (!idStr) {
    setDisabled("btnToRetailer", true);
    return;
  }
  const batchId = ethers.BigNumber.from(idStr);
  const stage = await getBatchStage(batchId);
  if (stage === null) {
    setDisabled("btnToRetailer", false);
    return;
  }
  const stageName = StageMap[stage] || String(stage);
  setDisabled("btnToRetailer", stageName !== "AT_DISTRIBUTOR");
}

async function refreshRetailerActionLocks() {
  if (!contract || typeof ethers === "undefined") {
    setDisabled("btnFinalize", true);
    return;
  }
  const idStr = $("rBatchId")?.value?.trim();
  if (!idStr) {
    setDisabled("btnFinalize", true);
    return;
  }
  const batchId = ethers.BigNumber.from(idStr);
  const stage = await getBatchStage(batchId);
  if (stage === null) {
    setDisabled("btnFinalize", false);
    return;
  }
  const stageName = StageMap[stage] || String(stage);
  setDisabled("btnFinalize", stageName !== "AT_RETAILER");
}

async function refreshTransporterActionLocks() {
  if (!contract || typeof ethers === "undefined") {
    setDisabled("btnAcceptPickup", true);
    setDisabled("btnAddSensor", true);
    setDisabled("btnToDistributor", true);
    return;
  }
  const idStr = $("tBatchId")?.value?.trim();
  if (!idStr) {
    setDisabled("btnAcceptPickup", true);
    setDisabled("btnAddSensor", true);
    setDisabled("btnToDistributor", true);
    return;
  }
  const batchId = ethers.BigNumber.from(idStr);
  const stage = await getBatchStage(batchId);

  if (stage === null) {
    // if cannot read, don't block UI (contract will still enforce)
    setDisabled("btnAcceptPickup", false);
    setDisabled("btnAddSensor", false);
    setDisabled("btnToDistributor", false);
    return;
  }

  const stageName = StageMap[stage] || String(stage);
  setDisabled("btnAcceptPickup", stageName !== "READY_FOR_PICKUP");
  setDisabled("btnAddSensor", stageName !== "IN_TRANSIT");
  setDisabled("btnToDistributor", stageName !== "IN_TRANSIT");
}

/** ========= UI Helpers ========= */
const $ = (id) => document.getElementById(id);
const on = (id, ev, fn) => {
  const el = $(id);
  if (el) el.addEventListener(ev, fn);
};

function shortAddr(a) {
  if (!a) return "—";
  return a.slice(0, 6) + "…" + a.slice(-4);
}

function fmtTime(ts) {
  try {
    const d = new Date(Number(ts) * 1000);
    return d.toLocaleString("tr-TR");
  } catch (e) {
    return String(ts);
  }
}

function toast(title, msg) {
  const wrap = $("toasts");
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<div class="t1">${title}</div><div class="t2">${msg}</div>`;
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(6px)";
    setTimeout(() => el.remove(), 450);
  }, 4500);
}

function setActiveNav(page) {
  document
    .querySelectorAll(".nav .item")
    .forEach((i) => i.classList.remove("active"));
  const item = document.querySelector(`.nav .item[data-page="${page}"]`);
  if (item) item.classList.add("active");
}

function showPage(page) {
  document.querySelectorAll(".page").forEach((p) => (p.style.display = "none"));
  const el = $("page-" + page);
  if (el) el.style.display = "block";
  setActiveNav(page);
}

function roleDotClass() {
  $("roleDot").className = "role-dot";
  if (roles.admin) $("roleDot").classList.add("admin");
  else if (roles.producer) $("roleDot").classList.add("producer");
  else if (roles.transporter) $("roleDot").classList.add("transporter");
  else if (roles.distributor) $("roleDot").classList.add("distributor");
  else if (roles.retailer) $("roleDot").classList.add("retailer");
}

function roleLabel() {
  if (!userAddress) return "Public";
  if (roles.admin) return "Admin";
  const list = [];
  if (roles.producer) list.push("Producer");
  if (roles.transporter) list.push("Transporter");
  if (roles.distributor) list.push("Distributor");
  if (roles.retailer) list.push("Retailer");
  return list.length ? list.join(" + ") : "No Role";
}

function updateNavLocks() {
  document.querySelectorAll(".nav .item[data-need]").forEach((item) => {
    const need = item.getAttribute("data-need");
    let ok = false;
    if (need === "admin") ok = roles.admin;
    if (need === "producer") ok = roles.producer;
    if (need === "transporter") ok = roles.transporter;
    if (need === "distributor") ok = roles.distributor;
    if (need === "retailer") ok = roles.retailer;

    // Require PIN too
    const pinOk = isPinUnlocked();

    if (!userAddress || !pinOk || !ok) {
      item.classList.add("disabled");
    } else {
      item.classList.remove("disabled");
    }
  });
}

/** ========= PIN (local-only) ========= */
function pinKey() {
  if (!userAddress || !chainId) return null;
  return `freshchain_pin_${chainId}_${userAddress.toLowerCase()}`;
}
function hashPin(pin) {
  // simple browser hash (not crypto-strong, but OK for UI gate)
  const s = "freshchain:" + pin;
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return String(h);
}
function isPinUnlocked() {
  const k = pinKey();
  if (!k) return false;
  return sessionStorage.getItem(k + "_unlocked") === "1";
}
function setPinUnlocked(v) {
  const k = pinKey();
  if (!k) return;
  sessionStorage.setItem(k + "_unlocked", v ? "1" : "0");
  $("btnLock").style.display = userAddress ? "inline-flex" : "none";
  $("pinStatus").textContent = v ? "✅ Unlocked" : "🔒 Locked";
}
function hasSavedPin() {
  const k = pinKey();
  if (!k) return false;
  return !!localStorage.getItem(k);
}
function savePin(pin) {
  const k = pinKey();
  localStorage.setItem(k, hashPin(pin));
}
function verifyPin(pin) {
  const k = pinKey();
  const stored = localStorage.getItem(k);
  if (!stored) return false;
  return stored === hashPin(pin);
}
function resetPin() {
  const k = pinKey();
  if (!k) return;
  localStorage.removeItem(k);
  sessionStorage.removeItem(k + "_unlocked");
}

/** ========= Wallet / Contract ========= */
async function connectWallet() {
  if (typeof ethers === "undefined") {
    toast(
      "Ethers yüklenemedi",
      "CDN engellenmiş olabilir. Sayfayı yenile ve tekrar dene. Eğer hala olursa farklı internet veya VPN dene."
    );
    return;
  }

  if (!window.ethereum) {
    toast("MetaMask yok", "Lütfen MetaMask kur ve tekrar dene.");
    return;
  }
  provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  userAddress = await signer.getAddress();

  const net = await provider.getNetwork();
  chainId = net.chainId;

  contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  $("addrPill").style.display = "inline-flex";
  $("addrShort").textContent = shortAddr(userAddress);
  $("btnConnect").textContent = "✅ Connected";
  $("btnLock").style.display = "inline-flex";
  $("netName").textContent = `${net.name} (chainId=${net.chainId})`;
  $("contractShort").textContent = shortAddr(CONTRACT_ADDRESS);
  $("sContract").value = CONTRACT_ADDRESS;
  // Public read-only (no wallet) init
  initReadOnly();

  // PIN flow
  setPinUnlocked(false);
  openPinModal();

  await refreshRoles();
  await refreshFeed();
}

async function refreshRoles() {
  if (!contract || !userAddress) return;
  try {
    const owner = await contract.owner();
    roles.admin = owner.toLowerCase() === userAddress.toLowerCase();
    roles.producer = await contract.isProducer(userAddress);
    roles.transporter = await contract.isTransporter(userAddress);
    roles.distributor = await contract.isDistributor(userAddress);
    roles.retailer = await contract.isRetailer(userAddress);

    $("roleLabel").textContent = roleLabel();
    roleDotClass();
    updateNavLocks();
  } catch (e) {
    console.error(e);
    toast("Role okunamadı", e?.message || String(e));
  }
}

function openPinModal() {
  $("pinModal").style.display = "grid";
  $("pinInput").value = "";
  if (hasSavedPin()) {
    $("pinHelp").textContent = "Admin işlemleri için PIN gir.";
    $("pinHint").textContent =
      "Bu cihazda kayıtlı PIN ile doğrulama yapılacak.";
    $("pinStatus").textContent = "🔒 Locked";
  } else {
    $("pinHelp").textContent =
      "Admin için ilk giriş: PIN belirle (4-8 haneli).";
    $("pinHint").textContent =
      "PIN sadece bu cihazda saklanır (localStorage). Blockchain'e yazılmaz.";
    $("pinStatus").textContent = "🔓 Not set";
  }
}
function closePinModal() {
  $("pinModal").style.display = "none";
}
async function pinContinue() {
  const pin = $("pinInput").value.trim();
  if (pin.length < 4 || pin.length > 8) {
    toast("PIN", "PIN 4-8 haneli olmalı.");
    return;
  }
  if (hasSavedPin()) {
    if (!verifyPin(pin)) {
      toast("PIN", "Yanlış PIN.");
      return;
    }
  } else {
    savePin(pin);
  }
  setPinUnlocked(true);
  closePinModal();
  updateNavLocks();
  toast("Giriş başarılı", "Menüler rolüne göre açıldı.");
}

function lockNow() {
  setPinUnlocked(false);
  updateNavLocks();
  openPinModal();
}

function logoutNow() {
  userAddress = null;
  signer = null;
  contract = null;
  provider = null;
  roles = {
    admin: false,
    producer: false,
    transporter: false,
    distributor: false,
    retailer: false,
  };

  $("addrPill").style.display = "none";
  $("btnConnect").textContent = "🔌 Connect Wallet";
  $("btnLogout").style.display = "none";
  $("btnLock").style.display = "none";
  $("roleLabel").textContent = "Public";
  roleDotClass();
  $("pinStatus").textContent = "—";

  showPage("query");
  updateNavLocks();

  try {
    const k = pinKey();
    if (k) sessionStorage.removeItem(k + "_unlocked");
  } catch (_) { }

  toast("Logged out", "Wallet bağlantısı kapatıldı. Sayfa yenileniyor...");
  setTimeout(() => location.reload(), 600);
}

/** ========= Incoming scan (debug) =========
 * If contract.getBatchesAssignedTo(addr) returns [], we can still show incoming loads by scanning all batches
 * and filtering currentOwner == userAddress.
 */
async function loadIncomingByOwner(listEl, onSelect, titleForEmpty) {
  if (!listEl) return;
  listEl.innerHTML = "";
  const addr = String(userAddress || "").toLowerCase();
  console.log("[Incoming] start scan currentOwner==", addr);

  try {
    const ids = await contract.getAllBatchIds();
    console.log("[Incoming] getAllBatchIds =>", ids);
    let count = 0;

    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      let b;
      try {
        b = await contract.getBatch(id);
      } catch (e) {
        console.warn(
          "[Incoming] getBatch failed for",
          id?.toString?.() || id,
          e
        );
        continue;
      }

      // Ethers tuple: supports both named and index access.
      const batchId = (b.batchId ?? b[0])?.toString?.() ?? String(b[0]);
      const productName = b.productName ?? b[1] ?? "";
      const quantityKg = (b.quantityKg ?? b[2])?.toString?.() ?? String(b[2]);
      const producer = b.producer ?? b[3] ?? "";
      const assignedTransporter = b.assignedTransporter ?? b[4] ?? "";
      const currentOwner = b.currentOwner ?? b[5] ?? "";
      const stageN = Number((b.stage ?? b[6])?.toString?.() ?? b[6]);

      if (i === 0) {
        console.log("[Incoming] sample batch keys:", Object.keys(b));
        console.log("[Incoming] sample batch tuple:", b);
      }

      const ownerAddr = String(currentOwner || "").toLowerCase();
      if (ownerAddr !== addr) continue;

      const stageName = StageMap[stageN] || String(stageN);
      const subtitle = `#${batchId} • ${productName} • ${quantityKg}kg • stage=${stageName} • producer=${shortAddr(
        producer
      )} • assignedT=${shortAddr(assignedTransporter)} • owner=${shortAddr(
        currentOwner
      )}`;
      const itemEl = renderTimelineItem(
        "Incoming",
        subtitle,
        "Click to select"
      );
      itemEl.style.cursor = "pointer";
      itemEl.addEventListener("click", () => onSelect({ batchId, stageN }));
      listEl.appendChild(itemEl);
      count++;
    }

    console.log("[Incoming] matched count =", count);
    if (count === 0) {
      listEl.appendChild(
        renderTimelineItem("No incoming batches", titleForEmpty, "")
      );
      toast("Incoming", "0 match. Console'a bak: currentOwner vs wallet.");
    } else {
      toast("Incoming", count + " batch bulundu.");
    }
  } catch (e) {
    console.error("[Incoming] fatal", e);
    listEl.appendChild(
      renderTimelineItem("Error", e?.reason || e?.message || String(e), "")
    );
  }
}

/** ========= Feed & Timeline ========= */
function iconForType(t) {
  if (t === "BatchCreated") return "🧑‍🌾";
  if (t === "PickupAccepted") return "✅";
  if (t === "SensorLogged") return "🌡️";
  if (t === "OwnershipTransferred") return "🔁";
  if (t === "ArrivedAndInspected") return "🛒";
  return "•";
}

function renderTimelineItem(title, subtitle, right) {
  const el = document.createElement("div");
  el.className = "t-item";
  el.innerHTML = `
    <div class="t-ic">${iconForType(title)}</div>
    <div class="t-main">
      <div class="t-top">
        <div>
          <div style="font-weight:850;">${title}</div>
          <div class="small muted" style="margin-top:3px;">${subtitle}</div>
        </div>
        <div class="small mono muted">${right || ""}</div>
      </div>
    </div>`;
  return el;
}

async function refreshFeed() {
  const feed = $("feed");
  feed.innerHTML = "";

  const lp = getLogProvider();
  const vc = getViewContract();

  if (!lp || !vc) {
    feed.appendChild(
      renderTimelineItem("Connect Wallet", "Global feed için wallet bağla.", "")
    );
    $("feedRange").textContent = "—";
    return;
  }

  try {
    const iface = new ethers.utils.Interface(CONTRACT_ABI);
    const latest = await lp.getBlockNumber();
    // Home KPIs
    try {
      $("homeKpiLastBlock").textContent = String(latest);
    } catch (_) { }
    try {
      $("homeKpiNet").textContent = $("netName")?.textContent || "—";
    } catch (_) { }
    const fromBlock = Math.max(0, latest - 50000); // adjust for your chain
    $("feedRange").textContent = `${fromBlock} → ${latest}`;

    // Pull logs for key events
    const topics = [
      iface.getEventTopic("BatchCreated"),
      iface.getEventTopic("PickupAccepted"),
      iface.getEventTopic("SensorLogged"),
      iface.getEventTopic("OwnershipTransferred"),
      iface.getEventTopic("ArrivedAndInspected"),
    ];

    const logs = await lp.getLogs({
      address: CONTRACT_ADDRESS,
      fromBlock,
      toBlock: latest,
      topics: [topics], // OR on first topic
    });

    // Sort newest first
    logs.sort(
      (a, b) => b.blockNumber - a.blockNumber || b.logIndex - a.logIndex
    );

    const take = logs.slice(0, 25);

    // Home KPIs (counts)
    try {
      if (contract) {
        const ids = await vc.getAllBatchIds();
        $("homeKpiBatches").textContent = String(ids.length);
        let pass = 0;
        const limit = Math.min(ids.length, 80); // prevent heavy UI on big chains
        for (let i = 0; i < limit; i++) {
          const b = await vc.getBatch(ids[i]);
          if (Number(b.stage) === STAGE.COMPLETED_PASS) pass++;
        }
        $("homeKpiOnSale").textContent =
          ids.length > 80 ? pass + "+" : String(pass);
      } else {
        $("homeKpiBatches").textContent = "—";
        $("homeKpiOnSale").textContent = "—";
      }
    } catch (_) { }
    for (const lg of take) {
      let parsed;
      try {
        parsed = iface.parseLog(lg);
      } catch (_) {
        continue;
      }
      const bn = lg.blockNumber;
      const event = parsed.name;
      const args = parsed.args;

      let subtitle = "";
      if (event === "BatchCreated") {
        subtitle = `Batch #${args.batchId} • ${args.productName} • ${args.quantityKg
          }kg • Producer ${shortAddr(args.producer)} • Assigned ${shortAddr(
            args.assignedTransporter
          )}`;
      } else if (event === "PickupAccepted") {
        subtitle = `Batch #${args.batchId} • Transporter ${shortAddr(
          args.transporter
        )}`;
      } else if (event === "SensorLogged") {
        subtitle = `Batch #${args.batchId} • ${args.temperature}°C • ${args.humidity
          }% • ${args.location} • ${shortAddr(args.transporter)}`;
      } else if (event === "OwnershipTransferred") {
        subtitle = `Batch #${args.batchId} • ${shortAddr(
          args.from
        )} → ${shortAddr(args.to)}`;
      } else if (event === "ArrivedAndInspected") {
        subtitle = `Batch #${args.batchId} • Retailer ${shortAddr(
          args.retailer
        )} • Passed=${args.passedInspection}`;
      }

      feed.appendChild(renderTimelineItem(event, subtitle, `#${bn}`));
    }

    if (take.length === 0) {
      feed.appendChild(
        renderTimelineItem("No events yet", "Bu kontratta henüz event yok.", "")
      );
    }
  } catch (e) {
    console.error(e);
    feed.appendChild(
      renderTimelineItem("Feed error", e?.message || String(e), "")
    );
  }
}

async function queryBatch() {
  const vc = getViewContract();
  if (typeof ethers === "undefined" || !vc) {
    toast("Bağlantı yok", "Okuma için RPC gerekli. Settings > Public RPC URL kısmından doğru RPC gir.");
    return;
  }
  const idStr = $("qBatchId").value.trim();
  if (!idStr) return;
  const batchId = ethers.BigNumber.from(idStr);

  try {
    const res = await vc.getBatchHistory(batchId);
    const batch = res.batch;
    const transfers = res.transfers;
    const sensors = res.sensors;

    $("batchResult").style.display = "block";
    $("batchSummaryLine").textContent = `#${batch.batchId} • ${batch.productName
      } • Producer ${shortAddr(batch.producer)} • Assigned ${shortAddr(
        batch.assignedTransporter
      )} • Owner ${shortAddr(batch.currentOwner)}`;

    $("kpiKg").textContent = String(batch.quantityKg);
    $("stageText").textContent =
      StageMap[Number(batch.stage)] || String(batch.stage);
    $("inspText").textContent = batch.arrived
      ? batch.passedInspection
        ? "PASSED"
        : "FAILED"
      : "—";

    // Sensor min/avg/max (UI computed)
    const temps = sensors.map((s) => Number(s.temperature));
    const hums = sensors.map((s) => Number(s.humidity));
    const stat = (arr) => {
      if (!arr.length) return null;
      const min = Math.min(...arr);
      const max = Math.max(...arr);
      const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
      return { min, max, avg };
    };
    const ts = stat(temps);
    const hs = stat(hums);

    $("kpiTemp").textContent = ts
      ? `${ts.min} / ${ts.avg.toFixed(1)} / ${ts.max}`
      : "—";
    $("kpiHum").textContent = hs
      ? `${hs.min} / ${hs.avg.toFixed(1)} / ${hs.max}`
      : "—";
    $("kpiLogs").textContent = `${transfers.length} / ${sensors.length}`;

    // Timeline
    const tl = $("timeline");
    tl.innerHTML = "";

    tl.appendChild(
      renderTimelineItem(
        "BatchCreated",
        `Üretildi • ${batch.productName} • ${batch.quantityKg
        }kg • Producer ${shortAddr(batch.producer)} • Assigned ${shortAddr(
          batch.assignedTransporter
        )}`,
        fmtTime(batch.createdAt)
      )
    );

    for (const tr of transfers) {
      tl.appendChild(
        renderTimelineItem(
          "OwnershipTransferred",
          `${shortAddr(tr.from)} → ${shortAddr(tr.to)}`,
          fmtTime(tr.timestamp)
        )
      );
    }
    for (const s of sensors) {
      tl.appendChild(
        renderTimelineItem(
          "SensorLogged",
          `${s.temperature}°C • ${s.humidity}% • ${s.location} • by ${shortAddr(
            s.recordedBy
          )}`,
          fmtTime(s.timestamp)
        )
      );
    }

    if (batch.arrived) {
      tl.appendChild(
        renderTimelineItem(
          "ArrivedAndInspected",
          `Retailer kontrolü • Passed=${batch.passedInspection}`,
          fmtTime(batch.lastUpdatedAt)
        )
      );
    }
  } catch (e) {
    console.error(e);
    toast("Query failed", e?.message || String(e));
  }
}

/** ========= Actions ========= */
async function ensureUnlockedAndRole(need) {
  if (!userAddress) {
    toast("Wallet", "Önce Connect Wallet.");
    return false;
  }
  if (!isPinUnlocked()) {
    toast("PIN", "Önce PIN doğrula.");
    openPinModal();
    return false;
  }
  if (need === "admin" && !roles.admin)
    return toast("Yetki", "Admin değilsin."), false;
  if (need === "producer" && !roles.producer)
    return toast("Yetki", "Producer değilsin."), false;
  if (need === "transporter" && !roles.transporter)
    return toast("Yetki", "Transporter değilsin."), false;
  if (need === "distributor" && !roles.distributor)
    return toast("Yetki", "Distributor değilsin."), false;
  if (need === "retailer" && !roles.retailer)
    return toast("Yetki", "Retailer değilsin."), false;
  return true;
}

async function txWrap(label, fn) {
  try {
    const tx = await fn();
    toast(label, `Tx gönderildi: ${tx.hash}`);
    await tx.wait();
    toast(label, "✅ Onaylandı");
    await refreshRoles();
    await refreshFeed();
    return true;
  } catch (e) {
    console.error(e);
    toast(label + " failed", e?.data?.message || e?.message || String(e));
    return false;
  }
}

async function producerCreate() {
  if (!(await ensureUnlockedAndRole("producer"))) return;
  const name = $("pName").value.trim();
  const kgStr = $("pKg").value.trim();
  const tr = $("pTransporter").value.trim();

  if (!name || !kgStr || !tr)
    return toast("Create Batch", "Tüm alanları doldur."), null;
  const kg = ethers.BigNumber.from(kgStr);

  $("pCreateOut").textContent = "Tx gönderiliyor...";
  const ok = await txWrap("CreateBatchAuto", () =>
    contract.createBatchAuto(name, kg, tr)
  );
  $("pCreateOut").textContent = ok
    ? "✅ Oluşturuldu (event/loglardan ID'yi görebilirsin)"
    : "❌ Hata";
}

async function producerUpdateTransporter() {
  if (!(await ensureUnlockedAndRole("producer"))) return;
  const idStr = $("pUpBatchId").value.trim();
  const tr = $("pUpTransporter").value.trim();
  if (!idStr || !tr)
    return toast("Update", "BatchId + new transporter gir."), null;
  const batchId = ethers.BigNumber.from(idStr);
  await txWrap("UpdateAssignedTransporter", () =>
    contract.updateAssignedTransporter(batchId, tr)
  );
}

async function loadAssignedDistributor() {
  if (!(await ensureUnlockedAndRole("distributor"))) return;
  const list = $("dAssignedList");
  if (!list) return;

  list.innerHTML = "";
  const addr = String(userAddress || "").toLowerCase();

  console.log(
    "[DISTRIBUTOR][Owned] scan start owner==",
    addr,
    "stage=AT_DISTRIBUTOR(3)"
  );

  let ids = [];
  try {
    ids = await contract.getAllBatchIds();
  } catch (e) {
    console.error("[DISTRIBUTOR][Owned] getAllBatchIds failed", e);
    list.innerHTML = `<div class="small muted">Batch ID listesi alınamadı.</div>`;
    return;
  }

  let count = 0;
  for (const id of ids) {
    let b;
    try {
      b = await contract.getBatch(id);
    } catch (e) {
      console.warn(
        "[DISTRIBUTOR][Owned] getBatch failed id=",
        id?.toString?.() || id,
        e
      );
      continue;
    }

    const batchId = Number((b.batchId ?? b[0]).toString());
    const productName = (b.productName ?? b[1]) || "—";
    const quantityKg = Number((b.quantityKg ?? b[2]).toString());
    const producer = (b.producer ?? b[3]) || "";
    const assignedTransporter = (b.assignedTransporter ?? b[4]) || "";
    const currentOwner = (b.currentOwner ?? b[5]) || "";
    const stageN = Number((b.stage ?? b[6]).toString());

    const ownerAddr = String(currentOwner || "").toLowerCase();
    if (ownerAddr !== addr) continue;
    if (stageN !== 3) continue; // AT_DISTRIBUTOR

    const stageName = StageMap[stageN] || String(stageN);
    const subtitle = `#${batchId} • ${productName} • ${quantityKg}kg • stage=${stageName} • producer=${shortAddr(
      producer
    )} • assignedT=${shortAddr(assignedTransporter)}`;

    const itemEl = renderTimelineItem("Owned", subtitle, "Click to select");
    itemEl.style.cursor = "pointer";
    itemEl.addEventListener("click", async () => {
      $("dBatchId").value = String(batchId);
      if ($("dSelectedBadge"))
        $("dSelectedBadge").textContent = String(batchId);
      await refreshDistributorActionLocks();
      toast("Selected", "Batch #" + batchId + " seçildi.");
    });

    list.appendChild(itemEl);
    count++;
  }

  if (!count) {
    list.innerHTML = `<div class="small muted">Bu cüzdana ait (owner) ve <b>AT_DISTRIBUTOR</b> aşamasında batch yok.</div>`;
  } else {
    console.log("[DISTRIBUTOR][Owned] found", count, "batches");
  }
}

async function loadAssignedRetailer() {
  if (!(await ensureUnlockedAndRole("retailer"))) return;
  const list = $("rAssignedList");
  if (!list) return;

  list.innerHTML = "";
  const addr = String(userAddress || "").toLowerCase();

  console.log(
    "[RETAILER][Owned] scan start owner==",
    addr,
    "stage=AT_RETAILER(4)"
  );

  let ids = [];
  try {
    ids = await contract.getAllBatchIds();
  } catch (e) {
    console.error("[RETAILER][Owned] getAllBatchIds failed", e);
    list.innerHTML = `<div class="small muted">Batch ID listesi alınamadı.</div>`;
    return;
  }

  let count = 0;
  for (const id of ids) {
    let b;
    try {
      b = await contract.getBatch(id);
    } catch (e) {
      console.warn(
        "[RETAILER][Owned] getBatch failed id=",
        id?.toString?.() || id,
        e
      );
      continue;
    }

    const batchId = Number((b.batchId ?? b[0]).toString());
    const productName = (b.productName ?? b[1]) || "—";
    const quantityKg = Number((b.quantityKg ?? b[2]).toString());
    const producer = (b.producer ?? b[3]) || "";
    const assignedTransporter = (b.assignedTransporter ?? b[4]) || "";
    const currentOwner = (b.currentOwner ?? b[5]) || "";
    const stageN = Number((b.stage ?? b[6]).toString());

    const ownerAddr = String(currentOwner || "").toLowerCase();
    if (ownerAddr !== addr) continue;
    if (stageN !== 4) continue; // AT_RETAILER

    const stageName = StageMap[stageN] || String(stageN);
    const subtitle = `#${batchId} • ${productName} • ${quantityKg}kg • stage=${stageName} • producer=${shortAddr(
      producer
    )} • assignedT=${shortAddr(assignedTransporter)}`;

    const itemEl = renderTimelineItem("Owned", subtitle, "Click to select");
    itemEl.style.cursor = "pointer";
    itemEl.addEventListener("click", async () => {
      $("rBatchId").value = String(batchId);
      if ($("rSelectedBadge"))
        $("rSelectedBadge").textContent = String(batchId);
      await refreshRetailerActionLocks();
      toast("Selected", "Batch #" + batchId + " seçildi.");
    });

    list.appendChild(itemEl);
    count++;
  }

  if (!count) {
    list.innerHTML = `<div class="small muted">Bu cüzdana ait (owner) ve <b>AT_RETAILER</b> aşamasında batch yok.</div>`;
  } else {
    console.log("[RETAILER][Owned] found", count, "batches");
  }
}

async function loadAssigned() {
  if (!(await ensureUnlockedAndRole("transporter"))) return;
  const list = $("assignedList");
  list.innerHTML = "";
  try {
    const ids = await contract.getBatchesAssignedTo(userAddress);
    if (!ids.length) {
      list.appendChild(
        renderTimelineItem("No assigned batches", "Şu an atanan batch yok.", "")
      );
      return;
    }
    for (const id of ids) {
      const b = await vc.getBatch(id);
      const stage = StageMap[Number(b.stage)] || String(b.stage);
      const subtitle = `#${b.batchId} • ${b.productName} • ${b.quantityKg
        }kg • stage=${stage} • producer=${shortAddr(b.producer)}`;
      const itemEl = renderTimelineItem(
        "Assigned",
        subtitle,
        "Click to select"
      );
      itemEl.style.cursor = "pointer";
      itemEl.addEventListener("click", async () => {
        $("tBatchId").value = String(b.batchId);
        if ($("tSelectedBadge"))
          $("tSelectedBadge").textContent = String(b.batchId);
        await refreshTransporterActionLocks();
        toast("Selected", "Batch #" + b.batchId + " seçildi.");
        const actionsTop = document.querySelector("#page-transporter");
        if (actionsTop)
          actionsTop.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      list.appendChild(itemEl);
    }
  } catch (e) {
    console.error(e);
    list.appendChild(
      renderTimelineItem("Load error", e?.message || String(e), "")
    );
  }
}

async function acceptPickup() {
  if (!(await ensureUnlockedAndRole("transporter"))) return;
  const idStr = $("tBatchId").value.trim();
  if (!idStr) return toast("Pickup", "BatchId gir."), null;
  const batchId = ethers.BigNumber.from(idStr);
  await txWrap("AcceptPickup", () => contract.acceptPickup(batchId));
  await refreshTransporterActionLocks();
}

async function addSensor() {
  if (!(await ensureUnlockedAndRole("transporter"))) return;
  const idStr = $("tBatchId").value.trim();
  const tempStr = $("tTemp").value.trim();
  const humStr = $("tHum").value.trim();
  const loc = $("tLoc").value.trim();
  if (!idStr || !tempStr || !humStr || !loc)
    return toast("Sensor", "BatchId + temp + hum + location gir."), null;
  const batchId = ethers.BigNumber.from(idStr);

  // UI rule: must accept pickup first
  const stage = await getBatchStage(batchId);
  const stageName = stage === null ? null : StageMap[stage] || String(stage);
  if (stageName === "READY_FOR_PICKUP") {
    toast(
      "Sensor",
      "Önce ✅ Accept Pickup yapmalısın. (Stage: READY_FOR_PICKUP)"
    );
    await refreshTransporterActionLocks();
    return;
  }
  if (stageName !== null && stageName !== "IN_TRANSIT") {
    toast(
      "Sensor",
      "Sensör sadece taşıma sırasında eklenebilir. (Stage: " + stageName + ")"
    );
    await refreshTransporterActionLocks();
    return;
  }

  const temp = ethers.BigNumber.from(tempStr);
  const hum = ethers.BigNumber.from(humStr);
  await txWrap("AddSensorData", () =>
    contract.addSensorData(batchId, temp, hum, loc)
  );
}

async function toDistributor() {
  if (!(await ensureUnlockedAndRole("transporter"))) return;
  const idStr = $("tBatchId").value.trim();
  const dst = $("tDistributor").value.trim();
  if (!idStr || !dst)
    return toast("Transfer", "BatchId + distributor address gir."), null;
  const batchId = ethers.BigNumber.from(idStr);

  // UI rule: must accept pickup first
  const stage = await getBatchStage(batchId);
  const stageName = stage === null ? null : StageMap[stage] || String(stage);
  if (stageName === "READY_FOR_PICKUP") {
    toast(
      "Transfer",
      "Önce ✅ Accept Pickup yapmalısın. (Stage: READY_FOR_PICKUP)"
    );
    await refreshTransporterActionLocks();
    return;
  }
  if (stageName !== null && stageName !== "IN_TRANSIT") {
    toast(
      "Transfer",
      "Transfer sadece taşıma sırasında yapılabilir. (Stage: " + stageName + ")"
    );
    await refreshTransporterActionLocks();
    return;
  }

  const ok = await txWrap("TransferOwnership", () =>
    contract.transferOwnership(batchId, dst)
  );
  if (ok) {
    await refreshFeed();
    await loadAssigned(); // transporter list should shrink after transfer
  }
}

async function toRetailer() {
  if (!(await ensureUnlockedAndRole("distributor"))) return;
  const idStr = $("dBatchId").value.trim();
  const dst = $("dRetailer").value.trim();
  if (!idStr || !dst)
    return toast("Transfer", "BatchId + retailer address gir."), null;

  const batchId = ethers.BigNumber.from(idStr);
  const ok = await txWrap("TransferOwnership", () =>
    contract.transferOwnership(batchId, dst)
  );
  if (ok) {
    await refreshFeed();
    await loadAssignedDistributor(); // distributor list should shrink after transfer
  }
}

async function retailerFinalize(passed) {
  if (!(await ensureUnlockedAndRole("retailer"))) return;
  const idStr = $("rBatchId").value.trim();
  if (!idStr) return toast("Finalize", "BatchId gir."), null;
  const batchId = ethers.BigNumber.from(idStr);
  await txWrap("MarkAsArrived", () => contract.markAsArrived(batchId, passed));
}

async function adminGrantRevoke(isGrant) {
  if (!(await ensureUnlockedAndRole("admin"))) return;
  const addr = $("aAddr").value.trim();
  const role = $("aRole").value;
  if (!addr) return toast("Admin", "Adres gir."), null;

  const map = {
    producer: isGrant ? "registerProducer" : "revokeProducer",
    transporter: isGrant ? "registerTransporter" : "revokeTransporter",
    distributor: isGrant ? "registerDistributor" : "revokeDistributor",
    retailer: isGrant ? "registerRetailer" : "revokeRetailer",
  };
  const fnName = map[role];
  await txWrap((isGrant ? "Grant " : "Revoke ") + role, () =>
    contract[fnName](addr)
  );
}

/** ========= Event Live Updates (optional) ========= */
function startLiveListeners() {
  if (!provider || !contract) return;
  // If already attached, ethers doesn't easily tell; keep it simple.
  try {
    contract.on("BatchCreated", () => refreshFeed());
    contract.on("PickupAccepted", () => refreshFeed());
    contract.on("SensorLogged", () => refreshFeed());
    contract.on("OwnershipTransferred", () => refreshFeed());
    contract.on("ArrivedAndInspected", () => refreshFeed());
  } catch (e) {
    console.warn("Listener error", e);
  }
}

/** ========= Wire up UI ========= */
function init() {
  $("contractShort").textContent = shortAddr(CONTRACT_ADDRESS);
  $("sContract").value = CONTRACT_ADDRESS;

  // nav
  document.querySelectorAll(".nav .item").forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("disabled")) {
        toast("Yetki", "Bu menü için rol + PIN gerekli.");
        return;
      }
      const page = item.getAttribute("data-page");
      showPage(page);
    });
  });

  $("btnConnect").addEventListener("click", async () => {
    await connectWallet();
    startLiveListeners();
  });
  on("btnLock", "click", lockNow);
  on("btnLogout", "click", logoutNow);

  on("btnQuery", "click", queryBatch);
  on("btnRefreshFeed", "click", refreshFeed);

  // PIN modal
  $("btnClosePin").addEventListener("click", () => {
    // keep locked if user closes
    closePinModal();
  });
  on("btnPinOk", "click", pinContinue);
  $("btnResetPin").addEventListener("click", () => {
    resetPin();
    toast("PIN reset", "Yeni PIN belirleyebilirsin.");
    openPinModal();
  });

  // Producer
  on("btnCreateBatch", "click", producerCreate);
  on("btnUpdateTransporter", "click", producerUpdateTransporter);

  // Transporter
  on("btnLoadAssigned", "click", loadAssigned);
  on("btnLoadAssignedDistributor", "click", loadAssignedDistributor);
  on("btnLoadAssignedRetailer", "click", loadAssignedRetailer);
  on("btnAcceptPickup", "click", acceptPickup);
  on("btnAddSensor", "click", addSensor);
  on("btnToDistributor", "click", toDistributor);

  // Transporter: lock/unlock buttons based on stage
  $("tBatchId").addEventListener("input", () => {
    if ($("tSelectedBadge"))
      $("tSelectedBadge").textContent = $("tBatchId").value.trim() || "—";
    refreshTransporterActionLocks();
  });
  $("tBatchId").addEventListener("change", () => {
    if ($("tSelectedBadge"))
      $("tSelectedBadge").textContent = $("tBatchId").value.trim() || "—";
    refreshTransporterActionLocks();
  });

  // Distributor
  on("btnToRetailer", "click", toRetailer);
  $("dBatchId").addEventListener("input", () => {
    if ($("dSelectedBadge"))
      $("dSelectedBadge").textContent = $("dBatchId").value.trim() || "—";
    refreshDistributorActionLocks();
  });
  $("dBatchId").addEventListener("change", () => {
    if ($("dSelectedBadge"))
      $("dSelectedBadge").textContent = $("dBatchId").value.trim() || "—";
    refreshDistributorActionLocks();
  });

  // Retailer
  $("btnPass").addEventListener("click", () => retailerFinalize(true));
  $("btnFail").addEventListener("click", () => retailerFinalize(false));

  // Admin
  $("btnGrant").addEventListener("click", () => adminGrantRevoke(true));
  $("btnRevoke").addEventListener("click", () => adminGrantRevoke(false));

  // Settings
  $("btnCopyContract").addEventListener("click", async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    toast("Copied", "Contract address kopyalandı.");
  });

  $("btnApplyRpc")?.addEventListener("click", async () => {
    const v = ($("sRpc")?.value || "").trim();
    if (!v) {
      toast("RPC", "RPC URL boş olamaz.");
      return;
    }
    try {
      localStorage.setItem(RPC_STORAGE_KEY, v);
    } catch (_) { }
    initReadOnly();
    toast("RPC", "Public (read-only) bağlantı güncellendi.");
    try { refreshFeed(); } catch (_) { }
    try { loadMarket(); } catch (_) { }
  });

  // net pill initial
  $("netName").textContent = "—";

  // if metamask changes
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", async () => {
      location.reload();
    });
    window.ethereum.on("chainChanged", async () => {
      location.reload();
    });
  }

  // initial feed message
  refreshFeed();
  updateNavLocks();
}
init();

/** =========================
 *  PUBLIC QR (scan + generate)
 *  ========================= */
let __qr = { hq: null, running: false };

function parseBatchIdFromText(txt) {
  if (txt === null || typeof txt === "undefined") return null;
  const s = String(txt).trim();

  // 1) Try explicit markers like "BATCH:17" or "batchId=17"
  //    Accept numeric only because contract expects uint256.
  let m = s.match(
    /(?:BATCH\s*[:=\-]\s*|batchId\s*[:=\-]\s*|batch\s*id\s*[:=\-]\s*)(\d{1,78})/i
  );
  if (m && m[1]) return m[1];

  // 2) If it's a URL, try query param ?batchId=17 or #batchId=17
  try {
    const u = new URL(s);
    const q =
      u.searchParams.get("batchId") ||
      u.searchParams.get("batch") ||
      u.searchParams.get("id");
    if (q && /\d/.test(q)) {
      const mm = String(q).match(/(\d{1,78})/);
      if (mm) return mm[1];
    }
  } catch (_) {
    /* not a URL */
  }

  // 3) Fallback: take the last number anywhere in the string (works with "FRESHCHAIN:BATCH:17")
  const nums = s.match(/(\d{1,78})/g);
  if (!nums || !nums.length) return null;
  return nums[nums.length - 1];
}

async function openPublicTraceWithId(idStr) {
  if (!idStr) return;
  // go to home page
  try {
    showPage("query");
  } catch (_) {
    // fallback: click nav item
    document
      .querySelectorAll(".nav .item")
      .forEach((x) => x.classList.remove("active"));
    const it = document.querySelector('.nav .item[data-page="query"]');
    if (it) it.classList.add("active");
    const p = document.getElementById("page-query");
    if (p) p.style.display = "";
  }
  const inp = document.getElementById("qBatchId");
  if (inp) inp.value = idStr;
  const btn = document.getElementById("btnQuery");
  if (btn) btn.click();
}

async function startQR() {
  const wrap = $("qrReaderWrap");
  const stopBtn = $("btnStopQR");
  const startBtn = $("btnStartQR");
  if (!window.isSecureContext) {
    toast("QR", "Kamera için HTTPS veya localhost gerekir (file:// çalışmaz).");
    return;
  }
  if (!wrap || typeof Html5Qrcode === "undefined") {
    toast("QR", "QR kütüphanesi yüklenemedi.");
    return;
  }
  wrap.style.display = "";
  startBtn.disabled = true;
  stopBtn.disabled = false;

  // reset old instance
  if (__qr.hq) {
    try {
      await __qr.hq.stop();
    } catch (_) { }
    try {
      __qr.hq.clear();
    } catch (_) { }
    __qr.hq = null;
  }

  __qr.hq = new Html5Qrcode("qrReader");
  __qr.running = true;

  let __failCount = 0;

  const onSuccess = async (decodedText) => {
    const raw = (decodedText ?? "").toString();
    const id = parseBatchIdFromText(raw);

    // Show something to help debug if parsing fails
    if (!id) {
      $("qrLast").value = raw ? raw.slice(0, 64) : "—";
      toast("QR okundu ama batchId bulunamadı", raw ? raw : "Boş çıktı");
      return;
    }

    $("qrLast").value = id;
    toast("QR okundu", `Batch ID: ${id}`);

    // auto stop after first success (less annoying)
    await stopQR();
    await openPublicTraceWithId(id);
  };

  const onFail = (_) => {
    // avoid spamming; show hint occasionally
    __failCount++;
    if (__failCount === 60) {
      toast(
        "QR okunamıyor",
        "QR'ı kameraya yaklaştır, ışığı artır, QR'ı kadraja tam sığdır. (Tarama devam ediyor)"
      );
    }
  };

  try {
    await __qr.hq.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 220 },
      onSuccess,
      onFail
    );
  } catch (e) {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    wrap.style.display = "none";
    toast("QR", e && e.message ? e.message : String(e));
  }
}

async function stopQR() {
  const wrap = $("qrReaderWrap");
  const stopBtn = $("btnStopQR");
  const startBtn = $("btnStartQR");
  stopBtn.disabled = true;
  startBtn.disabled = false;

  if (__qr.hq) {
    try {
      await __qr.hq.stop();
    } catch (_) { }
    try {
      __qr.hq.clear();
    } catch (_) { }
    __qr.hq = null;
  }
  __qr.running = false;
  if (wrap) wrap.style.display = "none";
}

function bindQRTopBar() {
  $("btnStartQR")?.addEventListener("click", startQR);
  $("btnStopQR")?.addEventListener("click", stopQR);
  $("btnQRGo")?.addEventListener("click", () => {
    const id = parseBatchIdFromText($("qrManual")?.value);
    if (!id) {
      toast("Trace", "Geçerli batchId gir.");
      return;
    }
    $("qrLast").value = id;
    openPublicTraceWithId(id);
  });
}

/** =========================
 *  MARKET (completed pass -> QR)
 *  ========================= */
async function loadMarket() {
  const list = $("marketList");
  const empty = $("marketEmpty");
  if (!list) return;

  list.innerHTML = "";
  if (empty) empty.style.display = "none";

  const vc = getViewContract();
  if (!vc) {
    if (empty) {
      empty.textContent = "Okuma için RPC gerekli. Settings > Public RPC URL kısmından doğru RPC gir.";
      empty.style.display = "";
    }
    return;
  }

  let ids = [];
  try {
    ids = await vc.getAllBatchIds();
  } catch (e) {
    if (empty) {
      empty.textContent = "getAllBatchIds okunamadı.";
      empty.style.display = "";
    }
    return;
  }

  const q = ($("marketFilter")?.value || "").trim().toLowerCase();

  const items = [];
  for (const id of ids) {
    try {
      const b = await vc.getBatch(id);
      const stage = Number(b.stage);
      if (stage !== STAGE.COMPLETED_PASS) continue; // satışa sadece PASS
      const name = (b.productName ?? b[1] ?? "").toString();
      if (q && !name.toLowerCase().includes(q)) continue;
      items.push({
        batchId: (b.batchId ?? b[0]).toString(),
        productName: name,
        quantityKg: (b.quantityKg ?? b[2]).toString(),
        producer: b.producer ?? b[3],
        updatedAt: Number(b.lastUpdatedAt ?? b[8] ?? 0),
      });
    } catch (_) { }
  }

  if (!items.length) {
    if (empty) {
      empty.textContent = "Şu an satışta ürün yok (COMPLETED_PASS).";
      empty.style.display = "";
    }
    return;
  }

  // newest first
  items.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));

  for (const it of items) {
    const wrap = document.createElement("div");
    wrap.className = "timeline-item";
    wrap.style.display = "flex";
    wrap.style.gap = "12px";
    wrap.style.alignItems = "center";

    const qrBox = document.createElement("div");
    qrBox.style.width = "96px";
    qrBox.style.height = "96px";
    qrBox.style.borderRadius = "12px";
    qrBox.style.background = "rgba(255,255,255,0.04)";
    qrBox.style.display = "flex";
    qrBox.style.alignItems = "center";
    qrBox.style.justifyContent = "center";
    qrBox.style.overflow = "hidden";

    const qrInner = document.createElement("div");
    qrBox.appendChild(qrInner);

    const meta = document.createElement("div");
    meta.style.flex = "1";

    const title = document.createElement("div");
    title.style.fontWeight = "700";
    title.textContent = `${it.productName}  •  #${it.batchId}`;

    const sub = document.createElement("div");
    sub.className = "small muted";
    sub.textContent = `${it.quantityKg} kg • Producer: ${shortAddr(
      it.producer
    )} • Stage: COMPLETED_PASS`;

    const actions = document.createElement("div");
    actions.style.display = "flex";
    actions.style.gap = "8px";
    actions.style.flexWrap = "wrap";
    const btnView = document.createElement("button");
    btnView.className = "btn";
    btnView.textContent = "🔎 Logları Gör";
    btnView.addEventListener("click", () => openPublicTraceWithId(it.batchId));

    actions.appendChild(btnView);

    meta.appendChild(title);
    meta.appendChild(sub);
    meta.appendChild(actions);

    wrap.appendChild(qrBox);
    wrap.appendChild(meta);
    list.appendChild(wrap);

    // generate QR after in DOM
    try {
      const payload = `FRESHCHAIN:BATCH:${it.batchId}`;
      new QRCode(qrInner, {
        text: payload,
        width: 92,
        height: 92,
        correctLevel: QRCode.CorrectLevel.M,
      });
    } catch (_) {
      qrInner.textContent = it.batchId;
    }
  }
}

function bindMarket() {
  $("btnRefreshMarket")?.addEventListener("click", loadMarket);
  $("marketFilter")?.addEventListener("input", () => {
    // light debounce
    clearTimeout(window.__mktT);
    window.__mktT = setTimeout(loadMarket, 250);
  });
}

window.addEventListener("load", () => {
  bindQRTopBar();
  bindMarket();
});

const __oldFinalize = window.finalizeRetailer;

window.addEventListener("load", () => {
  const btn = $("btnFinalize");
  if (btn) {
    btn.addEventListener(
      "click",
      async () => {
        setTimeout(() => {
          try {
            loadMarket();
          } catch (_) { }
        }, 2500);
      },
      { capture: false }
    );
  }
});


document.addEventListener("DOMContentLoaded", () => {
  // Auto-fill Public RPC in Settings (wallet olmadan da)
  const rpcInput = document.getElementById("sRpc") || document.getElementById("rpcUrl");
  if (rpcInput && (!rpcInput.value || rpcInput.value.trim() === "")) {
    rpcInput.value = DEFAULT_PUBLIC_RPC;
  }
  // Init read-only provider/contract if function exists
  try { if (typeof initReadOnly === "function") initReadOnly(); } catch (_) {}
});
