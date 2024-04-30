const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Set up CORS with specific origin
const corsOptions = {
  origin: 'https://663139409a01dd0563e98329--melodious-crepe-eea9d2.netlify.app',
};

app.use(cors(corsOptions));
app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/todo', require('./routes/todo.route'));

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });

  } catch (err) {
    console.error(err);
  }
}

start();
