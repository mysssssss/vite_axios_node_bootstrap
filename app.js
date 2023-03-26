require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// routers
const authRouter = require('./routes/auth');

// connect DB
const connectDB = require('./db/connect');

// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authMiddleware = require('./middleware/authentication');

// express middleware
app.use(express.json());

// extra packages
app.set('trust proxy', 1);

// routes
app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api/v1/auth', authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
