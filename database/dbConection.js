module.exports = {
  connection:
    "mongodb://" +
    process.env.DB_USER +
    ":" +
    process.env.DB_PASS +
    "@mern-crad-demo-xo0xm.mongodb.net/test?retryWrites=true&w=majority"
};
