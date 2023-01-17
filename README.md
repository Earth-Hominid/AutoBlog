# AutoBlog

## A free platform to create and host your own blog.

### Description

The backend was built using the ExpressJS framework along with the Model-View-Controller (MVC) architecture pattern.

The MVC pattern was chosen as it complements the REST api methodology.

### Intereting lessons learned

Using Express's built in middleware function 'urlencoded' allows incoming requests with urlencoded payloads to be parsed. The parsed data is populated on the request object (req.body) and it contains key-value pairs which can either be a string or an array when 'extended' is set to false.

```js
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```

I was able to overwrite the Express error handler with my own middleware function. It is set only for production, and returns the error message and the stack. If the server is set to production, the stack will return 'null'.

```js
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  });
};

module.exports = { errorHandler };
```

### Dependencies

- [Express](https://expressjs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [Colors](https://www.npmjs.com/package/colors)
- [Nodemon](www.npmjs.com/package/nodemon)
