(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={"lastModified": "2014-05-05 20:43:37 +0900" }

},{}],2:[function(require,module,exports){
module.exports={
  "vers": 0.01,
  "config": {
    "rate": "perhr",
    "valueColumns": [
      "vCPU",
      "memoryGiB",
      "storageGB",
      "linux"
    ],
    "currencies": [
      "USD"
    ],
    "regions": [
      {
        "region": "us-east",
        "instanceTypes": [
          {
            "type": "generalCurrentGen",
            "sizes": [
              {
                "size": "m3.medium",
                "vCPU": "1",
                "memoryGiB": "3.75",
                "storageGB": "1 x 4 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.070"
                    }
                  }
                ]
              },
              {
                "size": "m3.large",
                "vCPU": "2",
                "memoryGiB": "7.5",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.140"
                    }
                  }
                ]
              },
              {
                "size": "m3.xlarge",
                "vCPU": "4",
                "memoryGiB": "15",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.280"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "30",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.560"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "computeCurrentGen",
            "sizes": [
              {
                "size": "c3.large",
                "vCPU": "2",
                "memoryGiB": "3.75",
                "storageGB": "2 x 16 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.105"
                    }
                  }
                ]
              },
              {
                "size": "c3.xlarge",
                "vCPU": "4",
                "memoryGiB": "7.5",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.210"
                    }
                  }
                ]
              },
              {
                "size": "c3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "15",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.420"
                    }
                  }
                ]
              },
              {
                "size": "c3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "30",
                "storageGB": "2 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.840"
                    }
                  }
                ]
              },
              {
                "size": "c3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "60",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.680"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "gpuCurrentGen",
            "sizes": [
              {
                "size": "g2.2xlarge",
                "vCPU": "8",
                "memoryGiB": "15",
                "storageGB": "60 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.650"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMemCurrentGen",
            "sizes": [
              {
                "size": "r3.large",
                "vCPU": "2",
                "memoryGiB": "15",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.175"
                    }
                  }
                ]
              },
              {
                "size": "r3.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.350"
                    }
                  }
                ]
              },
              {
                "size": "r3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "1 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.700"
                    }
                  }
                ]
              },
              {
                "size": "r3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "1 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.400"
                    }
                  }
                ]
              },
              {
                "size": "r3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "2.800"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "storageCurrentGen",
            "sizes": [
              {
                "size": "i2.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.853"
                    }
                  }
                ]
              },
              {
                "size": "i2.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "2 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.705"
                    }
                  }
                ]
              },
              {
                "size": "i2.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "4 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "3.410"
                    }
                  }
                ]
              },
              {
                "size": "i2.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "8 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "6.820"
                    }
                  }
                ]
              },
              {
                "size": "hs1.8xlarge",
                "vCPU": "16",
                "memoryGiB": "117",
                "storageGB": "24 x 2048",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "4.600"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "Micro and Small Instances",
            "sizes": [
              {
                "size": "t1.micro",
                "vCPU": "1",
                "memoryGiB": "0.615",
                "storageGB": "ebsonly",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.020"
                    }
                  }
                ]
              },
              {
                "size": "m1.small",
                "vCPU": "1",
                "memoryGiB": "1.7",
                "storageGB": "1 x 160",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.044"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "us-west-2",
        "instanceTypes": [
          {
            "type": "generalCurrentGen",
            "sizes": [
              {
                "size": "m3.medium",
                "vCPU": "1",
                "memoryGiB": "3.75",
                "storageGB": "1 x 4 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.070"
                    }
                  }
                ]
              },
              {
                "size": "m3.large",
                "vCPU": "2",
                "memoryGiB": "7.5",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.140"
                    }
                  }
                ]
              },
              {
                "size": "m3.xlarge",
                "vCPU": "4",
                "memoryGiB": "15",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.280"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "30",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.560"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "computeCurrentGen",
            "sizes": [
              {
                "size": "c3.large",
                "vCPU": "2",
                "memoryGiB": "3.75",
                "storageGB": "2 x 16 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.105"
                    }
                  }
                ]
              },
              {
                "size": "c3.xlarge",
                "vCPU": "4",
                "memoryGiB": "7.5",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.210"
                    }
                  }
                ]
              },
              {
                "size": "c3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "15",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.420"
                    }
                  }
                ]
              },
              {
                "size": "c3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "30",
                "storageGB": "2 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.840"
                    }
                  }
                ]
              },
              {
                "size": "c3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "60",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.680"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "gpuCurrentGen",
            "sizes": [
              {
                "size": "g2.2xlarge",
                "vCPU": "8",
                "memoryGiB": "15",
                "storageGB": "60 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.650"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMemCurrentGen",
            "sizes": [
              {
                "size": "r3.large",
                "vCPU": "2",
                "memoryGiB": "15",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.175"
                    }
                  }
                ]
              },
              {
                "size": "r3.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.350"
                    }
                  }
                ]
              },
              {
                "size": "r3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "1 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.700"
                    }
                  }
                ]
              },
              {
                "size": "r3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "1 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.400"
                    }
                  }
                ]
              },
              {
                "size": "r3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "2.800"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "storageCurrentGen",
            "sizes": [
              {
                "size": "i2.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.853"
                    }
                  }
                ]
              },
              {
                "size": "i2.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "2 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.705"
                    }
                  }
                ]
              },
              {
                "size": "i2.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "4 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "3.410"
                    }
                  }
                ]
              },
              {
                "size": "i2.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "8 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "6.820"
                    }
                  }
                ]
              },
              {
                "size": "hs1.8xlarge",
                "vCPU": "16",
                "memoryGiB": "117",
                "storageGB": "24 x 2048",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "4.600"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "Micro and Small Instances",
            "sizes": [
              {
                "size": "t1.micro",
                "vCPU": "1",
                "memoryGiB": "0.615",
                "storageGB": "ebsonly",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.020"
                    }
                  }
                ]
              },
              {
                "size": "m1.small",
                "vCPU": "1",
                "memoryGiB": "1.7",
                "storageGB": "1 x 160",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.044"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "us-west",
        "instanceTypes": [
          {
            "type": "generalCurrentGen",
            "sizes": [
              {
                "size": "m3.medium",
                "vCPU": "1",
                "memoryGiB": "3.75",
                "storageGB": "1 x 4 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.077"
                    }
                  }
                ]
              },
              {
                "size": "m3.large",
                "vCPU": "2",
                "memoryGiB": "7.5",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.154"
                    }
                  }
                ]
              },
              {
                "size": "m3.xlarge",
                "vCPU": "4",
                "memoryGiB": "15",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.308"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "30",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.616"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "computeCurrentGen",
            "sizes": [
              {
                "size": "c3.large",
                "vCPU": "2",
                "memoryGiB": "3.75",
                "storageGB": "2 x 16 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.120"
                    }
                  }
                ]
              },
              {
                "size": "c3.xlarge",
                "vCPU": "4",
                "memoryGiB": "7.5",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.239"
                    }
                  }
                ]
              },
              {
                "size": "c3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "15",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.478"
                    }
                  }
                ]
              },
              {
                "size": "c3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "30",
                "storageGB": "2 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.956"
                    }
                  }
                ]
              },
              {
                "size": "c3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "60",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.912"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "gpuCurrentGen",
            "sizes": [
              {
                "size": "g2.2xlarge",
                "vCPU": "8",
                "memoryGiB": "15",
                "storageGB": "60 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.702"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMemCurrentGen",
            "sizes": [
              {
                "size": "r3.large",
                "vCPU": "2",
                "memoryGiB": "15",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.195"
                    }
                  }
                ]
              },
              {
                "size": "r3.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.390"
                    }
                  }
                ]
              },
              {
                "size": "r3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "1 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.780"
                    }
                  }
                ]
              },
              {
                "size": "r3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "1 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.560"
                    }
                  }
                ]
              },
              {
                "size": "r3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "3.120"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "storageCurrentGen",
            "sizes": [
              {
                "size": "i2.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.938"
                    }
                  }
                ]
              },
              {
                "size": "i2.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "2 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.876"
                    }
                  }
                ]
              },
              {
                "size": "i2.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "4 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "3.751"
                    }
                  }
                ]
              },
              {
                "size": "i2.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "8 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "7.502"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "Micro and Small Instances",
            "sizes": [
              {
                "size": "t1.micro",
                "vCPU": "1",
                "memoryGiB": "0.615",
                "storageGB": "ebsonly",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m1.small",
                "vCPU": "1",
                "memoryGiB": "1.7",
                "storageGB": "1 x 160",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.047"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "eu-ireland",
        "instanceTypes": [
          {
            "type": "generalCurrentGen",
            "sizes": [
              {
                "size": "m3.medium",
                "vCPU": "1",
                "memoryGiB": "3.75",
                "storageGB": "1 x 4 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.077"
                    }
                  }
                ]
              },
              {
                "size": "m3.large",
                "vCPU": "2",
                "memoryGiB": "7.5",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.154"
                    }
                  }
                ]
              },
              {
                "size": "m3.xlarge",
                "vCPU": "4",
                "memoryGiB": "15",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.308"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "30",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.616"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "computeCurrentGen",
            "sizes": [
              {
                "size": "c3.large",
                "vCPU": "2",
                "memoryGiB": "3.75",
                "storageGB": "2 x 16 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.120"
                    }
                  }
                ]
              },
              {
                "size": "c3.xlarge",
                "vCPU": "4",
                "memoryGiB": "7.5",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.239"
                    }
                  }
                ]
              },
              {
                "size": "c3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "15",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.478"
                    }
                  }
                ]
              },
              {
                "size": "c3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "30",
                "storageGB": "2 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.956"
                    }
                  }
                ]
              },
              {
                "size": "c3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "60",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.912"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "gpuCurrentGen",
            "sizes": [
              {
                "size": "g2.2xlarge",
                "vCPU": "8",
                "memoryGiB": "15",
                "storageGB": "60 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.702"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMemCurrentGen",
            "sizes": [
              {
                "size": "r3.large",
                "vCPU": "2",
                "memoryGiB": "15",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.195"
                    }
                  }
                ]
              },
              {
                "size": "r3.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.390"
                    }
                  }
                ]
              },
              {
                "size": "r3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "1 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.780"
                    }
                  }
                ]
              },
              {
                "size": "r3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "1 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.560"
                    }
                  }
                ]
              },
              {
                "size": "r3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "3.120"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "storageCurrentGen",
            "sizes": [
              {
                "size": "i2.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.938"
                    }
                  }
                ]
              },
              {
                "size": "i2.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "2 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.876"
                    }
                  }
                ]
              },
              {
                "size": "i2.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "4 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "3.751"
                    }
                  }
                ]
              },
              {
                "size": "i2.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "8 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "7.502"
                    }
                  }
                ]
              },
              {
                "size": "hs1.8xlarge",
                "vCPU": "16",
                "memoryGiB": "117",
                "storageGB": "24 x 2048",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "4.900"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "Micro and Small Instances",
            "sizes": [
              {
                "size": "t1.micro",
                "vCPU": "1",
                "memoryGiB": "0.615",
                "storageGB": "ebsonly",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.020"
                    }
                  }
                ]
              },
              {
                "size": "m1.small",
                "vCPU": "1",
                "memoryGiB": "1.7",
                "storageGB": "1 x 160",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.047"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "apac-sin",
        "instanceTypes": [
          {
            "type": "generalCurrentGen",
            "sizes": [
              {
                "size": "m3.medium",
                "vCPU": "1",
                "memoryGiB": "3.75",
                "storageGB": "1 x 4 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.098"
                    }
                  }
                ]
              },
              {
                "size": "m3.large",
                "vCPU": "2",
                "memoryGiB": "7.5",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.196"
                    }
                  }
                ]
              },
              {
                "size": "m3.xlarge",
                "vCPU": "4",
                "memoryGiB": "15",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.392"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "30",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.784"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "computeCurrentGen",
            "sizes": [
              {
                "size": "c3.large",
                "vCPU": "2",
                "memoryGiB": "3.75",
                "storageGB": "2 x 16 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.132"
                    }
                  }
                ]
              },
              {
                "size": "c3.xlarge",
                "vCPU": "4",
                "memoryGiB": "7.5",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.265"
                    }
                  }
                ]
              },
              {
                "size": "c3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "15",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.529"
                    }
                  }
                ]
              },
              {
                "size": "c3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "30",
                "storageGB": "2 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.058"
                    }
                  }
                ]
              },
              {
                "size": "c3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "60",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "2.117"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMemCurrentGen",
            "sizes": [
              {
                "size": "r3.large",
                "vCPU": "2",
                "memoryGiB": "15",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.210"
                    }
                  }
                ]
              },
              {
                "size": "r3.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.420"
                    }
                  }
                ]
              },
              {
                "size": "r3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "1 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.840"
                    }
                  }
                ]
              },
              {
                "size": "r3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "1 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.680"
                    }
                  }
                ]
              },
              {
                "size": "r3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "3.360"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "storageCurrentGen",
            "sizes": [
              {
                "size": "i2.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.018"
                    }
                  }
                ]
              },
              {
                "size": "i2.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "2 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "2.035"
                    }
                  }
                ]
              },
              {
                "size": "i2.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "4 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "4.070"
                    }
                  }
                ]
              },
              {
                "size": "i2.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "8 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "8.140"
                    }
                  }
                ]
              },
              {
                "size": "hs1.8xlarge",
                "vCPU": "16",
                "memoryGiB": "117",
                "storageGB": "24 x 2048",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "5.570"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "Micro and Small Instances",
            "sizes": [
              {
                "size": "t1.micro",
                "vCPU": "1",
                "memoryGiB": "0.615",
                "storageGB": "ebsonly",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.020"
                    }
                  }
                ]
              },
              {
                "size": "m1.small",
                "vCPU": "1",
                "memoryGiB": "1.7",
                "storageGB": "1 x 160",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.058"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "apac-tokyo",
        "instanceTypes": [
          {
            "type": "generalCurrentGen",
            "sizes": [
              {
                "size": "m3.medium",
                "vCPU": "1",
                "memoryGiB": "3.75",
                "storageGB": "1 x 4 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.101"
                    }
                  }
                ]
              },
              {
                "size": "m3.large",
                "vCPU": "2",
                "memoryGiB": "7.5",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.203"
                    }
                  }
                ]
              },
              {
                "size": "m3.xlarge",
                "vCPU": "4",
                "memoryGiB": "15",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.405"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "30",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.810"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "computeCurrentGen",
            "sizes": [
              {
                "size": "c3.large",
                "vCPU": "2",
                "memoryGiB": "3.75",
                "storageGB": "2 x 16 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.128"
                    }
                  }
                ]
              },
              {
                "size": "c3.xlarge",
                "vCPU": "4",
                "memoryGiB": "7.5",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.255"
                    }
                  }
                ]
              },
              {
                "size": "c3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "15",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.511"
                    }
                  }
                ]
              },
              {
                "size": "c3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "30",
                "storageGB": "2 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.021"
                    }
                  }
                ]
              },
              {
                "size": "c3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "60",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "2.043"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "gpuCurrentGen",
            "sizes": [
              {
                "size": "g2.2xlarge",
                "vCPU": "8",
                "memoryGiB": "15",
                "storageGB": "60 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.898"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMemCurrentGen",
            "sizes": [
              {
                "size": "r3.large",
                "vCPU": "2",
                "memoryGiB": "15",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.210"
                    }
                  }
                ]
              },
              {
                "size": "r3.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.420"
                    }
                  }
                ]
              },
              {
                "size": "r3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "1 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.840"
                    }
                  }
                ]
              },
              {
                "size": "r3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "1 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.680"
                    }
                  }
                ]
              },
              {
                "size": "r3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "3.360"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "storageCurrentGen",
            "sizes": [
              {
                "size": "i2.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.001"
                    }
                  }
                ]
              },
              {
                "size": "i2.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "2 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "2.001"
                    }
                  }
                ]
              },
              {
                "size": "i2.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "4 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "4.002"
                    }
                  }
                ]
              },
              {
                "size": "i2.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "8 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "8.004"
                    }
                  }
                ]
              },
              {
                "size": "hs1.8xlarge",
                "vCPU": "16",
                "memoryGiB": "117",
                "storageGB": "24 x 2048",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "5.400"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "Micro and Small Instances",
            "sizes": [
              {
                "size": "t1.micro",
                "vCPU": "1",
                "memoryGiB": "0.615",
                "storageGB": "ebsonly",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.026"
                    }
                  }
                ]
              },
              {
                "size": "m1.small",
                "vCPU": "1",
                "memoryGiB": "1.7",
                "storageGB": "1 x 160",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.061"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "apac-syd",
        "instanceTypes": [
          {
            "type": "generalCurrentGen",
            "sizes": [
              {
                "size": "m3.medium",
                "vCPU": "1",
                "memoryGiB": "3.75",
                "storageGB": "1 x 4 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.098"
                    }
                  }
                ]
              },
              {
                "size": "m3.large",
                "vCPU": "2",
                "memoryGiB": "7.5",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.196"
                    }
                  }
                ]
              },
              {
                "size": "m3.xlarge",
                "vCPU": "4",
                "memoryGiB": "15",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.392"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "30",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.784"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "computeCurrentGen",
            "sizes": [
              {
                "size": "c3.large",
                "vCPU": "2",
                "memoryGiB": "3.75",
                "storageGB": "2 x 16 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.132"
                    }
                  }
                ]
              },
              {
                "size": "c3.xlarge",
                "vCPU": "4",
                "memoryGiB": "7.5",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.265"
                    }
                  }
                ]
              },
              {
                "size": "c3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "15",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.529"
                    }
                  }
                ]
              },
              {
                "size": "c3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "30",
                "storageGB": "2 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.058"
                    }
                  }
                ]
              },
              {
                "size": "c3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "60",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "2.117"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMemCurrentGen",
            "sizes": [
              {
                "size": "r3.large",
                "vCPU": "2",
                "memoryGiB": "15",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.210"
                    }
                  }
                ]
              },
              {
                "size": "r3.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.420"
                    }
                  }
                ]
              },
              {
                "size": "r3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "1 x 160 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.840"
                    }
                  }
                ]
              },
              {
                "size": "r3.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "1 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.680"
                    }
                  }
                ]
              },
              {
                "size": "r3.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "2 x 320 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "3.360"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "storageCurrentGen",
            "sizes": [
              {
                "size": "i2.xlarge",
                "vCPU": "4",
                "memoryGiB": "30.5",
                "storageGB": "1 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "1.018"
                    }
                  }
                ]
              },
              {
                "size": "i2.2xlarge",
                "vCPU": "8",
                "memoryGiB": "61",
                "storageGB": "2 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "2.035"
                    }
                  }
                ]
              },
              {
                "size": "i2.4xlarge",
                "vCPU": "16",
                "memoryGiB": "122",
                "storageGB": "4 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "4.070"
                    }
                  }
                ]
              },
              {
                "size": "i2.8xlarge",
                "vCPU": "32",
                "memoryGiB": "244",
                "storageGB": "8 x 800 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "8.140"
                    }
                  }
                ]
              },
              {
                "size": "hs1.8xlarge",
                "vCPU": "16",
                "memoryGiB": "117",
                "storageGB": "24 x 2048",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "5.570"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "Micro and Small Instances",
            "sizes": [
              {
                "size": "t1.micro",
                "vCPU": "1",
                "memoryGiB": "0.615",
                "storageGB": "ebsonly",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.020"
                    }
                  }
                ]
              },
              {
                "size": "m1.small",
                "vCPU": "1",
                "memoryGiB": "1.7",
                "storageGB": "1 x 160",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.058"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "sa-east-1",
        "instanceTypes": [
          {
            "type": "generalCurrentGen",
            "sizes": [
              {
                "size": "m3.medium",
                "vCPU": "1",
                "memoryGiB": "3.75",
                "storageGB": "1 x 4 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.095"
                    }
                  }
                ]
              },
              {
                "size": "m3.large",
                "vCPU": "2",
                "memoryGiB": "7.5",
                "storageGB": "1 x 32 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.190"
                    }
                  }
                ]
              },
              {
                "size": "m3.xlarge",
                "vCPU": "4",
                "memoryGiB": "15",
                "storageGB": "2 x 40 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.381"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "vCPU": "8",
                "memoryGiB": "30",
                "storageGB": "2 x 80 SSD",
                "valueColumns": [
                  {
                    "name": "linux",
                    "prices": {
                      "USD": "0.761"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "Micro and Small Instances",
            "sizes": [
              {
                "size": "t1.micro",
                "vCPU": "1",
                "memoryGiB": "0.615",
                "storageGB": "ebsonly",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.027"
                    }
                  }
                ]
              },
              {
                "size": "m1.small",
                "vCPU": "1",
                "memoryGiB": "1.7",
                "storageGB": "1 x 160",
                "valueColumns": [
                  {
                    "name": "os",
                    "prices": {
                      "USD": "0.058"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}

},{}],3:[function(require,module,exports){
module.exports={
  "vers": 0.01,
  "config": {
    "regions": [
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "222"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.018"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "337"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "443"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.037"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "673"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.03"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "886"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.074"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1345"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.06"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1772"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.146"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2691"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.12"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "123"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "188"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.009"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "326"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.026"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "508"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.022"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "652"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.053"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1016"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.045"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1304"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.104"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2031"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.09"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2608"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.209"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4063"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.18"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5216"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.417"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "8126"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.359"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2306"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.142"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6307"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.06"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "541"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.033"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1033"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.026"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1082"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.066"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2066"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.052"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2164"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.132"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4132"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.104"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "4328"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.264"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "8264"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.208"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "8656"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.528"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "16528"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.416"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1820"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.155"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2740"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.121"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3640"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.311"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5480"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.241"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "7280"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.621"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "10960"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.482"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "14560"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.242"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "21920"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.964"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "11213"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.92"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "16924"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.76"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "62"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.005"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "100"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.005"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "us-east"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "222"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.029"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "337"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.023"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "443"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.057"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "673"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.046"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "886"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.113"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1345"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.092"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1772"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.228"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2691"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.183"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "123"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.016"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "188"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.013"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "326"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.041"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "508"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.036"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "652"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.083"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1016"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.071"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1304"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.165"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2031"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.142"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2608"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.33"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4063"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.284"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5216"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.661"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "8126"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.568"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2500"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.154"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6820"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.065"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "698"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.043"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1333"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.034"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1395"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.086"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2665"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.068"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2790"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.172"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5330"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.136"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5580"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.344"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "10660"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.272"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "11160"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.688"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "21320"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.544"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1820"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.233"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2740"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.186"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3640"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.466"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5480"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.371"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "7280"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.931"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "10960"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.742"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "14560"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.862"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "21920"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.484"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "62"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.008"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "100"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.008"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "us-west-1"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "222"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.018"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "337"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "443"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.037"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "673"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.03"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "886"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.074"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1345"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.06"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1772"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.146"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2691"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.12"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "123"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "188"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.009"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "326"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.026"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "508"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.022"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "652"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.053"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1016"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.045"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1304"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.104"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2031"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.09"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2608"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.209"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4063"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.18"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5216"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.417"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "8126"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.359"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2306"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.142"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6307"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.06"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "541"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.033"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1033"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.026"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1082"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.066"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2066"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.052"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2164"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.132"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4132"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.104"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "4328"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.264"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "8264"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.208"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "8656"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.528"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "16528"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.416"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1820"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.155"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2740"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.121"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3640"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.311"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5480"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.241"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "7280"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.621"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "10960"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.482"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "14560"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.242"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "21920"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.964"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "11213"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.92"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "16924"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.76"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "62"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.005"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "100"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.005"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "us-west-2"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "222"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.028"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "337"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.023"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "443"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.057"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "673"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.046"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "886"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.113"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1345"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.091"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1772"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.225"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2691"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.182"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "123"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.016"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "188"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.013"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "326"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.041"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "508"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.036"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "652"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.083"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1016"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.071"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1304"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.165"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2031"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.142"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2608"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.33"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4063"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.284"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5216"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.661"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "8126"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.568"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2500"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.154"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6820"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.065"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "698"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.043"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1333"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.034"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1395"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.086"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2665"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.068"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2790"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.172"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5330"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.136"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5580"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.344"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "10660"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.272"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "11160"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.688"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "21320"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.544"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1820"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.233"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2740"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.186"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3640"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.466"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5480"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.371"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "7280"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.931"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "10960"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.742"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "14560"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.862"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "21920"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.484"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "11213"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.163"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "16924"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.166"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "62"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.008"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "100"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.008"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "eu-west-1"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "245"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.031"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "370"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.025"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "491"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.062"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "741"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.05"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "981"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.124"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1481"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.10"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1961"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.248"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2961"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.20"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "135"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.018"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "212"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.014"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "356"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.044"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "538"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.039"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "713"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.088"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1077"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.078"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1426"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.177"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2153"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.157"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2852"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.354"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4306"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.313"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5704"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.707"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "8613"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.626"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "777"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.048"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1482"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.038"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1554"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.096"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2964"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.075"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3108"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.192"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5928"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.15"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "6216"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.384"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "11856"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.30"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "12432"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.768"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "23712"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.60"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2621"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.223"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3946"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.174"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5242"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.448"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "7891"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.347"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "10483"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.894"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "15782"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.694"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "20966"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.788"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "31565"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.388"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "14191"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.08"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "26280"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.00"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "62"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.008"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "100"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.008"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "ap-southeast-1"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "244"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.03"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "375"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.025"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "487"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.061"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "750"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.05"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "973"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.123"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1500"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.099"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1948"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.246"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3000"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.199"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "135"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.017"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "207"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.014"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "357"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.047"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "549"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.041"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "713"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.094"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1097"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.081"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1427"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.188"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2194"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.163"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2854"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.375"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4389"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.326"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5708"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.75"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "8777"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.651"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3406"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.21"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "9310"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.089"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "777"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.048"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1482"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.038"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1554"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.096"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2964"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.075"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3108"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.192"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5928"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.15"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "6216"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.384"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "11856"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.30"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "12432"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.768"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "23712"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.60"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2670"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.228"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4019"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.177"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5339"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.456"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "8037"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.353"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "10677"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.91"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "16074"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.707"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "21354"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.822"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "32150"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.414"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "12822"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.317"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "19321"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.325"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "62"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.009"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "100"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.009"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "ap-northeast-1"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "245"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.031"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "370"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.025"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "491"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.062"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "741"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.05"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "981"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.124"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1481"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.10"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1961"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.248"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2961"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.20"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "135"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.018"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "212"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.014"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "356"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.044"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "538"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.039"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "713"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.088"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1077"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.078"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1426"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.177"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2153"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.157"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2852"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.354"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4306"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.313"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5704"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.707"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "8613"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.626"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "777"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.048"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1482"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.038"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1554"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.096"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2964"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.075"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3108"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.192"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5928"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.15"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "6216"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.384"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "11856"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.30"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "12432"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.768"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "23712"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.60"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2621"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.223"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3946"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.174"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5242"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.448"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "7891"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.347"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "10483"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.894"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "15782"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.694"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "20966"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.788"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "31565"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.388"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "14191"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.08"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "26280"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.00"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "62"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.008"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "100"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.008"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "ap-southeast-2"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "272"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.021"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "454"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.021"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "545"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.041"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "908"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.043"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1089"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.083"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1815"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.085"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2178"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.166"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3631"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.169"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "152"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.012"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "253"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.012"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "84"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.007"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "135"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.007"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "sa-east-1"
      }
    ],
    "currencies": [
      "USD"
    ],
    "valueColumns": [
      "upfront",
      "hourly",
      "upfront",
      "hourly"
    ]
  }
}

},{}],4:[function(require,module,exports){
module.exports={
  "vers": 0.01,
  "config": {
    "regions": [
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "110"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.064"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "172"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.05"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "220"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.127"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "343"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.101"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "439"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.254"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "686"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.201"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "879"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.508"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1372"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.401"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "61"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.034"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "96"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.027"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "167"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.093"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "252"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.082"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "333"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.186"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "503"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.164"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "667"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.373"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1006"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.327"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1333"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.745"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2012"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.654"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2666"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.49"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4024"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.308"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1826"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.264"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4440"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.217"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "644"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.369"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "971"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.288"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1288"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.739"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1942"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.575"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2576"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.477"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3884"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.15"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5152"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.954"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "7768"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "2.30"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3968"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.24"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5997"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.81"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "23"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.012"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "35"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.012"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "us-east"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "110"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.077"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "172"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.063"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "220"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.154"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "343"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.126"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "439"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.308"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "686"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.252"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "879"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.616"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1372"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.505"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "61"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.042"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "96"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.034"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "160"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.117"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "252"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.102"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "321"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.234"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "503"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.205"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "642"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.468"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1006"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.41"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1283"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.936"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2012"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.82"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2567"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.871"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4024"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.639"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1976"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.284"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4810"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.235"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "644"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.651"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "971"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.509"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1288"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.303"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1942"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.018"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2576"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.605"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3884"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "2.035"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5152"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "5.21"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "7768"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "4.07"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "23"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "35"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "us-west-1"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "110"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.064"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "172"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.05"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "220"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.127"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "343"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.101"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "439"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.254"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "686"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.201"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "879"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.508"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1372"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.401"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "61"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.034"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "96"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.027"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "167"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.093"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "252"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.082"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "333"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.186"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "503"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.164"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "667"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.373"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1006"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.327"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1333"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.745"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2012"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.654"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2666"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.49"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4024"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.308"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1826"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.264"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4440"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.217"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "644"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.369"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "971"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.288"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1288"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.739"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1942"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.575"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2576"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.477"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3884"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.15"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5152"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.954"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "7768"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "2.30"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3968"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.24"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5997"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.81"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "23"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.012"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "35"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.012"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "us-west-2"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "110"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.077"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "172"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.063"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "220"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.154"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "343"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.126"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "439"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.308"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "686"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.252"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "879"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.616"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1372"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.503"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "61"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.042"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "96"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.034"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "160"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.117"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "252"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.102"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "321"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.234"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "503"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.205"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "642"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.468"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1006"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.41"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1283"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.936"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2012"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.82"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2567"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.871"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4024"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.639"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1976"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.284"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4810"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.235"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "644"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.651"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "971"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.509"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1288"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.303"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1942"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.018"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2576"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.605"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3884"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "2.035"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5152"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "5.21"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "7768"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "4.07"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3968"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "3.09"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5997"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "2.396"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "23"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "35"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "eu-west-1"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "124"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.087"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "191"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.069"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "249"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.175"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "382"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.139"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "497"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.349"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "764"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.277"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "995"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.697"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1528"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.554"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "67"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.047"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "97"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.037"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "180"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.126"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "270"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.111"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "360"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.253"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "540"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.221"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "720"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.505"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1081"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.443"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1441"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2161"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.886"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2881"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.02"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4322"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.772"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "927"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.531"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1398"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.415"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1855"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.064"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2796"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.828"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3709"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.127"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5593"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.656"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "7419"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "4.254"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "11186"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "3.312"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5144"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "3.328"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "7621"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "2.61"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "23"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "35"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "ap-southeast-1"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "120"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.091"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "190"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.072"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "240"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.184"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "378"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.146"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "480"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.367"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "756"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.29"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "960"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.733"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1512"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.581"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "65"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.05"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "101"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.039"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "181"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.128"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "265"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.116"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "363"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.255"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "530"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.232"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "726"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.511"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1061"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.466"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1451"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.021"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2121"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.93"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2902"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.043"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4243"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.861"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "945"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.541"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1424"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.423"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1890"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.084"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2849"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.844"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3778"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.167"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5696"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.687"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "7556"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "4.332"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "11393"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "3.373"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "4393"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "3.53"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6830"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "2.727"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "23"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.016"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "35"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.016"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "ap-northeast-1"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "124"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.087"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "191"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.069"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "249"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.175"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "382"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.139"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "497"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.349"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "764"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.277"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "995"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.697"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1528"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.554"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "67"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.047"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "97"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.037"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "180"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.126"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "275"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.11"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "360"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.253"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "551"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.219"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "720"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.505"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1101"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.439"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1441"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2202"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.878"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2881"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.02"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4405"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.755"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "927"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.531"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1398"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.415"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1855"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.064"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2796"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.828"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3709"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.127"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5593"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.656"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "7419"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "4.254"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "11186"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "3.312"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5144"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "3.328"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "7621"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "2.61"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "23"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "35"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "ap-southeast-2"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "141"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.091"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "209"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.072"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "282"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.183"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "418"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.143"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "564"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.365"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "836"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.286"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1128"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.73"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1671"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.572"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "76"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.049"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "112"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.038"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "31"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.016"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "47"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.016"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "sa-east-1"
      }
    ],
    "currencies": [
      "USD"
    ],
    "valueColumns": [
      "upfront",
      "hourly",
      "upfront",
      "hourly"
    ]
  }
}

},{}],5:[function(require,module,exports){
module.exports={
  "vers": 0.01,
  "config": {
    "regions": [
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "181"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.027"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "286"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.022"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "362"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.055"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "571"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.043"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "724"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.109"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1142"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.086"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1448"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.219"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2283"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.173"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "101"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "157"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.012"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "268"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.039"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "414"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.034"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "536"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.078"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "827"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.068"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1072"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.157"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1655"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.137"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2145"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.313"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3310"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.272"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "4289"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.626"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6619"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.545"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1975"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.232"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5223"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.135"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "486"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.049"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "851"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.044"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "972"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.098"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1702"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.088"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1944"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.196"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3404"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.177"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3888"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.392"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6808"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.353"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "7776"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.784"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "13616"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.707"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1493"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.227"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2283"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.176"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2987"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.455"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4567"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.353"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5973"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.909"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "9133"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.705"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "11946"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.818"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "18266"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.41"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "9200"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.38"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "14103"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.11"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "54"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.007"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "82"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.007"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "us-east"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "181"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.035"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "286"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.029"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "362"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.071"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "571"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.057"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "724"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.141"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1142"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.113"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1448"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.282"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2283"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.228"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "101"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.02"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "157"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.016"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "268"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.053"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "414"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.046"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "536"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.104"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "827"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.091"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1072"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.209"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1655"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.183"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2145"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.417"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3310"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.365"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "4289"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.834"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6619"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.73"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2133"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.251"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5658"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.146"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "635"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.061"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1001"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.062"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1270"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.122"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2001"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.124"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2540"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.244"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4002"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.248"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5080"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.488"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "8004"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.495"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "10160"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.976"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "16008"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.99"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1493"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.345"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2283"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.256"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2987"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.69"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4567"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.511"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5973"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.379"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "9133"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.022"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "11946"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.758"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "18266"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "2.044"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "54"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "82"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "us-west-1"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "181"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.027"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "286"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.022"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "362"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.055"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "571"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.043"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "724"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.109"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1142"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.086"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1448"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.219"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2283"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.173"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "101"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "157"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.012"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "268"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.039"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "414"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.034"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "536"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.078"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "827"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.068"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1072"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.157"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1655"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.137"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2145"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.313"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3310"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.272"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "4289"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.626"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6619"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.545"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1975"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.232"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5223"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.135"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "486"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.049"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "851"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.044"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "972"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.098"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1702"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.088"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1944"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.196"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3404"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.177"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "3888"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.392"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6808"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.353"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "7776"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.784"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "13616"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.707"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1493"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.227"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2283"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.176"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2987"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.455"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4567"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.353"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5973"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.909"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "9133"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.705"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "11946"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.818"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "18266"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.41"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "9200"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.38"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "14103"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.11"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "54"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.007"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "82"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.007"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "us-west-2"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "181"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.035"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "286"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.029"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "362"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.071"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "571"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.057"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "724"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.141"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1142"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.113"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1448"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.281"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2283"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.226"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "101"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.02"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "157"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.016"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "268"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.053"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "414"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.046"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "536"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.104"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "827"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.091"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1072"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.209"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1655"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.183"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2145"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.417"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3310"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.365"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "4289"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.834"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6619"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.73"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2133"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.251"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5658"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.146"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "635"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.061"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1001"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.062"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1270"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.122"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2001"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.124"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2540"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.244"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4002"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.248"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5080"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.488"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "8004"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.495"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "10160"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.976"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "16008"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.99"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1493"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.345"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2283"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.256"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2987"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.69"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "4567"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.511"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5973"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.379"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "9133"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.022"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "11946"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.758"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "18266"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "2.044"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "9200"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.809"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "14103"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.581"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "54"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "82"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "eu-west-1"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "202"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.039"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "316"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.031"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "403"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.077"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "633"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.062"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "805"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.153"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1266"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.124"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1610"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.307"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2531"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.248"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "111"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.022"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "176"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.018"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "291"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.057"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "438"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.05"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "582"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.113"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "875"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.10"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1165"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.226"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1751"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.20"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2330"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.452"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3501"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.40"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "4660"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.904"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "7001"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.80"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "692"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.069"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1286"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.06"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1384"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.138"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2571"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.12"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2768"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.276"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5142"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.24"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5536"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.552"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "10284"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.48"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "11072"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.104"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "20568"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.96"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2150"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.327"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3288"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.253"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "4301"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.655"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6576"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.508"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "8601"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.309"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "13152"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "17202"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.618"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "26303"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "2.03"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "13245"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.268"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "22075"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.96"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "54"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "82"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "ap-southeast-1"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "200"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.043"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "304"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.034"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "401"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.086"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "608"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.07"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "801"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.17"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1214"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.139"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1601"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.34"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2428"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.278"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "117"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.025"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "183"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.019"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "301"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.061"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "462"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.055"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "602"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.121"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "925"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.11"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1204"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.243"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1850"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.221"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2407"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.486"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3699"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.441"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "4813"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.971"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "7397"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.884"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2911"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.334"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "7710"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.199"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "692"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.069"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1286"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.06"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1384"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.138"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2571"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.12"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2768"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.276"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5142"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.24"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5536"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.552"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "10284"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.481"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "11072"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.104"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "20568"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.962"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2190"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.333"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3349"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.258"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "4381"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.668"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6698"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.518"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "8760"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.333"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "13395"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.034"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "17521"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.667"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "26790"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "2.068"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "10582"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.046"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "15996"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.802"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "54"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "82"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "ap-northeast-1"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "202"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.039"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "316"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.031"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "403"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.077"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "633"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.062"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "805"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.153"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1266"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.124"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1610"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.307"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2531"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.248"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "111"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.022"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "176"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.018"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "291"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.057"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "438"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.05"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "582"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.113"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "875"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.10"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1165"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.226"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1751"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.20"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2330"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.452"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3501"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.40"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "4660"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.904"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "7001"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.80"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "692"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.069"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1286"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.06"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1384"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.138"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "2571"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.12"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2768"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.276"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "5142"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.24"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "5536"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.552"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "10284"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.481"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "11072"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.104"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "20568"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.962"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2150"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.327"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3288"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.253"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "4301"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.655"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "6576"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.508"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "8601"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "1.309"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "13152"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.015"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "17202"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.618"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "26303"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "2.03"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "13245"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "2.268"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "22075"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "1.96"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "54"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "82"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.01"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "ap-southeast-2"
      },
      {
        "instanceTypes": [
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "254"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.043"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "424"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.038"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.medium"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "509"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.088"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "848"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.076"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "1017"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.174"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "1695"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.151"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "2033"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.348"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "3389"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.301"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m3.2xlarge"
              }
            ],
            "type": "generalCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "142"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.024"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "237"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.013"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "m1.small"
              }
            ],
            "type": "generalPreviousGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "c3.8xlarge"
              }
            ],
            "type": "computeCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "g2.2xlarge"
              }
            ],
            "type": "gpuCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.large"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "r3.8xlarge"
              }
            ],
            "type": "hiMemCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.2xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.4xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "i2.8xlarge"
              },
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "N/A"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "hs1.8xlarge"
              }
            ],
            "type": "storageCurrentGen"
          },
          {
            "sizes": [
              {
                "valueColumns": [
                  {
                    "prices": {
                      "USD": "73"
                    },
                    "name": "yrTerm1"
                  },
                  {
                    "prices": {
                      "USD": "0.009"
                    },
                    "rate": "perhr",
                    "name": "yrTerm1Hourly"
                  },
                  {
                    "prices": {
                      "USD": "111"
                    },
                    "name": "yrTerm3"
                  },
                  {
                    "prices": {
                      "USD": "0.009"
                    },
                    "rate": "perhr",
                    "name": "yrTerm3Hourly"
                  }
                ],
                "size": "t1.micro"
              }
            ],
            "type": "uI"
          }
        ],
        "region": "sa-east-1"
      }
    ],
    "currencies": [
      "USD"
    ],
    "valueColumns": [
      "upfront",
      "hourly",
      "upfront",
      "hourly"
    ]
  }
}

},{}],6:[function(require,module,exports){
var rawdata = {
  "od": require("../json/linux-od.json"),
  "ri-light": require("../json/linux-ri-light.json"),
  "ri-medium": require("../json/linux-ri-medium.json"),
  "ri-heavy": require("../json/linux-ri-heavy.json"),
};

function canonicalizeRegionName(name) {
  var table = {
    "us-east": "us-east-1",
    "us-west": "us-west-1",
    "apac-tokyo": "ap-northeast-1",
    "apac-sin": "ap-southeast-1",
    "apac-syd": "ap-southeast-2",
    "eu-ireland": "eu-west-1"
  };
  return table[name] || name;
}

function fetchJSON(key) {
  return new Promise(function(resolve, reject){
    var planData = rawdata[key];
    if(planData) {
      planData.plan = key;
      resolve(planData);
    }else{
      throw new Error('unknow key: ' + key);
    }
  }).catch(function(e){
    console.error(e.stack);
  });;
}

function fetchRegions(plan) {
  return fetchJSON(plan || "od").then(function(data){
    return data.config.regions;
  });
}

function fetchRegionNames() {
  return fetchRegions().then(function(regions){
    return regions.map(function(r) {
      return canonicalizeRegionName(r.region);
    });
  });
}

function fetchInstanceSizes(region) {
  region = canonicalizeRegionName(region || "us-east");
  return fetchRegions().then(function(regions){
    var types = regions.filter(function(r){
      return canonicalizeRegionName(r.region) == region;
    })[0].instanceTypes;
    var result = [];
    types.forEach(function(type){
      type.sizes.forEach(function(size){
        result.push({
          "size": size.size, // m3.medium
          "price": +size.valueColumns[0].prices.USD, // 0.070
          "region": region
        });
      });
    });
    return result;
  });
}

function formatPrices(valueColumns, plan) {
  if(plan === "od") { // on-demand instance
    return [{
      "plan": plan,
      "type": "on-demand",
      "once": 0,
      "hourly": +valueColumns[0].prices.USD
    }];
  }

  var prices = [];
  var tmp = {};
  valueColumns.forEach(function(value){
    tmp[value.name] = value;
  });
  prices.push({
    "plan": plan + "1y",
    "type": "1y",
    "once": +tmp.yrTerm1.prices.USD,
    "hourly": +tmp.yrTerm1Hourly.prices.USD
  })
  prices.push({
    "plan": plan + "3y",
    "type": "3y",
    "once": +tmp.yrTerm3.prices.USD,
    "hourly": +tmp.yrTerm3Hourly.prices.USD
  })
  return prices;
}

function fetchFlattenData(plan) {
  return fetchJSON(plan || "od").then(function(json){
    var result = [];
    json.config.regions.forEach(function(region){
      region.instanceTypes.forEach(function(type){
        type.sizes.forEach(function(size){
          result.push({
            "plan": json.plan, // od, ri-light, etc
            "size": size.size, // m3.medium
            "prices": formatPrices(size.valueColumns, json.plan),
            "region": canonicalizeRegionName(region.region)
          });
        });
      });
    });
    return result;
  });
}

function fetchFlattenAllData() {
  return Promise.all(Object.keys(rawdata).map(fetchFlattenData)).then(function(data){
    return Array.prototype.concat.apply([], data);
  });
}

module.exports = {
  fetchFlattenAllData: fetchFlattenAllData,
  fetchRegions: fetchRegions,
  fetchRegionNames: fetchRegionNames,
  fetchInstanceSizes: fetchInstanceSizes
};

},{"../json/linux-od.json":2,"../json/linux-ri-heavy.json":3,"../json/linux-ri-light.json":4,"../json/linux-ri-medium.json":5}],7:[function(require,module,exports){
var AWS = require("./aws");
var util = require("./util");
var info = require("../info.json");
var MONTHS = 40;

function init() {
  document.querySelector('#info').innerHTML = 'last modified AWS JSON at ' + info.lastModified;
  var selRegion = document.querySelector('#regions');

  function chooseRegion(){
    var region = selRegion.options[selRegion.selectedIndex].value;
    AWS.fetchInstanceSizes(region).then(function(sizes){
      var selSize = document.querySelector('#sizes');
      selSize.innerHTML = "<option>--</option>";
      sizes.sort(function(a,b){ return a.price - b.price; });
      sizes.forEach(function(size){
        selSize.innerHTML += '<option value="'+size.size+'">'+size.size+" ($"+size.price+'/h)</option>';
      });

      if(util.params().size){
        util.select(selSize, util.params().size);
        chooseSize();
      }
      selSize.addEventListener('change', chooseSize, false);
    });
  }

  function chooseSize() {
    var selSize = document.querySelector('#sizes');
    var size = selSize.options[selSize.selectedIndex].value;
    var region = selRegion.options[selRegion.selectedIndex].value;
    if(region && size) {
      util.params({
        region: region,
        size: size
      });
      draw();
    }
  }

  selRegion.addEventListener('change', chooseRegion, false);

  AWS.fetchRegionNames().then(function(regions){
    selRegion.innerHTML = "<option selected>--</option>";
    regions.forEach(function(region){
      selRegion.innerHTML += '<option value="'+region+'">'+region+'</option>';
    });
    if(util.params().region) {
      util.select(selRegion, util.params().region);
      chooseRegion();
    }
  });
}

function fetchPriceData() {
  var tmp = document.querySelector('#regions');
  var region = tmp.options[tmp.selectedIndex].value;
  var tmp = document.querySelector('#sizes');
  var size = tmp.options[tmp.selectedIndex].value;
  return AWS.fetchFlattenAllData().then(function(data){
    return data.filter(function(d){
      return d.region === region && d.size === size;
    });
  }).then(function(data){
    var formatted = data.map(function(d){
      return d.prices.map(function(price){
        var values = [];
        var sum = price.once;
        for(var i=0; i<=MONTHS; i++){
          if(i > 1 && (i % 12) === 1 && price.plan.match(/1y$/)){
            sum += price.once;
          }
          sum += (price.hourly * 24 * 30);
          values.push({x: i, y: Math.floor(sum * 100) / 100});
        }
        return {
          key: util.t(price.plan) + " / " + size,
          values: values
        };
      });
    });
    return Array.prototype.concat.apply([], formatted);
  }).catch(function(e){
    console.error(e.stack);
  });
}

function draw() {
  nv.addGraph(function() {
    var chart = nv.models.lineWithFocusChart();
    chart.tooltipContent(function(key, x, y){
       return '<h3>' + key + '</h3>' +
               '<p>USD $' +  y + ' at ' + x + ' months</p>'
    });

    chart.xAxis
      .axisLabel('Month(s)')
      .tickValues(d3.range(0, MONTHS, 1))
      ;
    chart.x2Axis
      .tickValues(d3.range(0, MONTHS, 1))
      ;

    chart.yAxis
      .tickFormat(d3.format(',.2f'))
      ;

    chart.y2Axis
      .axisLabel('USD(total)')
      .tickFormat(d3.format(',.2f'))
      ;

    fetchPriceData().then(function(prices){
      d3.select('#chart svg')
          .datum(prices)
          .transition().duration(500)
          .call(chart);
    });

    nv.utils.windowResize(chart.update);

    return chart;
  });
}

init();

},{"../info.json":1,"./aws":6,"./util":8}],8:[function(require,module,exports){
module.exports = {
  params: function(arg){
    return arg ? setParams(arg) : getParams();
  },
  select: function(elm, value) {
    elm.selectedIndex = -1;
    Array.prototype.forEach.call(elm.options, function(option, i){
      option.selected = (option.value === value);
    });
  },
  t: function(key) {
    var table = {
      "od": "on-demand",
      "ri-light1y": "Light 1 Year",
      "ri-light3y": "Light 3 Year",
      "ri-medium1y": "Medium 1 Year",
      "ri-medium3y": "Medium 3 Year",
      "ri-heavy1y": "Heavy 1 Year",
      "ri-heavy3y": "Heavy 3 Year"
    };
    return table[key] || key;
  }
};

function getParams() {
  return location.hash.slice(1).split('&').reduce(function(prev, current){
    var tmp = current.split('=', 2);
    prev[tmp[0]] = tmp[1];
    return prev;
  }, {});
}

function setParams(hash) {
  var t = Object.keys(hash).reduce(function(prev, current){
    prev.push(current + "=" + hash[current]);
    return prev;
  }, []).join("&");
  location.hash = t;
}

},{}]},{},[6,7,8])