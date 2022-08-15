# Amazon S3

This service allows you to manage your files with [Amazon S3](https://aws.amazon.com/s3/) services.

## 📦 Installation

```bash
$ npm install @filesrocket/amazons3
```

## 🔧 Setup

Before using this service it is necessary to create an account to obtain access credentials. Visit [here](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html) to create an account.

## 🧑‍💻 Basic usage

To use the service add the following content.

```ts
import { Filesrocket } from "@filesrocket/core";
import { AmazonS3Service } from "@filesrocket/amazons3";

// Initialize filesrocket
const filesrocket = new Filesrocket();

// Setting service
const amazons3 = new AmazonS3Service({
  Pagination: { default: 15, max: 50 },
  Bucket: "<Your Bucket>",
  region: "<Your Region>",
  credentials: {
    accessKeyId: "<Your ACCESS_KEY>",
    secretAccessKey: "<Your SECRET_KEY>"
  }
});

// Register services
filesrocket.register("amazons3", amazons3)

// Recovering service
const service = filesrocket.service("amazons3")

// Recovering controller
const controller = filesrocket.controller("amazons3")
```
