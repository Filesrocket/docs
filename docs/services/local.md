# Local

The Filesrocket Local service is one of many services that allows you to manage your files. This service allows you to manage your files locally, that is, on your own server.

## 📦 Installation

```bash
$ npm install @filesrocket/local
```

## 🧑‍💻 Basic usage

To use the service add the following content.

```ts
import { Filesrocket } from "@filesrocket/core";
import { LocalService } from "@filesrocket/local";

// Initialize filesrocket
const filesrocket = new Filesrocket();

// Setting service
const local = new LocalService({
  pagination: { default: 15, max: 50 },
  host: "http://localhost:3030",
  directory: "uploads"
});

// Register service
filesrocket.register("local", local);

// Recovering service
const fileService = filesrocket.service("local");

// Recovering controller
const fileController = filesrocket.controller("local");
```
