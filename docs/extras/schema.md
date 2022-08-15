# 🧬 Schema

When using multiple Cloud Storage Services, these services have additional properties, different names that can cause conflicts in your applications, because possibly you were expecting a property and it does not exist in that service. It is for this reason that a response scheme was defined so that its APIs are as transparent as possible.

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

:::info
These properties will be available in all the services you use.
:::
