const mongoose = require('mongoose');

// Connect to MongoDB

  const dbConnection=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/hookah', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
  }
module.exports=dbConnection
