export const response = {
    "soap-env:Envelope": {
      $: {
        "xmlns:soap-env": "http://schemas.xmlsoap.org/soap/envelope/"
      },
      "soap-env:Header": [
        {
          "eb:MessageHeader": [
            {
              $: {
                "xmlns:eb": "http://www.ebxml.org/namespaces/messageHeader",
                "eb:version": "1.0",
                "soap-env:mustUnderstand": "1"
              },
              "eb:From": [
                {
                  "eb:PartyId": [
                    {
                      _: "ws",
                      $: {
                        "eb:type": "urn:x12.org:IO5:01"
                      }
                    }
                  ]
                }
              ],
              "eb:To": [
                {
                  "eb:PartyId": [
                    {
                      _: "from",
                      $: {
                        "eb:type": "urn:x12.org:IO5:01"
                      }
                    }
                  ]
                }
              ],
              "eb:CPAId": ["A93I"],
              "eb:ConversationId": ["SWS-Test-A93I"],
              "eb:Service": [
                {
                  $: {
                    "eb:type": "sabreXML"
                  }
                }
              ],
              "eb:Action": ["SSG_EnhancedSeatmapRQ"],
              "eb:MessageData": [
                {
                  "eb:MessageId": ["2887685229863990283"],
                  "eb:Timestamp": ["2019-02-23T06:23:10"]
                }
              ]
            }
          ],
          "wsse:Security": [
            {
              $: {
                "xmlns:wsse": "http://schemas.xmlsoap.org/ws/2002/12/secext"
              },
              "wsse:BinarySecurityToken": [
                {
                  _:
                    "Shared/IDL:IceSess\\/SessMgr:1\\.0.IDL/Common/!ICESMS\\/RESB!ICESMSLB\\/RES.LB!1550902985816!7624!41",
                  $: {
                    valueType: "String",
                    EncodingType: "wsse:Base64Binary"
                  }
                }
              ]
            }
          ]
        }
      ],
      "soap-env:Body": [
        {
          EnhancedSeatMapRS: [
            {
              $: {
                xmlns: "http://stl.sabre.com/Merchandising/v4",
                "xmlns:ns2": "http://opentravel.org/common/message/v02",
                "xmlns:ns3": "http://services.sabre.com/STL_Payload/v02_00",
                "xmlns:ns4": "http://services.sabre.com/STL/v02",
                "xmlns:ns5": "http://opentravel.org/common/v02",
                "xmlns:ns6": "http://stl.sabre.com/Merchandising/diagnostics/v1"
              },
              "ns3:ApplicationResults": [
                {
                  $: {
                    status: "Complete"
                  },
                  "ns3:Success": [""]
                }
              ],
              SeatMap: [
                {
                  $: {
                    changeOfGaugeInd: "false"
                  },
                  Equipment: ["777"],
                  Flight: [
                    {
                      $: {
                        destination: "DFW",
                        origin: "EZE"
                      },
                      DepartureDate: [
                        {
                          _: "2019-04-23",
                          $: {
                            localTime: "19:50:00.000"
                          }
                        }
                      ],
                      Marketing: [
                        {
                          _: "0996",
                          $: {
                            carrier: "AA"
                          }
                        }
                      ]
                    }
                  ],
                  Cabin: [
                    {
                      $: {
                        firstRow: "17",
                        lastRow: "40"
                      },
                      CabinClass: [
                        {
                          CabinType: ["Economy"],
                          RBD: ["Y"],
                          MarketingDescription: [
                            "PRICE PER SEAT:USD 83.87-USD 125.76"
                          ]
                        }
                      ],
                      Row: [
                        {
                          RowNumber: ["17"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                },
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["SeatWithBassinetFacility"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["SeatWithBassinetFacility"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                },
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["18"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["19"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["20"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "true",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["PreferredSeat/PreferentialSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "true",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["PreferredSeat/PreferentialSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "83.87",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "5.50",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "true",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["PreferredSeat/PreferentialSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["21"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "true",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["PreferredSeat/PreferentialSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "true",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["PreferredSeat/PreferentialSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "83.87",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "5.50",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "83.87",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "5.50",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["22"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "true",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["PreferredSeat/PreferentialSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "true",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["PreferredSeat/PreferentialSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "83.87",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "5.50",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "83.87",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "5.50",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["23"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "83.87",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "5.50",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "83.87",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "5.50",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["24"],
                          RowFacility: [
                            {
                              Location: ["Rear"],
                              Facility: [
                                {
                                  Characteristics: ["Lavatory"],
                                  Location: ["RightSideSection"]
                                }
                              ]
                            }
                          ],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "true",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["PreferredSeat/PreferentialSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "true",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["PreferredSeat/PreferentialSeat"]
                                },
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "true",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["PreferredSeat/PreferentialSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "true",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["PreferredSeat/PreferentialSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "true",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["PreferredSeat/PreferentialSeat"]
                                },
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "true",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["OverWingSeat(S)"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["PreferredSeat/PreferentialSeat"]
                                },
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["25"],
                          RowFacility: [
                            {
                              Location: ["Rear"],
                              Facility: [
                                {
                                  Characteristics: ["Lavatory"],
                                  Location: ["LeftSideSection"]
                                }
                              ]
                            }
                          ],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Limitations: [
                                {
                                  Detail: ["NoSeatLavatory"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["26"],
                          Type: ["ExitRow"],
                          RowFacility: [
                            {
                              Location: ["Front"],
                              Facility: [
                                {
                                  Characteristics: ["ExitDoor"],
                                  Location: ["LeftSideSection"]
                                },
                                {
                                  Characteristics: ["ExitDoor"],
                                  Location: ["RightSideSection"]
                                }
                              ]
                            }
                          ],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "true",
                                restrictedReclineInd: "false",
                                noInfantInd: "true"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["ExitRowSeat"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["NotAllowedForInfants"]
                                },
                                {
                                  Detail: ["SeatNotSuitableForChild"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "true",
                                restrictedReclineInd: "false",
                                noInfantInd: "true"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["ExitRowSeat"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["NotAllowedForInfants"]
                                },
                                {
                                  Detail: ["SeatNotSuitableForChild"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "true",
                                restrictedReclineInd: "false",
                                noInfantInd: "true"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["ExitRowSeat"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["NotAllowedForInfants"]
                                },
                                {
                                  Detail: ["SeatNotSuitableForChild"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "true"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["NotAllowedForInfants"]
                                },
                                {
                                  Detail: ["SeatNotSuitableForChild"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "true"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["NotAllowedForInfants"]
                                },
                                {
                                  Detail: ["SeatNotSuitableForChild"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "true"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["NotAllowedForInfants"]
                                },
                                {
                                  Detail: ["SeatNotSuitableForChild"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "true"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["NotAllowedForInfants"]
                                },
                                {
                                  Detail: ["SeatNotSuitableForChild"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "true",
                                restrictedReclineInd: "false",
                                noInfantInd: "true"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["ExitRowSeat"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["NotAllowedForInfants"]
                                },
                                {
                                  Detail: ["SeatNotSuitableForChild"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "true",
                                restrictedReclineInd: "false",
                                noInfantInd: "true"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["ExitRowSeat"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["NotAllowedForInfants"]
                                },
                                {
                                  Detail: ["SeatNotSuitableForChild"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "true",
                                restrictedReclineInd: "false",
                                noInfantInd: "true"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Location: [
                                {
                                  Detail: ["ExitRowSeat"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["NotAllowedForInfants"]
                                },
                                {
                                  Detail: ["SeatNotSuitableForChild"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "125.76",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "8.20",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["27"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: [
                                    "Medically OK to travel",
                                    "Power Port"
                                  ]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["28"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["29"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "83.87",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "5.50",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "108.63",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.10",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["LegSpaceSeat"]
                                },
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "120.11",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "7.90",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_2"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "83.87",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "5.50",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "true",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["ChargeableSeat"]
                                }
                              ],
                              Price: [
                                {
                                  TotalAmount: [
                                    {
                                      _: "91.49",
                                      $: {
                                        currencyCode: "USD",
                                        decimalPlaces: "2"
                                      }
                                    }
                                  ],
                                  Taxes: [
                                    {
                                      Tax: [
                                        {
                                          _: "6.00",
                                          $: {
                                            currencyCode: "USD",
                                            decimalPlaces: "2"
                                          }
                                        }
                                      ],
                                      TaxTypeRef: ["taxType_1"]
                                    }
                                  ],
                                  PriceTypeRef: ["priceTypeDetail_1"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["30"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["31"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["32"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["33"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["34"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["35"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["36"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["37"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["38"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "true",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsOccupied"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["39"],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Limitations: [
                                {
                                  Detail: ["NoSeatLavatory"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Limitations: [
                                {
                                  Detail: ["NoSeatLavatory"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          RowNumber: ["40"],
                          RowFacility: [
                            {
                              Location: ["Rear"],
                              Facility: [
                                {
                                  Characteristics: ["ExitDoor"],
                                  Location: ["LeftSideSection"]
                                },
                                {
                                  Characteristics: ["ExitDoor"],
                                  Location: ["RightSideSection"]
                                }
                              ]
                            },
                            {
                              Location: ["Rear"],
                              Facility: [
                                {
                                  Characteristics: ["Galley"],
                                  Location: ["LeftSideSection"]
                                },
                                {
                                  Characteristics: ["Galley"],
                                  Location: ["CenterSection"]
                                },
                                {
                                  Characteristics: ["Galley"],
                                  Location: ["CenterSection"]
                                },
                                {
                                  Characteristics: ["Galley"],
                                  Location: ["RightSideSection"]
                                }
                              ]
                            }
                          ],
                          Seat: [
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["A"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["B"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["C"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["D"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["E"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["G"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "false",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["H"],
                              Occupation: [
                                {
                                  Detail: ["SeatIsFree"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["SeatToBeLeftVacant/OfferedLast"]
                                }
                              ],
                              Facilities: [
                                {
                                  Detail: ["NoFacilitySeat(IndifferentSeat)"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Medically OK to travel"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["J"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["K"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ]
                            },
                            {
                              $: {
                                occupiedInd: "false",
                                inoperativeInd: "true",
                                premiumInd: "false",
                                chargeableInd: "false",
                                exitRowInd: "false",
                                restrictedReclineInd: "false",
                                noInfantInd: "false"
                              },
                              Number: ["L"],
                              Location: [
                                {
                                  Detail: ["NoSeatAtThisLocation"]
                                }
                              ],
                              Limitations: [
                                {
                                  Detail: ["RestrictedGeneral"]
                                }
                              ],
                              Bilateral: [
                                {
                                  Characteristic: ["Power Port"]
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      Wing: [
                        {
                          $: {
                            firstRow: "17",
                            lastRow: "24"
                          }
                        }
                      ],
                      Column: [
                        {
                          Column: ["A"],
                          Characteristics: ["Window"]
                        },
                        {
                          Column: ["B"],
                          Characteristics: ["CenterSeat"]
                        },
                        {
                          Column: ["C"],
                          Characteristics: ["Aisle"]
                        },
                        {
                          Column: ["D"],
                          Characteristics: ["Aisle"]
                        },
                        {
                          Column: ["E"],
                          Characteristics: ["CenterSeat"]
                        },
                        {
                          Column: ["G"],
                          Characteristics: ["CenterSeat"]
                        },
                        {
                          Column: ["H"],
                          Characteristics: ["Aisle"]
                        },
                        {
                          Column: ["J"],
                          Characteristics: ["Aisle"]
                        },
                        {
                          Column: ["K"],
                          Characteristics: ["CenterSeat"]
                        },
                        {
                          Column: ["L"],
                          Characteristics: ["Window"]
                        }
                      ]
                    }
                  ],
                  PriceList: [
                    {
                      PriceTypeDetail: [
                        {
                          $: {
                            id: "priceTypeDetail_1"
                          },
                          Code: ["OC"],
                          Description: ["Preferred Seats"],
                          SecondaryCode: ["0B5"]
                        },
                        {
                          $: {
                            id: "priceTypeDetail_2"
                          },
                          Code: ["OC"],
                          Description: ["Main Cabin Extra"],
                          SecondaryCode: ["MCE"]
                        }
                      ]
                    }
                  ],
                  TaxTable: [
                    {
                      TaxType: [
                        {
                          $: {
                            id: "taxType_1"
                          },
                          Code: ["AR"]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  };
  