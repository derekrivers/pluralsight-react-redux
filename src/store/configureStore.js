if(process.env.NODE_ENV === "prodcution") {
  module.exports = require('./configureStore.prod');
}else {
  module.exports = require('./configureStore.dev');
}
