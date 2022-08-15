# 🛎️ Services

Services are the heart of Filesrocket. In this chapter we will dive more into services. In general, a service is an object or instance of a class that implements certain methods. Services provide a uniform, interface for how to interact with files.

## 📌 Default services

Currently there are 3 services, but this is only the tip of the iceberg, later we will incorporate many more with your help.

| Package | Description |
| ------ | ----------- |
| `@filesrocket/local` | Manage your files on your own server. |
| `@filesrocket/cloudinary` | Manage your files with [Cloudinary](/services/cloudinary). |
| `@filesrocket/amazons3` | Manage your files with [Amazon S3](/services/amazon-s3). |

## 🔨 Creating my First Service

The official services may not meet your needs, but don't worry, Filesrocket is thinking for you to create your own services. So let's get to it. But before, it is necessary to take into account some considerations.

When you `upload`, `list` or `delete` a file, you will always get an entity with the following properties regardless of the service you are using. Visit [Schema](/extras/schema.md).

Of course they open additional properties depending on the service, but these will be present at all times to avoid consistency problems or unexpected results.

In filesrocket when you want to upload a file it provides you with an input object and an output schema.

```ts
interface InputEntity {
  name: string;
  stream: NodeJS.ReadableStream;
  fieldname: string;
  encoding: string;
  mimetype: string;
}

interface OutputEntity {
  id: string;
  name: string;
  size: number;
  ext: string;
  url: string;
  dir: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  [key: string]: unknown;
}
```

**Define a class**

```ts
import { ServiceMethods, Id, OutputEntity } from "@filesrocket/core";

class MyService implements ServiceMethods {
  async create(data: InputEntity, query: Query): Promise<OutputEntity> {
    // ...
  }
 
  async list(query: Query): Promise<OutputEntity> {
    // ...
  }

  async get(id: Id, query: Query): Promise<OutputEntity> {
    // ...
  }
 
  async remove(id: string, query: Query): Promise<OutputEntity> {
    // ...
  }
}
```

## Register Service

```ts
filesrocket.register("my-service", new MyService({...}));
```

## Use via Service

In case you want to upload a file that does not come from an HTTP request, but you want to get them from a directory, you can directly use the service.

```ts
const service = filesrocket.service("my-service");
```

:::warning
When you interact directly with the service, you have to parse the entire request, generate unique filenames.
:::

## Use via Controller

```ts
const controller = filesrocket.controller("my-service");
```
