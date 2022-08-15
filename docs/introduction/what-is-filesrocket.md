# 🚀 What is Filesrocket?

Filesrocket is a package built entirely on Typescript that allows you to manage your files with various cloud storage services (Local, [Cloudinary](https://cloudinary.com/), [Amazon S3](https://aws.amazon.com/s3)) by using strategies called [Services](/overview/services).

## 🪶 Philosophy

Filesrocket provides a system that allows developers with a single package to manage the storage services in the cloud that they want, be it [Cloudinary](https://cloudinary.com/), [Amazon S3](https://aws.amazon.com/s3), without having to go through tedious configurations to consume the API's or SDK that these companies provide.

## 💡 Motivation

The main reason for **Filesrocket** is to be a package that allows you to manage your files regardless of the service you are using. Many times when we develop applications it is necessary to upload files, such as a client's photograph, the cover of a book, etc. And all this leads to setting up an entire infrastructure for each service we use. With **Filesrocket** you forget about all those problems, since it has all the solutions for each provider. In this way we greatly speed up development when we need to handle files and offer a uniform solution for each service.

## 🌈 Features

- 🔭 Manage your files with multiple cloud storage services (Local, [Cloudinary](/services/cloudinary), [Amazon S3](/services/amazon-s3)
- ✅ Validations (validate extensions, file sizes and more)
- ⚡ Easy to configure and integrate
- 🛡️ Written in Typescript
- 👨🏻‍💻 Community driven

## 🤔 Difference with other packages

### Multer

[Multer](https://github.com/expressjs/multer#readme) is possibly the most used package for uploading static files, it is easy to configure and intuitive. However, you will have to form the urls of your files, paginate your results, etc. Also, if you want to save them to a cloud storage service like [Amazon S3](https://aws.amazon.com/s3), you'll need to do your own configuration, which **Filesrocket** does all for you ❤️

### Busboy

[Busboy](https://github.com/mscdex/busboy#readme) is another alternative, which offers better performance because it adds a very thin layer for interpreting `multipart/form-data` requests. Unlike multer, you should also add the logic to store files, since busboy only interprets the requests, thus making it more complex.

By the way, **Multer** and **Filesrocket** use **Busboy** from behind.

### Formidable

[Formidable](https://github.com/node-formidable/formidable#readme), it is also an excellent option, since it allows you to easily save files, add validations, etc. But it has similar characteristics as the previous ones.

### Express-fileupload

[Express-fileupload](https://github.com/richardgirges/express-fileupload#readme) It is also a good option as it offers the similar features as the previous packages.
