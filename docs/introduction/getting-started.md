# Getting Started

This section will help you build a local file hosting app from scratch. In this section, you will learn the basics of [Filesrocket](/introduction/what-is-filesrocket).

## Step 1: Create a new project

We create a new directory and access it.

```
$ mkdir my-filesrocket-app
$ cd my-filesrocket-app
```

We initialize a [Node.js](https://nodejs.org/en/) project.

```
$ npm install typescript ts-node -g
$ npm init -y
$ tcs --init
```

## Step 2: Install Dependencies

Add **filesrocket** to project dependencies.

```
$ npm install express @filesrocket/core @filesrocket/local
$ npm install @types/express -D
```

## Step 3: Initialize server using Express.js

We create the file that will serve as the entry point of our app.

```ts
// src/index.ts
import express from "express";
 
const app = express();
 
app.listen(3030, () => {
  console.log("App execute in port:3030");
});
```

## Step 4: Initialize Filesrocket

Register the services you are going to use.

```ts
// src/index.ts
import { Filesrocket } from "@filesrocket/core";
import { LocalService } from "@filesrocket/local";
 
// Initialize filesrocket.
const filesrocket = new Filesrocket();

// Configure your service.
const service = new LocalService({
  pagination: { default: 15, max: 50 },
  host: "http://localhost:3030",
  directory: "uploads",
});
 
// Register the service.
filesrocket.register("local", service);
```

## Step 5: Register endpoints

Register the endpoints of your application, either to upload, list or remove files.

```ts
// src/index.ts
const controller = filesrocket.controller("local");
 
// Create/Upload files.
app.post("/files", async (req, res) => {
  const files = await controller.create(req, {});
  res.status(200).json(files);
})
 
// List files.
app.get("/files", async (req, res) => {
  const query = req.query;

  const files = await controller.list(query);
  
  res.status(200).json(files);
})
 
// Remove files.
app.delete("/files", async (req, res) => {
  const query = req.query;
  const { id } = query;

  const files = await controller.remove(id, query)
  
  res.status(200).json(files)
})
```

## Step 6: Static Files

In case you want to view the files, you need to enable the static files folder.

```ts
// src/index.ts
app.use("/uploads", express.static(path.resolve("uploads")));
```

## Step 7: Run

Once the previous steps have been carried out, it is time to run our app.

```
ts-node src/index.ts
```

With these simple steps we can now upload, list and delete files locally quickly and easily. To list the files visit the following link: http://localhost:3030/files
