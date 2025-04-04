const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
const replyroutes = require('./routes/replies');
app.use('/api/replies',replyroutes)