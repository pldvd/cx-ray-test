require('dotenv').config();

const app = require('./app');
const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})