# Pagination

Pagination is one of the most used practices in **REST API** applications, since it allows returning a limited number of results, especially when handling large amounts of data; [Filesrocket](/introduction/what-is-filesrocket.md) is already prepared for this type of situation.

:::info
The properties shown below are valid in all official services. If you want to know all the services that exist, visit the following link: [Official services](/overview/services#📌-default-services)
:::

## Results size

In case you want to select a specific number of results, you do it through this property `size`.

**Example**

```ts
service.list({ size: 10 });
```

## Page token

When we obtain paginated data there will be elements that we do not obtain, in order to obtain other results it is necessary to specify the page.

:::info
The token format depends on the service you are using. For example, if you use `@filesrocket/local` it will be in numeric format; if you use `@filesrocket/cloudinary` it will be a hash string.
:::

**Example**

```ts
service.list({ page: 1 });
```

## Directory

When you want to get elements that belong to a specific subdirectory, or folder, you do it through the following property `path`

```ts
service.list({ path: "images" });
```
