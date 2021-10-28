export const providers = [
    {
      network: "mainnet",
      rpcURL: "https://mainnet.infura.io/v3/8ab40977dd7044df8dfc69fa8e0b05d4",
      tokens: [
        {
          contractAddress: "0xf56408077487cB879c992909C5b5C66D68c02Eb4",
          symbol: "riot",
        },
        {
          contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          symbol: "weth",
        },
      ],
    },
    {
      network: "matic",
      rpcURL: "https://rpc-mainnet.maticvigil.com/",
      tokens: [
        {
          contractAddress: "0x4ff0b68abc2b9e4e1401e9b691dba7d66b264ac8",
          symbol: "riot",
        },
        {
          contractAddress: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
          symbol: "weth",
        },
      ],
    },
  ]
  
  export const abi = [
    {
      constant: true,
      inputs: [],
      name: "mintingFinished",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "approve",
      outputs: [],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "unpause",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_amount", type: "uint256" },
      ],
      name: "mint",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "paused",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      payable: false,
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "finishMinting",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "pause",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [],
      payable: false,
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_amount", type: "uint256" },
        { name: "_releaseTime", type: "uint256" },
      ],
      name: "mintTimelocked",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "_owner", type: "address" },
        { name: "_spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ name: "remaining", type: "uint256" }],
      payable: false,
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Mint",
      type: "event",
    },
    { anonymous: false, inputs: [], name: "MintFinished", type: "event" },
    { anonymous: false, inputs: [], name: "Pause", type: "event" },
    { anonymous: false, inputs: [], name: "Unpause", type: "event" },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "owner", type: "address" },
        { indexed: true, name: "spender", type: "address" },
        { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Transfer",
      type: "event",
    },
  ]
  