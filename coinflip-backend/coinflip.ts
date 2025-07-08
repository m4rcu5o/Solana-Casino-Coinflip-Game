export type Coinflip = {
  "version": "0.1.0",
  "name": "coinflip",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "GlobalSettingsInput"
          }
        }
      ]
    },
    {
      "name": "createGame",
      "accounts": [
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeReciever",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecieverAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "creatorAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newGame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "random",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vrf",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "GameParams"
          }
        }
      ]
    },
    {
      "name": "joinOpposite",
      "accounts": [
        {
          "name": "global",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeReciever",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecieverAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "playerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coinFlipGame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "IndexParam"
          }
        }
      ]
    },
    {
      "name": "handleGame",
      "accounts": [
        {
          "name": "global",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coinFlipGame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecieverAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "random",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auth",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "GameParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "global",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "adminAuthority",
            "type": "publicKey"
          },
          {
            "name": "feeReciever",
            "type": "publicKey"
          },
          {
            "name": "initialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "coinFlipGame",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "creatorSelection",
            "type": "bool"
          },
          {
            "name": "oposite",
            "type": "publicKey"
          },
          {
            "name": "availableOpposite",
            "type": "bool"
          },
          {
            "name": "bettingAmount",
            "type": "u64"
          },
          {
            "name": "isSol",
            "type": "bool"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "isFinished",
            "type": "bool"
          },
          {
            "name": "result",
            "type": "bool"
          },
          {
            "name": "index",
            "type": "u16"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "GlobalSettingsInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "adminAuthority",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "feeReciever",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "GameParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creatorSelection",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "bettingAmount",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "isSol",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "tokenMint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "force",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "IndexParam",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "RandomKeyParam",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "force",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "InitEvent",
      "fields": [
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creatorSelection",
          "type": "bool",
          "index": false
        },
        {
          "name": "availableOpposite",
          "type": "bool",
          "index": false
        },
        {
          "name": "bettingAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "isSol",
          "type": "bool",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "startTime",
          "type": "i64",
          "index": false
        },
        {
          "name": "gamePda",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "isFinished",
          "type": "bool",
          "index": false
        },
        {
          "name": "index",
          "type": "u16",
          "index": false
        }
      ]
    },
    {
      "name": "JoinEvent",
      "fields": [
        {
          "name": "opposite",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creatorSelection",
          "type": "bool",
          "index": false
        },
        {
          "name": "availableOpposite",
          "type": "bool",
          "index": false
        },
        {
          "name": "gamePda",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "HandleEvent",
      "fields": [
        {
          "name": "result",
          "type": "bool",
          "index": false
        },
        {
          "name": "selelction",
          "type": "bool",
          "index": false
        },
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "opposite",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "gamePda",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidGlobalAuthority",
      "msg": "Invalid Global Authority"
    },
    {
      "code": 6001,
      "name": "AlreadyInitialized",
      "msg": "Global is already initialized"
    },
    {
      "code": 6002,
      "name": "AlreadyReadyGame",
      "msg": "Already exist opposite"
    },
    {
      "code": 6003,
      "name": "InvalidGlobal",
      "msg": "Global is not initialized"
    },
    {
      "code": 6004,
      "name": "InvalidFeeReciever",
      "msg": "Invalid fee reciever"
    },
    {
      "code": 6005,
      "name": "InvalidGame",
      "msg": "Game is not ready to start."
    },
    {
      "code": 6006,
      "name": "InvalidMath",
      "msg": "Invalid Math."
    },
    {
      "code": 6007,
      "name": "InvalidToken",
      "msg": "Invalid Token. Please check token"
    },
    {
      "code": 6008,
      "name": "FailedToGetRandomNumber",
      "msg": "Failed to get random number."
    },
    {
      "code": 6009,
      "name": "InvalidBettingAmount",
      "msg": "Invalid betting amount."
    }
  ]
};

export const IDL: Coinflip = {
  "version": "0.1.0",
  "name": "coinflip",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "GlobalSettingsInput"
          }
        }
      ]
    },
    {
      "name": "createGame",
      "accounts": [
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeReciever",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecieverAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "creatorAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newGame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "random",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vrf",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "GameParams"
          }
        }
      ]
    },
    {
      "name": "joinOpposite",
      "accounts": [
        {
          "name": "global",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeReciever",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecieverAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "playerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coinFlipGame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "IndexParam"
          }
        }
      ]
    },
    {
      "name": "handleGame",
      "accounts": [
        {
          "name": "global",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coinFlipGame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecieverAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "random",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auth",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "GameParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "global",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "adminAuthority",
            "type": "publicKey"
          },
          {
            "name": "feeReciever",
            "type": "publicKey"
          },
          {
            "name": "initialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "coinFlipGame",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "creatorSelection",
            "type": "bool"
          },
          {
            "name": "oposite",
            "type": "publicKey"
          },
          {
            "name": "availableOpposite",
            "type": "bool"
          },
          {
            "name": "bettingAmount",
            "type": "u64"
          },
          {
            "name": "isSol",
            "type": "bool"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "isFinished",
            "type": "bool"
          },
          {
            "name": "result",
            "type": "bool"
          },
          {
            "name": "index",
            "type": "u16"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "GlobalSettingsInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "adminAuthority",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "feeReciever",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "GameParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creatorSelection",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "bettingAmount",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "isSol",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "tokenMint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "force",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "IndexParam",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "RandomKeyParam",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "force",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "InitEvent",
      "fields": [
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creatorSelection",
          "type": "bool",
          "index": false
        },
        {
          "name": "availableOpposite",
          "type": "bool",
          "index": false
        },
        {
          "name": "bettingAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "isSol",
          "type": "bool",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "startTime",
          "type": "i64",
          "index": false
        },
        {
          "name": "gamePda",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "isFinished",
          "type": "bool",
          "index": false
        },
        {
          "name": "index",
          "type": "u16",
          "index": false
        }
      ]
    },
    {
      "name": "JoinEvent",
      "fields": [
        {
          "name": "opposite",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creatorSelection",
          "type": "bool",
          "index": false
        },
        {
          "name": "availableOpposite",
          "type": "bool",
          "index": false
        },
        {
          "name": "gamePda",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "HandleEvent",
      "fields": [
        {
          "name": "result",
          "type": "bool",
          "index": false
        },
        {
          "name": "selelction",
          "type": "bool",
          "index": false
        },
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "opposite",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "gamePda",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidGlobalAuthority",
      "msg": "Invalid Global Authority"
    },
    {
      "code": 6001,
      "name": "AlreadyInitialized",
      "msg": "Global is already initialized"
    },
    {
      "code": 6002,
      "name": "AlreadyReadyGame",
      "msg": "Already exist opposite"
    },
    {
      "code": 6003,
      "name": "InvalidGlobal",
      "msg": "Global is not initialized"
    },
    {
      "code": 6004,
      "name": "InvalidFeeReciever",
      "msg": "Invalid fee reciever"
    },
    {
      "code": 6005,
      "name": "InvalidGame",
      "msg": "Game is not ready to start."
    },
    {
      "code": 6006,
      "name": "InvalidMath",
      "msg": "Invalid Math."
    },
    {
      "code": 6007,
      "name": "InvalidToken",
      "msg": "Invalid Token. Please check token"
    },
    {
      "code": 6008,
      "name": "FailedToGetRandomNumber",
      "msg": "Failed to get random number."
    },
    {
      "code": 6009,
      "name": "InvalidBettingAmount",
      "msg": "Invalid betting amount."
    }
  ]
};
