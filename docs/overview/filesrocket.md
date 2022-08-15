# Filesrocket

Filesrocket is a class that is in charge of orchestrating all the available functionalities; like registering services, getting them, forming controllers, etc.

## Register services

In Filesrocket you can register multiple services to manage your files, the following example shows how to do it.

```ts
const filesrocket = new Filesrocket()
 
filesrocket.register("one", new OneService({...}))

filesrocket.register("two", new TwoService({...}))

filesrocket.register("three", new TwoService({...}))
```

**Explained**

- `first parameter`: specifies the name of the service, it is important that this is unique so that it can be distinguished from the rest.
- `second parameter`: is the class responsible for handling the files.

## Recovering service

To obtain a service, you do it in the following way. For more information about [Services](/overview/services).

```ts
const service = filesrocket.service("service-name")
```

Or get a list of all registered services.

```ts
filesrocket.services 
// [{ name, controller, service }]
```

## Recovering controller

To obtain a controller, you do it in the following way. For more information about [Controller](/overview/controllers)

```ts
const controller = filesrocket.controller("service-name")
```
