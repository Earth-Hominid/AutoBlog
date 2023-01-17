# AutoBlog

### A free platform to create and host your own blog.

## Description

The backend was built using the ExpressJS framework along with the Model-View-Controller (MVC) architecture pattern. This architecture separates the data management (the "model"), user interface (the "view"), and control flow (the "controller").

It was chosen as it provides easier to understand and maintain code, along with the added benefit of ease of ability in testing and extendeding the functionality of the application, if needed. Furthermore, it organises the routes and handlers in a logical and maintainable format.

Authentication provided by confirming user is in the database, while authorization is confirmed using JSON Web tokens to protect backend routes.

## Lessons learned

#### Middleware

Using Express's built in middleware function 'urlencoded' allows incoming requests with urlencoded payloads to be parsed. The parsed data is populated on the request object (req.body) and it contains key-value pairs which can either be a string or an array when 'extended' is set to false.

```js
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```

#### Error Handling Middleware

I was able to overwrite the Express error handler with my own middleware function. When set to 'development' it will return the error message and the stack, when server is set to 'production', only the message is returned.

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

#### Async/Await with Mongoose Promise

When interacting with our database using Mongoose, we will be recieving back a 'Promise', thus we need to use 'async/await'.

The Express-Async-Handler package is quite useful as we can use async/await without the extra boilerplate of 'try/catch'. We simply bring in the package and wrap the function with the handler:

```js
const asyncHandler = require('express-async-handler');

const getBlogs = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get blogs' });
});
```

#### Authentication Route Protection Middleware

Utilizing JSON Webtokens, we can write a function that that protects our routes by checking that our headers have the authorization object and they start with 'Bearer' and the token.

```js
const protectRoute = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const verifyTheToken = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(verifyTheToken.id).select('-password');

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not authorized');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});
```

### Dependencies

- [Express](https://expressjs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [Colors](https://www.npmjs.com/package/colors)
- [Nodemon](www.npmjs.com/package/nodemon)
- [Express-Async-Handler](https://www.npmjs.com/package/express-async-handler)
- [JSON Webtokens](https://jwt.io/)
- [B-Crypt](https://www.npmjs.com/package/bcrypt)
