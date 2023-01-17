const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectMongoDatabase = require('./configDB/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

connectMongoDatabase();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/blogs', require('./routes/blogRoutes'));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
