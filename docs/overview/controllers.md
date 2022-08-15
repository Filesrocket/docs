# ⚙️ Controllers

A controller in Filesrocket is a class that is in charge of parsing the requests before invoking the Service. It basically works as an intermediary point for requests. Its responsibilities are the following:

- Interpret `multipart/form-data` requests.
- Validate extensions, sizes, file numbers and other properties.
- Generate unique filenames.

Currently the controller has 4 methods responsible for handling your files:

| Method | Description |
| ------ | ----------- |
| `create` | Method responsible for parsing the request of type `multipart/form-data` and uploading the files. |
| `list` | Method responsible for listing the files. |
| `get` | Method responsible for getting a file. |
| `remove` | Method responsible for deleting a file. |

## 🚀 Upload Files

This example shows how to upload a file through a request of type `multipart/form-data`

```ts
const files = await controller.create(req, {});
```

**Results**

```json
[
  {
    "id": "http://domain.com/image.png",
    "name": "image.jpg",
    "ext": ".jpg",
    "url": "http://domain.com/image.png",
    "size": 12345,
    "dir": "",
    "createdAt": "2022-03-08T20:09:07.958Z",
    "updatedAt": "2022-03-08T20:09:07.958Z"
  }
]
```

This example shows in a simple way how to upload files, later we will address how to condition these actions through validations, etc.

## 📝 List files

This example shows how to list files.

```ts
const files = await controller.list({});
```

**Results**

```json
{
  "items": [
    {
      "id": "http://domain.com/image.png",
      "name": "image.jpg",
      "ext": ".jpg",
      "url": "http://domain.com/image.png",
      "size": 12345,
      "dir": "",
      "createdAt": "2022-03-08T20:09:07.958Z",
      "updatedAt": "2022-03-08T20:09:07.958Z"
    }
  ],
  "total": 1,
  "size": 1,
  "page": 1,
  "next": null,
  "prev": null
}
```

:::info
All official services will return paginated data.
:::

## 🗑️ Delete file

This method is responsible for deleting files from a certain service. In order to delete a file, you have to send the `id`.

```ts
const file = await controller.remove("abc");
```

**Results**

```json
{
  "id": "http://domain.com/image.png",
  "name": "image.jpg",
  "ext": ".jpg",
  "url": "http://domain.com/image.png",
  "size": 12345,
  "dir": "",
  "createdAt": "2022-03-08T20:09:07.958Z",
  "updatedAt": "2022-03-08T20:09:07.958Z"
}
```

## ✅ Validations

You can also validate the file by specifying the rules for the **extension**, **number** and **size files**, and Filesrocket will perform the validations.

```ts
const files = await controller.create(req, {
  limits: { files: 5 },
  extnames: [".jpg", ".png", ".jpeg"]
});
```

:::warning
That validations will only be available in the **Controller**. In case you want to use the service directly, it will be your responsibility to add the validations.

All properties except the `extnames` belongs to [Busboy](https://github.com/mscdex/busboy#readme), so we recommend you visit the documentation.
:::

:::info
When you upload files whose extension is not valid, Filesrocket will filter the files that do meet the extension.
:::
