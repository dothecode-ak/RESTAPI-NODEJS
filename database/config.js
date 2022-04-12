import mongoose from 'mongoose';
const DB_URL = "mongodb://127.0.0.1:27017/rest-api";
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
// export default DB_URL;