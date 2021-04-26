require('dotenv').config();

const app = require('./app');
const PORT = process.env.PORT || 4200;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then((_) => console.log('DB is connected'))
  .catch((err) => {
    // Do something when connection fails.
    console.log(err.message);
  });

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})